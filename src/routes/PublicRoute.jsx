import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../AuthContext";

function PublicRoute() {

  const { user } = useContext(AuthContext);

  if (user) {
    return <Navigate to="/profile" replace />;
  }

  return <Outlet />;
}

export default PublicRoute;

//Permite que el usuario acceda al login si ya estaba autenticado