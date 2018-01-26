"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RX = require("reactxp");
// const deviceHeight: number = RX.UserInterface.measureWindow().height;
var platform = RX.Platform.getType();
var Variables2 = (function () {
    function Variables2() {
    }
    // theme background
    Variables2.primary = '#01cca1';
    // header
    Variables2.secondary = '#00c497';
    Variables2.info = '#5bc0de';
    Variables2.success = '#5cb85c';
    Variables2.danger = '#d9534f';
    Variables2.warning = '#f0ad4e';
    Variables2.sidebar = '#252932';
    Variables2.dark = 'rgba(0,0,0,0.8)';
    Variables2.light = 'rgba(255,255,255,0.8)';
    return Variables2;
}());
exports.default = {
    DefaultFontSize: 17,
    // new variable
    get btnPrimaryBg() {
        return this.brandPrimary;
    },
    buttonPadding: 6,
    // font
    fontFamily: (platform === 'ios') ? 'System' : 'Roboto',
    // color
    brandPrimary: Variables2.primary,
    // header
    toolbarHeight: (platform === 'ios') ? 64 : 56,
    toolbarDefaultBorder: '#aaa',
    // inputGroup
    inputFontSize: 15,
    inputBorderColor: '#fff',
    get inputColor() {
        return this.textColor;
    },
    inputHeightBase: 50,
    // text
    textColor: '#fff',
    // other
    borderRadiusBase: (platform === 'ios') ? 5 : 2,
    borderWidth: 1,
    contentPadding: 10,
    inputLineHeight: 24,
    //     static color = {
    //         black: '#000000',
    //         black50: '#0000007F'
    //    };
    //    get inputColor() {
    //     return AppStyles.textColor;
    //     }
    // static controlColors = {
    //     defaultActionButtonColor: AppStyles.color.black,
    //     saveActionButtonCollor: '#666',
    //     destroyActionButtonCollor: '#FF8C00',
    //     contentBackground: '#01cca1',
    //     headerBackground: '#414142',
    //     //headerBackground: '#01cca1',
    //     placeholderText: '#ccc'
    // };
    // static buttonBorders = {
    //     radius: 6,
    //     margins: 16,
    //     margin: 8
    // }
    // static fontSizes = {
    //     size14: 14,
    //     size20: 20,
    //     size36: 36
    // }
    // static styles = {
    //     background: RX.Styles.createImageStyle({
    //         flex: 1,
    //         width: null,
    //         height: deviceHeight,
    //     }),
    //     container: RX.Styles.createViewStyle({
    //         flex: 1,
    //         alignSelf: 'stretch',
    //         backgroundColor: AppStyles.controlColors.contentBackground,
    //     }),
    //     buttonText: RX.Styles.createTextStyle({
    //         fontSize: AppStyles.fontSizes.size14,
    //         marginVertical: 6,
    //         marginHorizontal: 12,
    //         color: 'white'
    //     })
    // }
    variables: {
        // theme background
        primary: Variables2.primary,
        // header
        secondary: Variables2.secondary,
        info: Variables2.info,
        success: Variables2.success,
        danger: Variables2.danger,
        warning: Variables2.warning,
        sidebar: Variables2.sidebar,
        dark: Variables2.dark,
        light: Variables2.light,
    },
};
