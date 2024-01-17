import * as types from '../constant';

//get
export function getOrderRequest(payload) {
    return {
        type: types.GET_ORDER_REQUEST,
        payload
    }
}
export function getOrderSuccess(payload) {
    return {
        type: types.GET_ORDER_SUCCESS,
        payload
    }
}
export function getOrderFailure(payload) {
    return {
        type: types.GET_ORDER_FAILURE,
        payload
    }
}
//add
export function addOrderRequest(payload) {
    return {
        type: types.ADD_ORDER_REQUEST,
        payload
    }
}
export function addOrderSuccess(payload) {
    return {
        type: types.ADD_ORDER_SUCCESS,
        payload
    }
}
export function addOrderFailure(payload) {
    return {
        type: types.ADD_ORDER_FAILURE,
        payload
    }
}

//update
export function updateOrderRequest(payload) {
    return {
        type: types.UPDATE_ORDER_REQUEST,
        payload
    }
}
export function updateOrderSuccess(payload) {
    return {
        type: types.UPDATE_ORDER_SUCCESS,
        payload
    }
}
export function updateOrderFailure(payload) {
    return {
        type: types.UPDATE_ORDER_FAILURE,
        payload
    }
}

//delete
export function deleteOrderRequest(payload) {
    return {
        type: types.DELETE_ORDER_REQUEST,
        payload
    }
}
export function deleteOrderSuccess(payload) {
    return {
        type: types.DELETE_ORDER_SUCCESS,
        payload
    }
}
export function deleteOrderFailure(payload) {
    return {
        type: types.DELETE_ORDER_FAILURE,
        payload
    }
}