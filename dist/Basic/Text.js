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
var standardStyle = RX.Styles.createTextStyle({
    fontSize: AppStyles_1.default.DefaultFontSize - 1,
    fontFamily: AppStyles_1.default.fontFamily,
    color: AppStyles_1.default.textColor,
});
// export class Container extends RX.Component<RX.CommonStyledProps<Style>, {}> {
var Text = (function (_super) {
    __extends(Text, _super);
    function Text() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Text.prototype.render = function () {
        var style = standardStyle;
        if (this.props.style) {
            style = RX.Styles.combine(style, this.props.style);
        }
        return (React.createElement(RX.Text, __assign({}, this.props, { 
            // ref={(view: ???) => {this._container = view}} //ref={c => (this._root = c)} - native-base
            style: style }), this.props.children));
    };
    return Text;
}(RX.Text));
exports.Text = Text;
