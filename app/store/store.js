import { createStore, applyMiddleware, combineReducers } from 'redux';
// import thunkMiddleware from 'thunk';


// action and reducers
import { addNumber, subtractNumber } from './counter/counterActions';
import counter from './counter/counterReducer';


// export default createStore(
//     combineReducers({
//         counter
//     }),
//     {}
// );


const initStore = (initialState = {}) => {
    return createStore(
        combineReducers({
            counter
        }), initialState);
    // , composeWithDevTools(applyMiddleware(thunkMiddleware))
}

export default initStore;

