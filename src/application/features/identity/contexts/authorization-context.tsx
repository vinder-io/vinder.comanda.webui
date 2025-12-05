import type { Dispatch, ReactNode, SetStateAction } from "react";

import { createContext, useState, useContext, useEffect, useMemo } from "react";
import { useAuthenticationState } from "./authentication-context";
import { JwtParser } from "@/utils/jwt-parser";

import { String } from "@/constants/string";
import { UsersClient } from "@/application/features/identity/clients/users-client";

type AuthorizationStateContextParameters = {
    permissions: string[];
    groups: string[];

    hasPermission: (permission: string) => boolean;
    hasGroup: (groupId: string) => boolean;
};

const AuthorizationContext = createContext<AuthorizationStateContextParameters | undefined>(undefined);

export const AuthorizationStateProvider = ({ children }: { children: ReactNode }) => {
    const { accessToken } = useAuthenticationState();

    const [permissions, setPermissions] = useState<string[]>([]);
    const [groups, setGroups] = useState<string[]>([]);

    useEffect(() => {
        // we call this "metadata" because it represents user-related authorization data,
        // such as permissions and groups, which are essentially metadata about the user's access rights.
        loadAuthorizationMetadata(accessToken, setPermissions, setGroups);
    }, [accessToken]);

    const hasPermission = (permission: string) => permissions.includes(permission);
    const hasGroup = (group: string) => groups.includes(group);

    /* use memo prevents unnecessary re-renders by memoizing the context value */
    const value = useMemo(
        () => ({ permissions, groups, hasPermission, hasGroup }),
        [permissions, groups, hasPermission, hasGroup]
    );

    return (
        <AuthorizationContext.Provider value={value}>
            {children}
        </AuthorizationContext.Provider>
    );
};

export const useAuthorizationState = () => {
    const context = useContext(AuthorizationContext);
    if (!context) throw new Error(String.Empty);
    return context;
};


async function loadAuthorizationMetadata(
    token: string | null,
    setPermissions: Dispatch<SetStateAction<string[]>>,
    setGroups: Dispatch<SetStateAction<string[]>>
) {
    if (!token) {
        setPermissions([]);
        setGroups([]);

        return;
    }

    setPermissions(JwtParser.getPermissions(token));

    const user = JwtParser.getUserDetails(token);

    if (!user)
        return;

    const result = await UsersClient.getUserGroupsAsync(user.id);

    if (result.isSuccess && result.value) {
        const groupNames = Array.isArray(result.value) ? result.value.map(group => group.name) : [result.value.name];
        setGroups(groupNames);
    }
}
