import Inicio from "./pages/inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;