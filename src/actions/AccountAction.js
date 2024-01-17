import * as types from '../constant';

//get
export function getAccountRequest(payload) {
    return {
        type: types.GET_ACCOUNT_REQUEST,
        payload
    }
}
export function getAccountSuccess(payload) {
    return {
        type: types.GET_ACCOUNT_SUCCESS,
        payload
    }
}
export function getAccountFailure(payload) {
    return {
        type: types.GET_ACCOUNT_FAILURE,
        payload
    }
}


//update
export function updateAccountRequest(payload) {
    return {
        type: types.UPDATE_ACCOUNT_REQUEST,
        payload
    }
}
export function updateAccountSuccess(payload) {
    return {
        type: types.UPDATE_ACCOUNT_SUCCESS,
        payload
    }
}
export function updateAccountFailure(payload) {
    return {
        type: types.UPDATE_ACCOUNT_FAILURE,
        payload
    }
}

//delete
export function deleteAccountRequest(payload) {
    return {
        type: types.DELETE_ACCOUNT_REQUEST,
        payload
    }
}
export function deleteAccountSuccess(payload) {
    return {
        type: types.DELETE_ACCOUNT_SUCCESS,
        payload
    }
}
export function deleteAccountFailure(payload) {
    return {
        type: types.DELETE_ACCOUNT_FAILURE,
        payload
    }
}