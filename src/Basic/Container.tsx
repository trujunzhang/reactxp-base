import RX = require('reactxp');
import AppStyles from "./../AppStyles";

type Style = RX.Types.ViewStyleRuleSet;

const deviceHeight = RX.UserInterface.measureWindow().height;
const platform = RX.Platform.getType();

const standardStyle = RX.Styles.createViewStyle({
    flex: 1,
    height: platform === "ios" ? deviceHeight : deviceHeight - 20,

    backgroundColor: AppStyles.variables.primary, //adicionado
});

export class Container extends RX.Component<RX.CommonStyledProps<Style>, {}> {
//export class Container extends RX.View {
    
    render() {
        let style :RX.Types.StyleRuleSetOrArray<Style> = standardStyle; 
        
        if(this.props.style)
            style = RX.Styles.combine(style, this.props.style);

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
