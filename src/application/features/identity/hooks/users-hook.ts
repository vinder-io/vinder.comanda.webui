import { UsersClient } from "@/application/features/identity/clients/users-client";
import { CacheKeys } from "@/constants/cache-keys";
import { useQuery } from "@tanstack/react-query";

import type { Pagination } from "@/types/common/pagination";
import type { Result } from "@/types/common/result";
import type { UseQueryResult } from "@tanstack/react-query";

import type { UserDetailsScheme } from "@/application/features/identity/types/user-details.scheme";
import type { UsersFetchParameters } from "@/application/features/identity/types/users-fetch-parameters.scheme";
import type { GroupBasicDetails } from "@/application/features/identity/types/group-basic-details";

export function useUsers(parameters: UsersFetchParameters):
    UseQueryResult<Result<Pagination<UserDetailsScheme>>> {
    return useQuery({
        queryKey: [CacheKeys.Users, parameters],
        queryFn: async (): Promise<Result<Pagination<UserDetailsScheme>>> => {
            return await UsersClient.getUsersAsync(parameters);
        },
    });
}

export function useUserGroups(userId: string):
    UseQueryResult<Result<GroupBasicDetails>> {
    return useQuery({
        queryKey: [CacheKeys.UserGroups, userId],
        queryFn: async (): Promise<Result<GroupBasicDetails>> => {
            return await UsersClient.getUserGroupsAsync(userId);
        }
    });
}