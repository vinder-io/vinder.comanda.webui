import { httpClient } from "@/lib/http-client";
import { Result } from "@/types/common/result";

import type { ProfileCreationScheme } from "@/application/features/profile/types/profile-creation-scheme";
import type { ProfileScheme } from "@/application/features/profile/types/profile-scheme";

export class ProfileClient {
    public static async createProfile(profile: ProfileCreationScheme): Promise<Result<ProfileScheme>> {
        try {
            const response = await httpClient.post<ProfileScheme>("/owners", profile);
            return Result.success<ProfileScheme>(response.data);
        }
        catch (error: any) {
            return Result.failure<ProfileScheme>(error.response.data);
        }
    }
}
