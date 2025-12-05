import { useMutation } from "@tanstack/react-query";
import { ProfileClient } from "@/application/features/profile/clients/profile-client";

import type { ProfileCreationScheme } from "@/application/features/profile/types/profile-creation-scheme";
import type { ProfileScheme } from "@/application/features/profile/types/profile-scheme";
import type { Result } from "@/types/common/result";

export function useCreateProfile() {
    return useMutation<Result<ProfileScheme>, unknown, ProfileCreationScheme>({
        mutationFn: async (profile: ProfileCreationScheme) => {
            return await ProfileClient.createProfile(profile);
        }
    });
}
