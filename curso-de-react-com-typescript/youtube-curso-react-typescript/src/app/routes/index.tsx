import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom"
import { Dashboard, Login } from "../pages"

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/entrar" Component={Login} />
                <Route path="/pagina-inicial" Component={Dashboard} />
                <Route path="*" Component={() => <Navigate to="/pagina-inicial" />} />
            </Routes>
        </BrowserRouter>
    )
}