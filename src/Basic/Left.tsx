import RX = require('reactxp');

type Style = RX.Types.ViewStyleRuleSet;

const standardStyle = RX.Styles.createViewStyle({
    flex: 1,
    alignSelf: 'center',
    alignItems: 'flex-start',
});

export class Left extends RX.Component<RX.CommonStyledProps<Style>, {}> {
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
