import axios from "axios";
import { StorageKeys } from "@/constants/storage-keys";

export const httpClient = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
});

export const identityClient = axios.create({
    baseURL: import.meta.env.VITE_IDENTITY_PROVIDER_URL,
    headers: {
        "X-Tenant": import.meta.env.VITE_TENANT
    }
});

httpClient.interceptors.request.use(
    (instance) => {
        const tenant = import.meta.env.VITE_TENANT;
        const token = localStorage.getItem(StorageKeys.AccessToken);

        instance.headers["X-Tenant"] = tenant;
        instance.headers["Authorization"] = `Bearer ${token}`;

        return instance;
    },

    (error) => {
        return Promise.reject(error);
    }
);

identityClient.interceptors.request.use(
    (instance) => {
        const tenant = import.meta.env.VITE_TENANT;
        const token = localStorage.getItem(StorageKeys.AccessToken);

        instance.headers["X-Tenant"] = tenant;
        instance.headers["Authorization"] = `Bearer ${token}`;

        return instance;
    },

    (error) => {
        return Promise.reject(error);
    }
);
