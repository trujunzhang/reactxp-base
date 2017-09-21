import React = require('react');
import RX = require('reactxp');
import AppStyles from './../AppStyles';

type Style = RX.Types.ButtonStyleRuleSet;

const platformStyle : string = '';

const standardStyle: Style = {
    paddingVertical: AppStyles.buttonPadding,
    backgroundColor: AppStyles.btnPrimaryBg,
    borderRadius: AppStyles.borderRadiusBase,
    borderColor: AppStyles.btnPrimaryBg,
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
    // justifyContent: "space-between",
};

const rounded: Style = {
    borderWidth: AppStyles.borderWidth * 2,
    borderRadius: 30,
    borderColor: AppStyles.inputBorderColor,
};

const primary: Style = {
    backgroundColor: 'transparent',
    borderColor: AppStyles.btnPrimaryBg,
    borderWidth: AppStyles.borderWidth * 2,
};

const transparent: Style = {
    backgroundColor: 'transparent',
    elevation: 0,
    shadowColor: null,
    shadowOffset: null,
    shadowRadius: null,
    shadowOpacity: null,
};

export interface IProps extends RX.Types.ButtonProps  {
    rounded?: boolean;
    primary?: boolean;
    transparent?: boolean;
}

export class Button extends RX.Component<IProps, {}> {
    render (): JSX.Element {
        let style : RX.Types.StyleRuleSetOrArray<Style> = standardStyle;

        if (this.props.rounded) {
            style = RX.Styles.combine<Style>(style, rounded);
        }

        if (this.props.primary) {
            style = RX.Styles.combine<Style>(style, primary);
        }

        if (this.props.transparent) {
            style = RX.Styles.combine<Style>(style, transparent);
        }

        if (this.props.style) {
            style = RX.Styles.combine(style, this.props.style);
        }

        return (
            <RX.Button
              { ...this.props }
              style={ style }
            >
                { this.props.children }
            </RX.Button>
        );
    }
}
