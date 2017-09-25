import { StoreConstants } from '../StoreConstants';


export function addNumber(num) {
    return {
        type: StoreConstants.ADD_NUMBER,
        payload: num
    }
}

export function subtractNumber(num) {
    return {
        type: StoreConstants.SUBTRACT_NUMBER,
        payload: num
    }
}
