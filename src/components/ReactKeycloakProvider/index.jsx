import { createContext } from "react";
import useAuth from "../../hooks/useAuth";
import PropTypes from "prop-types";

export const KeycloakContext = createContext();
export const ReactKeycloakProvider = ({ authClient, children }) => {
  const [keycloak, initialized, error] = useAuth(authClient);
  return (
    <KeycloakContext.Provider value={{keycloak, initialized, error}}>
      {children}
    </KeycloakContext.Provider>
  );
};

ReactKeycloakProvider.propTypes = {
  authClient: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};
