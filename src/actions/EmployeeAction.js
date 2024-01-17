import * as types from '../constant';

//get
export function getEmployeeRequest(payload) {
    return {
        type: types.GET_EMPLOYEE_REQUEST,
        payload
    }
}
export function getEmployeeSuccess(payload) {
    return {
        type: types.GET_EMPLOYEE_SUCCESS,
        payload
    }
}
export function getEmployeeFailure(payload) {
    return {
        type: types.GET_EMPLOYEE_FAILURE,
        payload
    }
}
//add
export function addEmployeeRequest(payload) {
    return {
        type: types.ADD_EMPLOYEE_REQUEST,
        payload
    }
}
export function addEmployeeSuccess(payload) {
    return {
        type: types.ADD_EMPLOYEE_SUCCESS,
        payload
    }
}
export function addEmployeeFailure(payload) {
    return {
        type: types.ADD_EMPLOYEE_FAILURE,
        payload
    }
}

//update
export function updateEmployeeRequest(payload) {
    return {
        type: types.UPDATE_EMPLOYEE_REQUEST,
        payload
    }
}
export function updateEmployeeSuccess(payload) {
    return {
        type: types.UPDATE_EMPLOYEE_SUCCESS,
        payload
    }
}
export function updateEmployeeFailure(payload) {
    return {
        type: types.UPDATE_EMPLOYEE_FAILURE,
        payload
    }
}

//delete
export function deleteEmployeeRequest(payload) {
    return {
        type: types.DELETE_EMPLOYEE_REQUEST,
        payload
    }
}
export function deleteEmployeeSuccess(payload) {
    return {
        type: types.DELETE_EMPLOYEE_SUCCESS,
        payload
    }
}
export function deleteEmployeeFailure(payload) {
    return {
        type: types.DELETE_EMPLOYEE_FAILURE,
        payload
    }
}