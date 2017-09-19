import RX = require('reactxp');
import AppStyles from "./../AppStyles";

type Style = RX.Types.ViewStyle;

const standardStyle : Style = {
    borderWidth: AppStyles.borderWidth * 2,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderColor: AppStyles.inputBorderColor,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 2,
};

const rounded  : Style = {
    // borderWidth: AppStyles.borderWidth * 2,
    borderRadius: 30,
    borderColor: AppStyles.inputBorderColor,
};

export interface Props extends RX.CommonStyledProps<Style>  {
    rounded?: boolean;
}


export class Item extends RX.Component<Props, {}> {
    render() {
        let style :RX.Types.StyleRuleSetOrArray<Style> = standardStyle;

        if(this.props.rounded)
            style = RX.Styles.combine<Style>(style, rounded)

        if(this.props.style)
            style = RX.Styles.combine(style, this.props.style);

        // style = RX.Styles.createViewStyle({
        //     borderWidth: AppStyles.borderWidth * 2,
        //     borderTopWidth: 0,
        //     borderRightWidth: 0,
        //     borderLeftWidth: 0,
        //     borderColor: AppStyles.inputBorderColor,
        //     backgroundColor: 'transparent',
        //     flexDirection: 'row',
        //     alignItems: 'center',
        //     marginLeft: 2,

        // })

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
