import Keycloak from 'keycloak-js';
export declare const useAuth: (authClient: Keycloak) => {
    keycloak: Keycloak;
    initialized: boolean;
    error: string;
};
