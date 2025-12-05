import { identityClient } from "@/lib/http-client";
import { Result } from "@/types/common/result";

import type { AuthenticationCredentials } from "@/application/features/identity/types/authentication-credentials";
import type { AuthenticationResponse } from "@/application/features/identity/types/authentication-response";
import type { UserDetails } from "@/application/features/identity/types/user-details";

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

    public static async createIdentity(credentials: AuthenticationCredentials): Promise<Result<UserDetails>> {
        try {
            const response = await identityClient.post<UserDetails>("/identity", credentials);
            return Result.success<UserDetails>(response.data);
        }
        catch (error: any) {
            return Result.failure<UserDetails>(error.response.data);
        }
    }
}
