import {StoreConstants} from '../StoreConstants';

const initialState = {
    count: 1
};

const counterReducer = (state = initialState, action) => {

    switch(action.type) {
        case StoreConstants.ADD_NUMBER:
            state = {
                ...state,
                count: state.count + action.payload
            };
            break;

        case StoreConstants.SUBTRACT_NUMBER:
            state = {
                ...state,
                count: state.count - action.payload
            };
            break;
    }

    return state;

}

export default counterReducer;