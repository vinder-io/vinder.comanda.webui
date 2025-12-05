import { BrowserRouter, Routes, Route } from "react-router-dom"

import LoginPage from "@/application/features/identity/pages/page"

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    )
}
