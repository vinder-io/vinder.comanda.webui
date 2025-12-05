import { BrowserRouter, Routes, Route } from "react-router-dom"

import LoginPage from "@/application/features/identity/pages/login-page"
import RegisterPage from "@/application/features/identity/pages/register-page"
import ProfileCreationPage from "@/application/features/profile/pages/profile-creation-page"

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/register/profile" element={<ProfileCreationPage />} />
            </Routes>
        </BrowserRouter>
    )
}
