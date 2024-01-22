

function ___$insertStyle(css) {
    if (!css || typeof window === 'undefined') {
        return;
    }
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Keycloak = require('keycloak-js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);
var Keycloak__default = /*#__PURE__*/_interopDefaultLegacy(Keycloak);

var useAuth = function (authClient) {
    var isRun = React.useRef(false);
    var _a = React.useState(false), initialized = _a[0], setInitialized = _a[1];
    var _b = React.useState(""), error = _b[0], setError = _b[1];
    var _c = React.useState(new Keycloak__default["default"]), keycloak = _c[0], setKeycloak = _c[1];
    React.useEffect(function () {
        if (isRun.current)
            return;
        isRun.current = true;
        authClient
            .init({
            onLoad: "check-sso",
        })
            .then(function (res) {
            console.log(res ? "authenticated" : "not authenticated");
            authClient.clientId ? setInitialized(true) : setInitialized(false);
            setKeycloak(authClient);
        }).catch(function (error) {
            setError(error);
            console.error("error: ", error);
        });
    }, [authClient]);
    return { keycloak: keycloak, initialized: initialized, error: error };
};

var KeycloakContext = React.createContext({});
var ReactKeycloakProvider = function (_a) {
    var authClient = _a.authClient, children = _a.children;
    var _b = useAuth(authClient), keycloak = _b.keycloak, initialized = _b.initialized, error = _b.error;
    return (React__namespace.createElement(KeycloakContext.Provider, { value: { keycloak: keycloak, initialized: initialized, error: error } }, children));
};

var useKeycloak = function () {
    var _a = React.useContext(KeycloakContext), keycloak = _a.keycloak, initialized = _a.initialized, error = _a.error;
    return { keycloak: keycloak, initialized: initialized, error: error };
};

exports.ReactKeycloakProvider = ReactKeycloakProvider;
exports.useAuth = useAuth;
exports.useKeycloak = useKeycloak;
//# sourceMappingURL=index.js.map
