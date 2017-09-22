import React = require('react');
import RX = require('reactxp');
import AppStyles from './../AppStyles';

type Style = RX.Types.ViewStyleRuleSet;

const deviceHeight: number = RX.UserInterface.measureWindow().height;
const platform: RX.Types.PlatformType = RX.Platform.getType();
const platformStyle: string = 'material';

const standardStyle: Style = RX.Styles.createViewStyle({
    backgroundColor: AppStyles.brandPrimary,
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'center',
    paddingTop: platform === 'ios' ? 15 : 0,
    borderBottomWidth: 0, // platform === "ios" ? 1 / PixelRatio.getPixelSizeForLayoutSize(1) : 0
    // borderBottomColor: AppStyles.toolbarDefaultBorder,
    height: AppStyles.toolbarHeight,
    elevation: 3,
    shadowColor: platformStyle === 'material' ? '#000' : undefined,
    shadowOffset: platformStyle === 'material' ? { width: 0, height: 2 } : undefined,
    shadowOpacity: platformStyle === 'material' ? 0.2 : undefined,
    shadowRadius: platformStyle === 'material' ? 1.2 : undefined,
    top: 0,
    left: 0,
    right: 0,        
});

export class Header extends RX.Component<RX.CommonStyledProps<Style>, {}> {

    render (): JSX.Element {
        let style : RX.Types.StyleRuleSetOrArray<Style> = standardStyle;

        if (this.props.style) {
            style = RX.Styles.combine(style, this.props.style);
        }

        return (
            <RX.View
              { ...this.props }
              style={ style }
            >
                { this.props.children }
            </RX.View>
        );
    }
}
