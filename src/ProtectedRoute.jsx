import { Navigate } from "react-router-dom";
import { isTokenExpired, getUserRole } from "./API/auth";

const ProtectedRoute = ({ children, redirect, allowedRoles }) => {
    const token = localStorage.getItem("accessToken")

    if(!token || isTokenExpired(token)) {
        return <Navigate to={redirect} replace />;
    }

    const role = getUserRole(token);

    if(!allowedRoles.includes(role)) {
        return <Navigate to={redirect} replace />;
    }

    return children;
};

export default ProtectedRoute;
