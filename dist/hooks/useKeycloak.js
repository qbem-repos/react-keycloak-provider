"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useKeycloak = void 0;
var _react = require("react");
var _ReactKeycloakProvider = require("../components/ReactKeycloakProvider");
var useKeycloak = exports.useKeycloak = function useKeycloak() {
  var _useContext = (0, _react.useContext)(_ReactKeycloakProvider.KeycloakContext),
    keycloak = _useContext.keycloak,
    initialized = _useContext.initialized,
    error = _useContext.error;
  return {
    keycloak: keycloak,
    initialized: initialized,
    error: error
  };
};