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
var standardStyle = {
    borderWidth: AppStyles_1.default.borderWidth * 2,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderColor: AppStyles_1.default.inputBorderColor,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 2,
};
var rounded = {
    // borderWidth: AppStyles.borderWidth * 2,
    borderRadius: 30,
    borderColor: AppStyles_1.default.inputBorderColor,
};
var Item = (function (_super) {
    __extends(Item, _super);
    function Item() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Item.prototype.render = function () {
        var style = standardStyle;
        if (this.props.rounded) {
            style = RX.Styles.combine(style, rounded);
        }
        if (this.props.style) {
            style = RX.Styles.combine(style, this.props.style);
        }
        // style = RX.Styles.createViewStyle({
        //     borderWidth: AppStyles.borderWidth * 2,
        //     borderTopWidth: 0,
        //     borderRightWidth: 0,
        //     borderLeftWidth: 0,
        //     borderColor: AppStyles.inputBorderColor,
        //     backgroundColor: 'transparent',
        //     flexDirection: 'row',
        //     alignItems: 'center',
        //     marginLeft: 2,
        // })
        return (React.createElement(RX.View, __assign({}, this.props, { style: style }), this.props.children));
    };
    return Item;
}(RX.Component));
exports.Item = Item;
