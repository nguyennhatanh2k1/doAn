import * as types from '../constant';
export function registerRequest(payload) {
    return {
        type: types.REGISTER_REQUEST,
        payload
    }
}
export function registerSuccess(payload) {
    return {
        type: types.REGISTER_SUCCESS,
        payload
    }
}
export function registerFailure(payload) {
    return {
        type: types.REGISTER_FAILURE,
        payload
    }
}