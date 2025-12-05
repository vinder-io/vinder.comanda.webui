import { createRoot } from "react-dom/client"
import { StrictMode } from "react"
import { Toaster } from "react-hot-toast"

import "./index.css"
import "./app.css"

import AppRoutes from "./routes/routes.tsx"

import { AuthenticationStateProvider } from "./application/features/identity/contexts/authentication-context.tsx"
import { AuthorizationStateProvider } from "./application/features/identity/contexts/authorization-context.tsx"

import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "./lib/query-client.ts"

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <AuthenticationStateProvider>
                <AuthorizationStateProvider>
                    <Toaster position="bottom-right" />
                    <AppRoutes />
                </AuthorizationStateProvider>
            </AuthenticationStateProvider>
        </QueryClientProvider>
    </StrictMode>
)