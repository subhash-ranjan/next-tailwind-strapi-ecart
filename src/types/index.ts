import { CartItemType, CartType } from './cart';

export type ButtonType = {
    text?: string;
    style?: string;
    styleText?: string;
    href?: string;
    iconPosition?: string;
    showArrow?: boolean;
    isCapital?: boolean;
    isIcon?: boolean;
    isTragetBlank?: boolean;
    isGithub?: boolean;
    isDark?: boolean;
    isText?: boolean;
    icon?: React.ReactNode;
    onClickHandler?: () => any;
    // onChangeHandler?: React.ChangeEventHandler<HTMLInputElement>;
};

export type TextType = {
    text: string;
    classes?: string;
    type?: string;
    color?: string;
    size?: string;
};
export type ContextStateType = {
    isScrolled?: boolean;
    cartOpen?: boolean;
    cart?: CartItemType[];
};

export type ActionType = {
    type?: string;
    payload?: any;
};

export type PageHeaderType = {
    header: string;
    subHeader: string;
    infoText?: string;
    styleContainer?: string;
    styleheader?: string;
    styleSubheader?: string;
    styleInfo?: string;
};
