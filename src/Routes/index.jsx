import { Routes, Route, useLocation } from "react-router-dom";
import ProtectedRoutes from "./utils/ProtectedRoutes";

import { LoginModal, RegisterModal } from '@components/modals'
import Home from "@Pages/home";
import Shop from "@Pages/shop";

function AppRoutes() {
    const location = useLocation();
    const state = location.state && location.state.backgroundLocation;

    return (
        <Routes location={state || location}>
            <Route path="/" element={<Shop />} />
            <Route path="/login" element={<LoginModal />} />
            <Route path="/registro" element={<RegisterModal />} />

            {/* {
                state && (
                    <Routes>
                        <Route path="/login" element={<LoginModal />} />
                        <Route path="/Registro" element={<RegisterModal />} />
                    </Routes>
                )
            } */}
            {/* ========== rutas protegidas por seguridad ========== */}
            <Route element={<ProtectedRoutes />}>
                <Route path="/tienda" element={<Home />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes