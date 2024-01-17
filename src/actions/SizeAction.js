import * as types from '../constant';
//get
export function getSizeRequest(payload) {
    return {
        type: types.GET_SIZE_REQUEST,
        payload
    }
}
export function getSizeSuccess(payload) {
    return {
        type: types.GET_SIZE_SUCCESS,
        payload
    }
}
export function getSizeFailure(payload) {
    return {
        type: types.GET_SIZE_FAILURE,
        payload
    }
}