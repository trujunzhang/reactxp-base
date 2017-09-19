import RX = require('reactxp');

type Style = RX.Types.ScrollViewStyleRuleSet;

const standardStyle = RX.Styles.createViewStyle({
    flex: 1,
    backgroundColor: "transparent",
});

export class Content extends RX.Component<RX.CommonStyledProps<Style>, {}> {
//export class Content extends RX.ScrollView {
    render() {
        let style :RX.Types.StyleRuleSetOrArray<Style> = standardStyle; 
        
        if(this.props.style)
            style = RX.Styles.combine(style, this.props.style);

        return (
            <RX.ScrollView 
              { ...this.props }
              style={ style } 
            >
                { this.props.children }
            </RX.ScrollView>
        );
    }
}    
