import { useState, useEffect, useRef } from "react";

export const useAuth = (authClient) => {
  const isRun = useRef(false);
  const [initialized, setInitialized] = useState(false);
  const [error, setError] = useState();
  const [keycloak, setKeycloak] = useState({});

  useEffect(() => {
    if (isRun.current) return;

    isRun.current = true;
    authClient
      .init({
        onLoad: "check-sso",
      })
      .then((res) => {
        console.log(res ? "authenticated" : "not authenticated")
        authClient.clientId ? setInitialized(true) : setInitialized(false);
        setKeycloak(authClient)
      }).catch((error) =>{
        setError(error)
        console.error("error: ", error)
      })
  }, [authClient]);

  return [keycloak, initialized, error];
};