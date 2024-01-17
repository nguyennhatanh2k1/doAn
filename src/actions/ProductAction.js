import * as types from '../constant';

//get
export function getProductRequest(payload) {
    return {
        type: types.GET_PRODUCT_REQUEST,
        payload
    }
}
export function getProductSuccess(payload) {
    return {
        type: types.GET_PRODUCT_SUCCESS,
        payload
    }
}
export function getProductFailure(payload) {
    return {
        type: types.GET_PRODUCT_FAILURE,
        payload
    }
}
//add
export function addProductRequest(payload) {
    return {
        type: types.ADD_PRODUCT_REQUEST,
        payload
    }
}
export function addProductSuccess(payload) {
    return {
        type: types.ADD_PRODUCT_SUCCESS,
        payload
    }
}
export function addProductFailure(payload) {
    return {
        type: types.ADD_PRODUCT_FAILURE,
        payload
    }
}

//update
export function updateProductRequest(payload) {
    return {
        type: types.UPDATE_PRODUCT_REQUEST,
        payload
    }
}
export function updateProductSuccess(payload) {
    return {
        type: types.UPDATE_PRODUCT_SUCCESS,
        payload
    }
}
export function updateProductFailure(payload) {
    return {
        type: types.UPDATE_PRODUCT_FAILURE,
        payload
    }
}

//delete
export function deleteProductRequest(payload) {
    return {
        type: types.DELETE_PRODUCT_REQUEST,
        payload
    }
}
export function deleteProductSuccess(payload) {
    return {
        type: types.DELETE_PRODUCT_SUCCESS,
        payload
    }
}
export function deleteProductFailure(payload) {
    return {
        type: types.DELETE_PRODUCT_FAILURE,
        payload
    }
}