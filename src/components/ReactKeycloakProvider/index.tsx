import * as React from "react";
import { createContext } from "react";
import { useAuth } from "../../hooks/useAuth";
import Keycloak from 'keycloak-js';

type KeycloakInstance = Keycloak;

type MyPropConentext = {
  keycloak: KeycloakInstance,
  initialized: boolean,
  error: string
}

type Props = {
  authClient: KeycloakInstance
  children: React.ReactNode
}

export const KeycloakContext = createContext({} as MyPropConentext);
export const ReactKeycloakProvider = ({ authClient, children } : Props) => {
  const {keycloak, initialized, error} = useAuth(authClient);
  return (
    <KeycloakContext.Provider value={{ keycloak, initialized, error }}>
      {children}
    </KeycloakContext.Provider>
  );
};
