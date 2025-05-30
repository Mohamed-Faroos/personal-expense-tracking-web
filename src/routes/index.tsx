import type React from "react";
import { Navigate, Outlet } from "react-router-dom";

const token = "";


export const AuthRoute: React.FC = () => {
    return !token ? <Outlet /> : <Navigate to="/" replace />;
};

export const PrivateRoute: React.FC = () => {
    return token ? <Outlet /> : <Navigate to="/sign-in" replace />;
};

