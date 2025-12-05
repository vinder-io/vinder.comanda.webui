import { useState } from "react";
import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

import { useCreateIdentity } from "@/application/features/identity/hooks/use-create-identity";

export function useRegisterForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const createIdentity = useCreateIdentity();
    const isLoading = createIdentity.isPending;

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        createIdentity.mutate({ username, password }, {
            onSuccess: (result) => {
                if (!result.isSuccess) {
                    toast.error("Oops! Não foi possível criar a conta.");
                    return;
                }

                toast.success("Conta criada com sucesso! Agora vamos criar seu perfil.");

                navigate("/register/profile", {
                    state: {
                        userId: result.value!.id,
                        username: result.value!.username,
                    }
                });
            },
            onError: () => {
                toast.error("Erro inesperado ao criar conta.");
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
