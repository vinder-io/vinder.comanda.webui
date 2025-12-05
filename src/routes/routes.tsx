import { BrowserRouter, Routes, Route } from "react-router-dom"

import LoginPage from "@/application/features/identity/pages/login-page"
import RegisterPage from "@/application/features/identity/pages/register-page"
import ProfileCreationPage from "@/application/features/profile/pages/profile-creation-page"
import SubscriptionPage from "@/application/features/subscription/pages/subscription-page"
import SubscriptionSuccessPage from "@/application/features/subscription/pages/subscription-success-page"
import SubscriptionCancelPage from "@/application/features/subscription/pages/subscription-cancel-page"

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/register/profile" element={<ProfileCreationPage />} />
                <Route path="/subscription" element={<SubscriptionPage />} />
                <Route path="/subscription/success" element={<SubscriptionSuccessPage />} />
                <Route path="/subscription/cancel" element={<SubscriptionCancelPage />} />
            </Routes>
        </BrowserRouter>
    )
}
