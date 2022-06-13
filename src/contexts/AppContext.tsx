import React, { createContext, useReducer, ReactNode } from 'react';
import { appReducer } from '../reducers/AppReducer';
import { ContextStateType } from '../types';

const initialState = {
    isScrolled: false,
};

const AppContext = createContext<{
    state: ContextStateType | null;
    dispatch: React.Dispatch<any>;
}>({
    state: null,
    dispatch: () => null,
});

type Props = {
    children?: ReactNode;
    title?: string;
};

const AppContextProvider = (props: Props) => {
    const [state, dispatch] = useReducer(appReducer, initialState);
    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {props.children}
        </AppContext.Provider>
    );
};
export { AppContext, AppContextProvider };
