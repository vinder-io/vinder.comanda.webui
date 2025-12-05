import { useMutation } from "@tanstack/react-query";
import { IdentityClient } from "@/clients/identity-client";

import type { AuthenticationCredentials } from "@/types/identity/authentication-credentials";
import type { AuthenticationResponse } from "@/types/identity/authentication-response";
import type { Result } from "@/types/common/result";

export class AuthenticationHook {
    public static useAuthenticate() {
        return useMutation<Result<AuthenticationResponse>, unknown, AuthenticationCredentials>({
            mutationFn: async (credentials: AuthenticationCredentials) => {
                return await IdentityClient.authenticate(credentials);
            }
        });
    }
}
