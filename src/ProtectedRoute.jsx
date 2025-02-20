import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuthStore from "./api/authStore";

const ProtectedRoute = () => {
	const { token } = useAuthStore();
	const location = useLocation();

	

	return token ? (
		<Outlet />
	) : (
		<Navigate to="/login" state={{ from: location }} replace />
	);
};

export default ProtectedRoute;
