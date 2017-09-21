import React = require('react');
import RX = require('reactxp');
import AppStyles from './../AppStyles';

type Style = RX.Types.ViewStyleRuleSet;

const deviceHeight: number = RX.UserInterface.measureWindow().height;
const platform: RX.Types.PlatformType = RX.Platform.getType();

const standardStyle: Style = RX.Styles.createViewStyle({
    flex: 1,
    height: platform === 'ios' ? deviceHeight : deviceHeight - 20,

    backgroundColor: AppStyles.variables.primary, // adicionado
});

export class Container extends RX.Component<RX.CommonStyledProps<Style>, {}> {
// export class Container extends RX.View {

    render (): JSX.Element {
        let style : RX.Types.StyleRuleSetOrArray<Style> = standardStyle;

        if (this.props.style) {
            style = RX.Styles.combine(style, this.props.style);
        }

        return (
            <RX.View
              { ...this.props }
              // ref={(view: ???) => {this._container = view}} //ref={c => (this._root = c)} - native-base
              style={ style }
            >
                { this.props.children }
            </RX.View>
        );
    }
}
