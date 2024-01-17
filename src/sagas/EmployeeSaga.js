import { put, takeEvery, select } from 'redux-saga/effects';
import * as types from '../constant';
import * as actions from '../actions/EmployeeAction'
import GetEmployee from '../fetchAPIs/employee/GetEmployee';
// import AddEmployee from '../fetchAPIs/employee/AddEmployee';
// import DeleteEmployee from '../fetchAPIs/employee/DeleteEmployee';
// import UpdateEmployee from '../fetchAPIs/employee/UpdateEmployee';


function* getEmployeeRequest() {
    try {
        let res = yield GetEmployee();
        yield put(actions.getEmployeeSuccess(res.content))
    } catch (error) {
        yield put(actions.getEmployeeFailure(error.message))
    }
}
// function* addEmployeeRequest(data) {
//     console.log(data.payload,"datttt");
//     try {
//         let res = yield AddEmployee(data.payload);
//         // console.log(data.payload,"add thành công ở saga");
//         yield put(actions.addEmployeeSuccess(res.message))
//         // console.log(res.message,"res chấm con ten");
//         yield put(actions.getEmployeeRequest())
//         // console.log(data,"get thành công ở saga");

//     } catch (error) {
//         yield put(actions.addEmployeeFailure(error.message))
//     }
// }
// function* deleteEmployeeRequest(data) {
//     // console.log(data.payload,"datttt");
//     try {
//         let res = yield DeleteEmployee(data.payload);
//         // console.log(data.payload,"add thành công ở saga");
//         yield put(actions.deleteEmployeeSuccess(res.message))
//         // console.log(res.message,"res chấm con ten");
//         yield put(actions.getEmployeeRequest())
//         // console.log(data,"get thành công ở saga");

//     } catch (error) {
//         yield put(actions.deleteEmployeeFailure(error.message))
//     }
// }
// function* updateEmployeeRequest(data) {
//     console.log(data.payload,"datttt úp dateeee sagaa");
//     try {
//         let res = yield UpdateEmployee(data.payload);
//         console.log(data.payload,"upsdate thành công ở saga");
//         // console.log(res,"resssssss upsdate thành công ở saga");

//         yield put(actions.updateEmployeeSuccess(res.message))
//         console.log(res.message,"res chấm con ten");
//         yield put(actions.getEmployeeRequest())
//         // console.log(data,"get thành công ở saga");

//     } catch (error) {
//         yield put(actions.updateEmployeeFailure(error.message))
//     }
// }
export const EMPLOYEE_SAGA = [
    takeEvery(types.GET_EMPLOYEE_REQUEST, getEmployeeRequest),
    // takeEvery(types.ADD_EMPLOYEE_REQUEST, addEmployeeRequest),
    // takeEvery(types.DELETE_EMPLOYEE_REQUEST, deleteEmployeeRequest),
    // takeEvery(types.UPDATE_EMPLOYEE_REQUEST, updateEmployeeRequest),
]