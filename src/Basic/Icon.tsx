import React = require('react');
import RX = require('reactxp');

type Style = RX.Types.ImageStyleRuleSet;

const standardStyle: Style = RX.Styles.createImageStyle({
    height: 17,
    width: 32,
});

export interface IProps extends RX.CommonStyledProps<Style> {
    source: string;
}

export class Icon extends RX.Component<IProps, {}> {
    render (): JSX.Element {
        let style : RX.Types.StyleRuleSetOrArray<Style> = standardStyle;

        if (this.props.style) {
            style = RX.Styles.combine(style, this.props.style);
        }

        return (
            <RX.Image
              { ...this.props }
              style={ style }
            />
        );
    }
}
