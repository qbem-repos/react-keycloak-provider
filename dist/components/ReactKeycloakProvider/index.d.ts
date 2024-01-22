import * as React from "react";
import Keycloak from 'keycloak-js';
type KeycloakInstance = Keycloak;
type MyPropConentext = {
    keycloak: KeycloakInstance;
    initialized: boolean;
    error: string;
};
type Props = {
    authClient: KeycloakInstance;
    children: React.ReactNode;
};
export declare const KeycloakContext: React.Context<MyPropConentext>;
export declare const ReactKeycloakProvider: ({ authClient, children }: Props) => React.JSX.Element;
export {};
