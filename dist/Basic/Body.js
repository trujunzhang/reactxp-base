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
var standardStyle = RX.Styles.createViewStyle({
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
});
var Body = (function (_super) {
    __extends(Body, _super);
    function Body() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // export class Container extends RX.View {
    Body.prototype.render = function () {
        var style = standardStyle;
        if (this.props.style) {
            style = RX.Styles.combine(style, this.props.style);
        }
        return (React.createElement(RX.View, __assign({}, this.props, { 
            // ref={(view: ???) => {this._container = view}} //ref={c => (this._root = c)} - native-base
            style: style }), this.props.children));
    };
    return Body;
}(RX.Component));
exports.Body = Body;
