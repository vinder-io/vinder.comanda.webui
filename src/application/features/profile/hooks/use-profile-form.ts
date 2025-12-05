import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import toast from "react-hot-toast";

import { useCreateProfile } from "@/application/features/profile/hooks/use-create-profile";

export function useProfileForm() {
    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const navigate = useNavigate();
    const location = useLocation();

    const userId = location.state?.userId;
    const username = location.state?.username;

    const createProfile = useCreateProfile();
    const isLoading = createProfile.isPending;

    const splitFullName = (fullName: string): { firstName: string; lastName: string } => {
        const nameParts = fullName.trim().split(/\s+/);

        if (nameParts.length === 0) {
            return { firstName: "", lastName: "" };
        }

        if (nameParts.length === 1) {
            return { firstName: nameParts[0], lastName: "" };
        }

        const firstName = nameParts[0];
        const lastName = nameParts.slice(1).join(" ");

        return { firstName, lastName };
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!userId || !username) {
            toast.error("Dados de usuário não encontrados. Por favor, crie a conta novamente.");
            navigate("/register");
            return;
        }

        const { firstName, lastName } = splitFullName(fullName);

        if (!firstName) {
            toast.error("Por favor, informe seu nome completo.");
            return;
        }

        createProfile.mutate(
            {
                firstName,
                lastName,
                phoneNumber,
                email: username,
                userId,
                username,
            },
            {
                onSuccess: (result) => {
                    if (!result.isSuccess) {
                        toast.error("Oops! Não foi possível criar o perfil.");
                        return;
                    }

                    toast.success("Perfil criado com sucesso! Agora escolha seu plano.");

                    navigate("/subscription", { state: { userId, username }});
                },
                onError: () => {
                    toast.error("Erro inesperado ao criar perfil.");
                },
            }
        );
    };

    return {
        fullName, setFullName,
        phoneNumber, setPhoneNumber,
        isLoading, handleSubmit,
    };
}
