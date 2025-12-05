import { useMutation } from "@tanstack/react-query";
import { SubscriptionClient } from "@/application/features/subscription/clients/subscription-client";

import type { CheckoutSessionCreationScheme } from "@/application/features/subscription/types/checkout-session-creation-scheme";
import type { CheckoutSession } from "@/application/features/subscription/types/checkout-session";
import type { Result } from "@/types/common/result";

export function useCreateCheckoutSession() {
    return useMutation<Result<CheckoutSession>, unknown, CheckoutSessionCreationScheme>({
        mutationFn: async (scheme: CheckoutSessionCreationScheme) => {
            return await SubscriptionClient.createCheckoutSession(scheme);
        }
    });
}
