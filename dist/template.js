"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CustomerHeaderComponent;
var _react = _interopRequireWildcard(require("react"));
require("./styles.css");
var _antd = require("antd");
var Icons = _interopRequireWildcard(require("@ant-design/icons"));
var _shortid = _interopRequireDefault(require("shortid"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const {
  hasOwnProperty
} = Object.prototype;
function CustomerHeaderComponent(props) {
  const {
    component,
    children,
    data
  } = props;
  const {
    params
  } = component;
  const {
    categories
  } = data?.data?.ebbShutdownData;
  const childComponent = _react.default.Children.map(children, child => {
    if (children !== false) {
      return /*#__PURE__*/_react.default.cloneElement(child, {
        parentProps: props
      });
    }
    return null;
  });
  const newWelcomeMessage = categories?.find(_ref => {
    let {
      name
    } = _ref;
    return name === 'welcomeMessage';
  });

  // String conversion is weird...
  // 'true' == true     returns false
  // Boolean('false')   returns true
  // Use this helper function
  const checkBooleanString = str => str === 'true' || (str === 'false' ? false : str);
  const WifiIcon = Icons['WifiOutlined'];
  return /*#__PURE__*/_react.default.createElement(_antd.Row, {
    className: " w-100 customer-header-layout"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-row w-auto"
  }, childComponent), newWelcomeMessage && checkBooleanString(newWelcomeMessage.enable) ? /*#__PURE__*/_react.default.createElement(_antd.Col, {
    xxl: {
      span: 12
    },
    xs: {
      span: 24
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "warning-container yellow-background"
  }, newWelcomeMessage.message)) : null);
}
module.exports = exports.default;