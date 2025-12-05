import { createContext, useState, useContext, useMemo } from "react";

import type { ReactNode } from "react";
import type { AuthenticationResponse } from "@/application/features/identity/types/authentication-response";

import { Storage } from "@/utils/storage";
import { StorageKeys } from "@/constants/storage-keys";
import { String } from "@/constants/string";

type AuthenticationStateContextParameters = {
    accessToken: string;
    refreshToken: string;
    isAuthenticated: boolean;

    setAuthenticationState: (payload: AuthenticationResponse) => void;
    logout: () => void;
};

const AuthContext = createContext<AuthenticationStateContextParameters | undefined>(undefined);

export const AuthenticationStateProvider = ({ children }: { children: ReactNode }) => {
    const [accessToken, setAccessToken] = useState<string>(Storage.getItem(StorageKeys.AccessToken));
    const [refreshToken, setRefreshToken] = useState<string>(Storage.getItem(StorageKeys.RefreshToken));

    const setAuthenticationState = (payload: AuthenticationResponse) => {
        setAccessToken(payload.accessToken);
        setRefreshToken(payload.refreshToken);

        Storage.setItem(StorageKeys.AccessToken, payload.accessToken);
        Storage.setItem(StorageKeys.RefreshToken, payload.refreshToken);
    };

    const logout = () => {
        setAccessToken(String.Empty);
        setRefreshToken(String.Empty);

        Storage.removeItem(StorageKeys.AccessToken);
        Storage.removeItem(StorageKeys.RefreshToken);
    };

    const isAuthenticated = !!accessToken;

    /* use memo prevents unnecessary re-renders by memoizing the context value */
    const value = useMemo(
        () => ({ accessToken, refreshToken, setAuthenticationState, logout, isAuthenticated }),
        [accessToken, refreshToken, isAuthenticated]
    );

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthenticationState = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error(String.Empty);
    }

    return context;
};
