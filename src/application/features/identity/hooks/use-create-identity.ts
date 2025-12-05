import { useMutation } from "@tanstack/react-query";
import { IdentityClient } from "@/application/features/identity/clients/identity-client";

import type { AuthenticationCredentials } from "@/application/features/identity/types/authentication-credentials";
import type { UserDetails } from "@/application/features/identity/types/user-details";
import type { Result } from "@/types/common/result";

export function useCreateIdentity() {
    return useMutation<Result<UserDetails>, unknown, AuthenticationCredentials>({
        mutationFn: async (credentials: AuthenticationCredentials) => {
            return await IdentityClient.createIdentity(credentials);
        }
    });
}
