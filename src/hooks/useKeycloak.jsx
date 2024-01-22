import { useContext } from 'react';
import { KeycloakContext } from '../components/ReactKeycloakProvider';

export const useKeycloak = () => {
  const {keycloak, initialized, error} = useContext(KeycloakContext)

  return {keycloak, initialized, error};
};
