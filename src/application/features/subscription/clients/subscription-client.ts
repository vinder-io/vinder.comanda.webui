import { httpClient } from "@/lib/http-client";
import { Result } from "@/types/common/result";

import type { CheckoutSessionCreationScheme } from "@/application/features/subscription/types/checkout-session-creation-scheme";
import type { CheckoutSession } from "@/application/features/subscription/types/checkout-session";

export class SubscriptionClient {
    public static async createCheckoutSession(scheme: CheckoutSessionCreationScheme): Promise<Result<CheckoutSession>> {
        try {
            const response = await httpClient.post<CheckoutSession>("/subscriptions/checkout", scheme);
            return Result.success<CheckoutSession>(response.data);
        }
        catch (error: any) {
            return Result.failure<CheckoutSession>(error.response.data);
        }
    }
}
