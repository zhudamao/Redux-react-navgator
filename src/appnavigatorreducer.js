
import { NavigationActions } from 'react-navigation';
import { StatckNav } from './appnavigator'

const FILTER_ACTION = {
    Navigate: 'Navigate',
    Back : 'Back',
};


 const navActionReducer = (state , action) => {
    let nextState;
    switch (action.type){
        case FILTER_ACTION.Back:
            nextState = StatckNav.router.getStateForAction(
                NavigationActions.back(),
                state
            );

            break;

        case FILTER_ACTION.Navigate:
            nextState = StatckNav.router.getStateForAction(
                NavigationActions.navigate({routeName:action.DEST}),
                state
            );

            break;
        default:
            nextState = StatckNav.router.getStateForAction(action, state);
            break;
    }

    return nextState||state;

}


export  {FILTER_ACTION,navActionReducer};