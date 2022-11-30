import {
	createUserWithEmailAndPassword, getAuth,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import firebaseApp from "../firebase/Firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loadingUser, setLoadingUser] = useState(true);

	const auth = getAuth(firebaseApp);

	// Google auth provider
	const googleProvider = new GoogleAuthProvider();

	// Create user with email/password
	const createUser = (email, password) => {
		setLoadingUser(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	// Log in with email/password
	const login = (email, password) => {
		setLoadingUser(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	// Google login
	const googleLogin = () => {
		setLoadingUser(true);
		return signInWithPopup(auth, googleProvider);
	};

	// Log out
	const logout = () => {
		setLoadingUser(true);
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
		setLoadingUser(true);
		return updateProfile(auth.currentUser, {
			displayName: name,
		});
	};

	// User state observer
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoadingUser(false);
		});

		return () => unsubscribe();
	}, [auth]);

	// Value
	const value = {
		user,
		loadingUser,
		createUser,
		login,
		logout,
		updateUserProfile,
		googleLogin,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
