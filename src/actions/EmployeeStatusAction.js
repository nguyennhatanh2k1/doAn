import * as types from '../constant';
//get
export function getEmployeeStatusRequest(payload) {
    return {
        type: types.GET_EMPLOYEE_STATUS_REQUEST,
        payload
    }
}
export function getEmployeeStatusSuccess(payload) {
    return {
        type: types.GET_EMPLOYEE_STATUS_SUCCESS,
        payload
    }
}
export function getEmployeeStatusFailure(payload) {
    return {
        type: types.GET_EMPLOYEE_STATUS_FAILURE,
        payload
    }
}