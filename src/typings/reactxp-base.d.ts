declare module 'reactxp-base' {
    import RX = require('reactxp');

    interface IButtonProps extends RX.Types.ButtonProps  {
        rounded?: boolean;
        primary?: boolean;
        transparent?: boolean;
    }
    
    interface IIconProps extends RX.CommonStyledProps<RX.Types.ImageStyleRuleSet> {
        source: string;
    }

    interface IItemProps extends RX.CommonStyledProps<RX.Types.ViewStyle>  {
        rounded?: boolean;
    }

    interface IContentProps extends RX.CommonStyledProps<RX.Types.ScrollViewStyleRuleSet>  {
        padder?: boolean;
    }

    export class Button extends RX.Component<IButtonProps, {}> {}
    export class Container extends RX.Component<RX.CommonStyledProps<RX.Types.ViewStyleRuleSet>, {}> {}
    export class Content extends RX.Component<IContentProps, {}> {}
    export class Icon extends RX.Component<IIconProps, {}> {}
    export abstract class Input extends RX.TextInput {}
    export class Left extends RX.Component<RX.CommonStyledProps<RX.Types.ViewStyleRuleSet>, {}> {}
    export class Right extends RX.Component<RX.CommonStyledProps<RX.Types.ViewStyleRuleSet>, {}> {}
    export abstract class Text extends RX.View {}
    export class Item extends RX.Component<IItemProps, {}> {}
}