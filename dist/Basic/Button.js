"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var RX = require("reactxp");
var AppStyles_1 = require("./../AppStyles");
var platformStyle = '';
var standardStyle = {
    paddingVertical: AppStyles_1.default.buttonPadding,
    backgroundColor: AppStyles_1.default.btnPrimaryBg,
    borderRadius: AppStyles_1.default.borderRadiusBase,
    borderColor: AppStyles_1.default.btnPrimaryBg,
    borderWidth: null,
    height: 45,
    // alignSelf: "flex-start",
    flexDirection: 'row',
    // elevation: 2,
    shadowColor: platformStyle === 'material' ? '#000' : undefined,
    shadowOffset: platformStyle === 'material' ? { width: 0, height: 2 } : undefined,
    shadowOpacity: platformStyle === 'material' ? 0.2 : undefined,
    shadowRadius: platformStyle === 'material' ? 1.2 : undefined,
    alignItems: 'center',
};
var rounded = {
    borderWidth: AppStyles_1.default.borderWidth * 2,
    borderRadius: 30,
    borderColor: AppStyles_1.default.inputBorderColor,
};
var primary = {
    backgroundColor: 'transparent',
    borderColor: AppStyles_1.default.btnPrimaryBg,
    borderWidth: AppStyles_1.default.borderWidth * 2,
};
var transparent = {
    backgroundColor: 'transparent',
    elevation: 0,
    shadowColor: null,
    shadowOffset: null,
    shadowRadius: null,
    shadowOpacity: null,
};
var Button = (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.render = function () {
        var style = standardStyle;
        if (this.props.rounded) {
            style = RX.Styles.combine(style, rounded);
        }
        if (this.props.primary) {
            style = RX.Styles.combine(style, primary);
        }
        if (this.props.transparent) {
            style = RX.Styles.combine(style, transparent);
        }
        if (this.props.style) {
            style = RX.Styles.combine(style, this.props.style);
        }
        return (React.createElement(RX.Button, __assign({}, this.props, { style: style }), this.props.children));
    };
    return Button;
}(RX.Component));
exports.Button = Button;
