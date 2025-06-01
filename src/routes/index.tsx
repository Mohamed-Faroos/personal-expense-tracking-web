import type React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../state/store";

/* Public route for auth routes */
export const AuthRoute: React.FC = () => {
    const token = useSelector((state: RootState) => state.session.user?.accessToken);
    return !token ? <Outlet /> : <Navigate to="/" replace />;
};

/* private route for protected routes */
export const PrivateRoute: React.FC = () => {
    const token = useSelector((state: RootState) => state.session.user?.accessToken);
    return token ? <Outlet /> : <Navigate to="/sign-in" replace />;
};

