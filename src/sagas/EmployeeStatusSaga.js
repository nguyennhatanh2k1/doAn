import { put, takeEvery, select } from 'redux-saga/effects';
import * as types from '../constant';
import * as actions from '../actions/EmployeeStatusAction'
import GetEmployeeStatus from '../fetchAPIs/emplStatus/GetEmployeeStatus';


function* getEmployeeStatusRequest() {
    try {
        let res = yield GetEmployeeStatus();
        yield put(actions.getEmployeeStatusSuccess(res.content))
    } catch (error) {
        yield put(actions.getEmployeeStatusFailure(error.message))
    }
}
export const EMPLOYEE_STATUS_SAGA = [
    takeEvery(types.GET_EMPLOYEE_STATUS_REQUEST, getEmployeeStatusRequest),
]