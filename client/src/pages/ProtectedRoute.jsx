import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const ProtectedRoute = () => {

    const { loggedIn, user } = useAuth();

    if (user.role !== "admin") {
        return (
            <Navigate to="/" />
        )
    }

    if (loggedIn) {
        return (
            <Outlet />
        )
    }

    return <Navigate to="/" />
}

export default ProtectedRoute;