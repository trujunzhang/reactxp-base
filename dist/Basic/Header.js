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
var deviceHeight = RX.UserInterface.measureWindow().height;
var platform = RX.Platform.getType();
var platformStyle = 'material';
var standardStyle = RX.Styles.createViewStyle({
    backgroundColor: AppStyles_1.default.brandPrimary,
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'center',
    paddingTop: platform === 'ios' ? 15 : 0,
    borderBottomWidth: 0,
    // borderBottomColor: AppStyles.toolbarDefaultBorder,
    height: AppStyles_1.default.toolbarHeight,
    elevation: 3,
    shadowColor: platformStyle === 'material' ? '#000' : undefined,
    shadowOffset: platformStyle === 'material' ? { width: 0, height: 2 } : undefined,
    shadowOpacity: platformStyle === 'material' ? 0.2 : undefined,
    shadowRadius: platformStyle === 'material' ? 1.2 : undefined,
    top: 0,
    left: 0,
    right: 0,
});
var Header = (function (_super) {
    __extends(Header, _super);
    function Header() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Header.prototype.render = function () {
        var style = standardStyle;
        if (this.props.style) {
            style = RX.Styles.combine(style, this.props.style);
        }
        return (React.createElement(RX.View, __assign({}, this.props, { style: style }), this.props.children));
    };
    return Header;
}(RX.Component));
exports.Header = Header;
