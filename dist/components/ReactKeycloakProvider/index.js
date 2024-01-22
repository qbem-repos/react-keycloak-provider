"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactKeycloakProvider = exports.KeycloakContext = void 0;
var _react = require("react");
var _useAuth3 = _interopRequireDefault(require("../../hooks/useAuth"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var KeycloakContext = exports.KeycloakContext = /*#__PURE__*/(0, _react.createContext)();
var ReactKeycloakProvider = exports.ReactKeycloakProvider = function ReactKeycloakProvider(_ref) {
  var authClient = _ref.authClient,
    children = _ref.children;
  var _useAuth = (0, _useAuth3["default"])(authClient),
    _useAuth2 = _slicedToArray(_useAuth, 3),
    keycloak = _useAuth2[0],
    initialized = _useAuth2[1],
    error = _useAuth2[2];
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(KeycloakContext.Provider, {
    value: {
      keycloak: keycloak,
      initialized: initialized,
      error: error
    },
    children: children
  });
};
ReactKeycloakProvider.propTypes = {
  authClient: _propTypes["default"].object.isRequired,
  children: _propTypes["default"].node.isRequired
};