import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PageSpinner from "../components/PageSpinner";
import { AuthContext } from "../contexts/AuthProvider";
import useUserRoleChecker from "../hooks/useUserRoleChecker";

const AdminRoute = ({ children }) => {
	const location = useLocation();
	const { user, loadingUser, logout } = useContext(AuthContext);
	const [userRole, loadingUserRole] = useUserRoleChecker(user?.email);

	if (loadingUserRole) {
		return <PageSpinner></PageSpinner>;
	}

	if (user && userRole === "admin") {
		return children;
	} else {
		// logout();
		return <Navigate to={"/signin"} state={{ from: location }} replace />;
	}
};

export default AdminRoute;
