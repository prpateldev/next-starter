import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';


// action and reducers
import { addNumber, subtractNumber } from './counter/counterActions';
import counter from './counter/counterReducer';


// export default createStore(
//     combineReducers({
//         counter
//     }),
//     {}
// );
let store = null;

const combinedReducers = combineReducers({
    counter
});


const initStore = (initialState = {}, isServer) => {
    if(isServer && typeof window === undefined) {
        return createStore(
            combinedReducers, initialState, applyMiddleware(thunkMiddleware));
            // , composeWithDevTools(applyMiddleware(thunkMiddleware))
    } else {
        if(!store) {
            store = createStore(
                combinedReducers, initialState, applyMiddleware(thunkMiddleware));
        }

        return store;
    }
}

export default initStore;

