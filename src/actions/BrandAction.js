import * as types from '../constant';

//get
export function getBrandRequest(payload) {
    return {
        type: types.GET_BRAND_REQUEST,
        payload
    }
}
export function getBrandSuccess(payload) {
    return {
        type: types.GET_BRAND_SUCCESS,
        payload
    }
}
export function getBrandFailure(payload) {
    return {
        type: types.GET_BRAND_FAILURE,
        payload
    }
}
//add
export function addBrandRequest(payload) {
    return {
        type: types.ADD_BRAND_REQUEST,
        payload
    }
}
export function addBrandSuccess(payload) {
    return {
        type: types.ADD_BRAND_SUCCESS,
        payload
    }
}
export function addBrandFailure(payload) {
    return {
        type: types.ADD_BRAND_FAILURE,
        payload
    }
}

//update
export function updateBrandRequest(payload) {
    return {
        type: types.UPDATE_BRAND_REQUEST,
        payload
    }
}
export function updateBrandSuccess(payload) {
    return {
        type: types.UPDATE_BRAND_SUCCESS,
        payload
    }
}
export function updateBrandFailure(payload) {
    return {
        type: types.UPDATE_BRAND_FAILURE,
        payload
    }
}

//delete
export function deleteBrandRequest(payload) {
    return {
        type: types.DELETE_BRAND_REQUEST,
        payload
    }
}
export function deleteBrandSuccess(payload) {
    return {
        type: types.DELETE_BRAND_SUCCESS,
        payload
    }
}
export function deleteBrandFailure(payload) {
    return {
        type: types.DELETE_BRAND_FAILURE,
        payload
    }
}