import { useLocation, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

import { useCreateCheckoutSession } from "@/application/features/subscription/hooks/use-create-checkout-session";
import { Plan } from "@/application/features/subscription/types/plan";

export function useSubscriptionForm() {
    const navigate = useNavigate();
    const location = useLocation();

    const userId = location.state?.userId;
    const username = location.state?.username;

    const createCheckoutSession = useCreateCheckoutSession();
    const isLoading = createCheckoutSession.isPending;

    const handleSubscribe = async () => {
        if (!userId || !username) {
            toast.error("Dados de usuário não encontrados. Por favor, crie a conta novamente.");

            navigate("/register");

            return;
        }

        const baseUrl = globalThis.location?.origin ?? "";

        createCheckoutSession.mutate(
            {
                plan: Plan.Basic,
                subscriber: {
                    id: userId,
                    username: username,
                },
                callbacks: {
                    successUrl: `${baseUrl}/subscription/success`,
                    cancelUrl: `${baseUrl}/subscription/cancel`,
                },
            },
            {
                onSuccess: (result) => {
                    if (!result.isSuccess) {
                        toast.error("Oops! Não foi possível criar a sessão de pagamento.");
                        return;
                    }

                    globalThis.location.href = result.value!.url;
                },
                onError: () => {
                    toast.error("Erro inesperado ao criar sessão de pagamento.");
                },
            }
        );
    };

    return {
        isLoading,
        handleSubscribe,
    };
}
