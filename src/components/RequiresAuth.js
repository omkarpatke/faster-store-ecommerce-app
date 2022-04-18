import { Navigate, useLocation } from "react-router-dom";
import { useUserAuth } from "../context/userAuth-context";

export function RequiresAuth({ children }) {
    const location = useLocation();
    const { isLogIn } = useUserAuth();
  return isLogIn ? children : <Navigate to="/sign-in" state={{from : location }} replace />;
}
