import { ContextStateType, ActionType } from '../types';

export const appReducer = (
    contextState: ContextStateType,
    action: ActionType
): ContextStateType => {
    switch (action.type) {
        case 'IS_SCROLLED':
            return { isScrolled: action.payload };
            break;
        default:
            return contextState;
            break;
    }
};
