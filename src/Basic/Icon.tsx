import RX = require('reactxp');

type Style = RX.Types.ImageStyleRuleSet;

const standardStyle = RX.Styles.createImageStyle({
    height: 17,
    width: 32,
});

export interface Props extends RX.CommonStyledProps<Style> {
    source: string;
}

export class Icon extends RX.Component<Props, {}> {
    render() {
        let style :RX.Types.StyleRuleSetOrArray<Style> = standardStyle; 
        
        if(this.props.style)
            style = RX.Styles.combine(style, this.props.style);

        return (
            <RX.Image 
              { ...this.props }
              style={ style } 
            />
        );
    }
}    
