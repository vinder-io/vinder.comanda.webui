import { useState } from "react";
import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

import { useAuthenticationState } from "@/contexts/authentication-context";
import { useAuthenticate } from "@/application/features/identity/hooks/authentication-hook";

export function useLoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const { setAuthenticationState } = useAuthenticationState();

    const navigate = useNavigate();

    const authenticate = useAuthenticate();
    const isLoading = authenticate.isPending;

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        authenticate.mutate({ username, password }, {
            onSuccess: (result) => {
                if (!result.isSuccess) {
                    toast.error("Oops! Verifique seu e-mail e senha.");
                    return;
                }

                toast.success("Bem vindo de volta!");

                setAuthenticationState(result.value!);
                navigate("/dashboard");
            },
            onError: () => {
                toast.error("Erro inesperado ao autenticar.");
            },
        });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return {
        username, setUsername,
        password, setPassword,
        showPassword, togglePasswordVisibility,
        isLoading, handleSubmit,
    };
}
