import React = require('react');
import RX = require('reactxp');
import AppStyles from './../AppStyles';

type Style = RX.Types.TextInputStyleRuleSet;

const standardStyle: Style = RX.Styles.createTextInputStyle({
    height: AppStyles.inputHeightBase,
    color: AppStyles.inputColor,
    paddingLeft: 5,
    paddingRight: 5,
    flex: 1,
    fontSize: AppStyles.inputFontSize,
    lineHeight: AppStyles.inputLineHeight,
});

export class Input extends RX.TextInput {
    render (): JSX.Element {
        let style : RX.Types.StyleRuleSetOrArray<Style> = standardStyle;

        if (this.props.style) {
            style = RX.Styles.combine(style, this.props.style);
        }

        return (
            <RX.TextInput
              { ...this.props }
              style={ style }
            >
              { this.props.children }
            </RX.TextInput>
        );
    }
}
