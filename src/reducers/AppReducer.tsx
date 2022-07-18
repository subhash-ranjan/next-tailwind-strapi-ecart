import { ContextStateType, ActionType } from '../types';

export const appReducer = (contextState: ContextStateType, action: ActionType): ContextStateType => {
    let cartItems;
    switch (action.type) {
        case 'IS_SCROLLED':
            return {
                isScrolled: action.payload,
                cartOpen: contextState.cartOpen,
                cart: contextState.cart,
            };
            break;
        case 'CART_OPEN':
            return {
                cartOpen: action.payload,
                isScrolled: contextState.isScrolled,
                cart: contextState.cart,
            };
            break;
        case 'ADD_TO_CART':
            return {
                cartOpen: contextState.cartOpen,
                isScrolled: contextState.isScrolled,
                cart: action.payload,
            };
            break;
        default:
            return contextState;
            break;
    }
};
