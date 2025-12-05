import { BrowserRouter, Routes, Route } from "react-router-dom"

import LoginPage from "@/application/pages/identity/page"

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    )
}
