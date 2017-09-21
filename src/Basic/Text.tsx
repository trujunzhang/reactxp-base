import React = require('react');
import RX = require('reactxp');
import AppStyles from './../AppStyles';

type Style = RX.Types.TextStyleRuleSet;

const standardStyle: Style = RX.Styles.createTextStyle({
    fontSize: AppStyles.DefaultFontSize - 1,
    fontFamily: AppStyles.fontFamily,
    color: AppStyles.textColor,
});

// export class Container extends RX.Component<RX.CommonStyledProps<Style>, {}> {
export class Text extends RX.View {

    render (): JSX.Element {
        let style : RX.Types.StyleRuleSetOrArray<Style> = standardStyle;

        if (this.props.style) {
            style = RX.Styles.combine(style, this.props.style);
        }

        return (
            <RX.Text
              { ...this.props }
              // ref={(view: ???) => {this._container = view}} //ref={c => (this._root = c)} - native-base
              style={ style }
            >
                { this.props.children }
            </RX.Text>
        );
    }
}
