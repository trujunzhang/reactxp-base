import RX = require('reactxp');
import AppStyles from "./../AppStyles";

const standardStyle = RX.Styles.createTextInputStyle({
    height: AppStyles.inputHeightBase,
    color: AppStyles.inputColor,
    paddingLeft: 5,
    paddingRight: 5,
    flex: 1,
    fontSize: AppStyles.inputFontSize,
    lineHeight: AppStyles.inputLineHeight,
})

export class Input extends RX.TextInput {
    render() {
        let style :RX.Types.StyleRuleSetOrArray<RX.Types.TextInputStyleRuleSet> = standardStyle; 
        
        if(this.props.style)
            style = RX.Styles.combine(style, this.props.style);

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
