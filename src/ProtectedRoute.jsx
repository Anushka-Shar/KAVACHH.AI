import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export default function ProtectedRoute({ children, allowedRole }) {
       const { role } = useContext(AuthContext);
       if (role !== allowedRole) return <Navigate to="/role-selection" replace />;
       return children;
}


