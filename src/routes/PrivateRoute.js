import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PageSpinner from "../components/PageSpinner";
import { AuthContext } from "../contexts/AuthProvider";

const PrivateRoute = ({ children }) => {
	const { user, loadingUser } = useContext(AuthContext);
	const location = useLocation();

	if (loadingUser) {
		return <PageSpinner></PageSpinner>;
	}

	if (user) {
		return children;
	} else {
		return <Navigate to={"/signin"} state={{ from: location }} replace />;
	}
};

export default PrivateRoute;
