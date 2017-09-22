import RX = require('reactxp');

// const deviceHeight: number = RX.UserInterface.measureWindow().height;
const platform: RX.Types.PlatformType = RX.Platform.getType();

class Variables2 {
    // theme background
    static primary: string = '#01cca1';
    // header
    static secondary: string = '#00c497';
    static info: string = '#5bc0de';
    static success: string = '#5cb85c';
    static danger: string = '#d9534f';
    static warning: string = '#f0ad4e';
    static sidebar: string = '#252932';
    static dark: string = 'rgba(0,0,0,0.8)';
    static light: string = 'rgba(255,255,255,0.8)';
}

export default {
    DefaultFontSize: 17,

    // new variable
    get btnPrimaryBg(): string {
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
    inputFontSize: 15, // template 15 e NativeBase (src/theme/variables/platform.js) 17
    inputBorderColor: '#fff', // template fff e NativeBase (src/theme/variables/platform.js) D9D5DC

    get inputColor(): string {
        return this.textColor;
    },

    inputHeightBase: 50,

    // text
    textColor: '#fff',

    // other
    borderRadiusBase: (platform === 'ios') ? 5 : 2,
    borderWidth: 1, // template 1 e NativeBase (src/theme/variables/platform.js)  1 / RX.UserInterface.getPixelRatio()
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

    variables : {
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

    // // theme background
    // const primary = color('#01cca1');
    // // header
    // const secondary = color('#00c497');
    // const info = color('#5bc0de');
    // const success = color('#5cb85c');
    // const danger = color('#d9534f');
    // const warning = color('#f0ad4e');
    // const sidebar = color('#252932');
    // const dark = color('rgba(0,0,0,0.8)');
    // const light = color('rgba(255,255,255,0.8)');

    // // var darken = secondary.darken(0.2).hexString().toString();

    // module.exports = {
    //   brandPrimary: primary.hexString().toString(),
    //   brandSecondary: secondary.hexString().toString(),
    //   brandInfo: info.hexString().toString(),
    //   brandSuccess: success.hexString().toString(),
    //   brandDanger: danger.hexString().toString(),
    //   brandWarning: warning.hexString().toString(),
    //   brandSidebar: sidebar.hexString().toString(),
    //   // darker: darken,
    //   dark: dark.hexString().toString(),
    //   light: light.hexString().toString(),
    // };
};
