import RX = require('reactxp');
import AppStyles from "./../AppStyles";

const standardStyle = RX.Styles.createTextStyle({
    fontSize: AppStyles.DefaultFontSize - 1,
    fontFamily: AppStyles.fontFamily,
    color: AppStyles.textColor,
});

//export class Container extends RX.Component<RX.CommonStyledProps<Style>, {}> {
export class Text extends RX.View {
    
    render() {
        let style :RX.Types.StyleRuleSetOrArray<RX.Types.TextStyleRuleSet> = standardStyle; 
        
        if(this.props.style)
            style = RX.Styles.combine(style, this.props.style);

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
