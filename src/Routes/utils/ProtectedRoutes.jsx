import { Outlet,Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
    const isLoggedIn  = false;
    return isLoggedIn ? <Outlet/> : <Navigate to="/"/>
}
export default ProtectedRoutes