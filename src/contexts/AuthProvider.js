import {
	createUserWithEmailAndPassword,
	getAuth,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import firebaseApp from "../firebase/Firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	// Server URLs
	const serverLocalUrl = process.env.REACT_APP_SERVER_LOCAL_URL;
	const serverLiveUrl = process.env.REACT_APP_SERVER_LIVE_URL;

	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const auth = getAuth(firebaseApp);

	// Google auth provider
	const googleProvider = new GoogleAuthProvider();

	// Create user with email/password
	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	// Log in with email/password
	const login = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	// Google login
	const loginwithGoogle = () => {
		return signInWithPopup(auth, googleProvider);
	};

	// Log out
	const logout = () => {
		signOut(auth)
			.then(() => {
				toast.success("Logged out successfully");
			})
			.catch((error) => {
				console.error(error);
			});
	};

	// Update profile
	const updateUserProfile = (name) => {
		return updateProfile(auth.currentUser, {
			displayName: name,
		});
	};

	// User state observer
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoading(false);
		});

		return () => unsubscribe();
	}, [auth]);

	// Value
	const value = {
		user,
		loading,
		createUser,
		login,
		logout,
		updateUserProfile,
		loginwithGoogle,
		serverLocalUrl,
		serverLiveUrl,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
