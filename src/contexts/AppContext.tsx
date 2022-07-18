import React, { createContext, useReducer, ReactNode } from 'react';
import { GetCartItems } from '../lib/cartHandler';
import { appReducer } from '../reducers/AppReducer';
import { ContextStateType } from '../types';
import { Cart, CartItemType } from '../types/cart';

const initialState = {
    isScrolled: false,
    cartOpen: false,
    cart: GetCartItems(),
};

const AppContext = createContext<{
    state: ContextStateType;
    dispatch: React.Dispatch<any>;
}>({
    state: initialState,
    dispatch: () => null,
});

type Props = {
    children?: ReactNode;
    title?: string;
};

const AppContextProvider = (props: Props) => {
    const [state, dispatch] = useReducer(appReducer, initialState);
    return <AppContext.Provider value={{ state, dispatch }}>{props.children}</AppContext.Provider>;
};
export { AppContext, AppContextProvider };
