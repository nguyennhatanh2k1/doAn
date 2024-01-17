import * as types from '../constant';

//get
export function getCategoryRequest(payload) {
    return {
        type: types.GET_CATEGORY_REQUEST,
        payload
    }
}
export function getCategorySuccess(payload) {
    return {
        type: types.GET_CATEGORY_SUCCESS,
        payload
    }
}
export function getCategoryFailure(payload) {
    return {
        type: types.GET_CATEGORY_FAILURE,
        payload
    }
}
//add
export function addCategoryRequest(payload) {
    return {
        type: types.ADD_CATEGORY_REQUEST,
        payload
    }
}
export function addCategorySuccess(payload) {
    return {
        type: types.ADD_CATEGORY_SUCCESS,
        payload
    }
}
export function addCategoryFailure(payload) {
    return {
        type: types.ADD_CATEGORY_FAILURE,
        payload
    }
}

//update
export function updateCategoryRequest(payload) {
    return {
        type: types.UPDATE_CATEGORY_REQUEST,
        payload
    }
}
export function updateCategorySuccess(payload) {
    return {
        type: types.UPDATE_CATEGORY_SUCCESS,
        payload
    }
}
export function updateCategoryFailure(payload) {
    return {
        type: types.UPDATE_CATEGORY_FAILURE,
        payload
    }
}

//delete
export function deleteCategoryRequest(payload) {
    return {
        type: types.DELETE_CATEGORY_REQUEST,
        payload
    }
}
export function deleteCategorySuccess(payload) {
    return {
        type: types.DELETE_CATEGORY_SUCCESS,
        payload
    }
}
export function deleteCategoryFailure(payload) {
    return {
        type: types.DELETE_CATEGORY_FAILURE,
        payload
    }
}