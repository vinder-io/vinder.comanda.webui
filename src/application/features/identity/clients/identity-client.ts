import { identityClient } from "@/lib/http-client";
import { Result } from "@/types/common/result";

import type { AuthenticationCredentials } from "@/application/features/identity/types/authentication-credentials";
import type { AuthenticationResponse } from "@/application/features/identity/types/authentication-response";

export class IdentityClient {
    public static async authenticate(credentials: AuthenticationCredentials): Promise<Result<AuthenticationResponse>> {
        try {
            const response = await identityClient.post<AuthenticationResponse>("/identity/authenticate", credentials);
            return Result.success<AuthenticationResponse>(response.data);
        }
        catch (error: any) {
            return Result.failure<AuthenticationResponse>(error.response.data);
        }
    }
}
