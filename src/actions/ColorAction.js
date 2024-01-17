import * as types from '../constant';

//get
export function getColorRequest(payload) {
    return {
        type: types.GET_COLOR_REQUEST,
        payload
    }
}
export function getColorSuccess(payload) {
    return {
        type: types.GET_COLOR_SUCCESS,
        payload
    }
}
export function getColorFailure(payload) {
    return {
        type: types.GET_COLOR_FAILURE,
        payload
    }
}
//add
export function addColorRequest(payload) {
    return {
        type: types.ADD_COLOR_REQUEST,
        payload
    }
}
export function addColorSuccess(payload) {
    return {
        type: types.ADD_COLOR_SUCCESS,
        payload
    }
}
export function addColorFailure(payload) {
    return {
        type: types.ADD_COLOR_FAILURE,
        payload
    }
}

//update
export function updateColorRequest(payload) {
    return {
        type: types.UPDATE_COLOR_REQUEST,
        payload
    }
}
export function updateColorSuccess(payload) {
    return {
        type: types.UPDATE_COLOR_SUCCESS,
        payload
    }
}
export function updateColorFailure(payload) {
    return {
        type: types.UPDATE_COLOR_FAILURE,
        payload
    }
}

//delete
export function deleteColorRequest(payload) {
    return {
        type: types.DELETE_COLOR_REQUEST,
        payload
    }
}
export function deleteColorSuccess(payload) {
    return {
        type: types.DELETE_COLOR_SUCCESS,
        payload
    }
}
export function deleteColorFailure(payload) {
    return {
        type: types.DELETE_COLOR_FAILURE,
        payload
    }
}