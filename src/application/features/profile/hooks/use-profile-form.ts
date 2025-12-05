import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import toast from "react-hot-toast";

import { useCreateProfile } from "@/application/features/profile/hooks/use-create-profile";

export function useProfileForm() {
    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const navigate = useNavigate();
    const location = useLocation();

    // Dados vindos da criação de identidade
    const userId = location.state?.userId;
    const username = location.state?.username;

    const createProfile = useCreateProfile();
    const isLoading = createProfile.isPending;

    // Função inteligente para dividir o nome completo
    const splitFullName = (fullName: string): { firstName: string; lastName: string } => {
        const nameParts = fullName.trim().split(/\s+/);
        
        if (nameParts.length === 0) {
            return { firstName: "", lastName: "" };
        }
        
        if (nameParts.length === 1) {
            return { firstName: nameParts[0], lastName: "" };
        }
        
        // Primeiro nome é o primeiro elemento
        const firstName = nameParts[0];
        
        // Sobrenome é tudo que vem depois
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
                email: username, // username é o email
                userId,
                username,
            },
            {
                onSuccess: (result) => {
                    if (!result.isSuccess) {
                        toast.error("Oops! Não foi possível criar o perfil.");
                        return;
                    }

                    toast.success("Perfil criado com sucesso! Bem-vindo!");

                    // Redireciona para o login
                    navigate("/");
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
