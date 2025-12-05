import { useMutation } from "@tanstack/react-query";
import { IdentityClient } from "@/application/features/identity/clients/identity-client";

import type { AuthenticationCredentials } from "@/application/features/identity/types/authentication-credentials";
import type { AuthenticationResponse } from "@/application/features/identity/types/authentication-response";
import type { Result } from "@/types/common/result";

export function useAuthenticate() {
    return useMutation<Result<AuthenticationResponse>, unknown, AuthenticationCredentials>({
        mutationFn: async (credentials: AuthenticationCredentials) => {
            return await IdentityClient.authenticate(credentials);
        }
    });
}
