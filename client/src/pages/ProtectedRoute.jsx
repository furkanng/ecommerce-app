import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const ProtectedRoute = () => {

    const { loggedIn } = useAuth();

    if (loggedIn) {
        return (
            <Outlet />
        )
    }

    return <Navigate to="/" />
}

export default ProtectedRoute;