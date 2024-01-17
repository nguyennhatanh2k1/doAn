import { put, takeEvery, select } from 'redux-saga/effects';
import * as types from '../constant';
import * as actions from '../actions/AccountAction'
import GetAccount from '../fetchAPIs/account/GetAccount';
import DeleteAccount from '../fetchAPIs/account/DeleteAccount';
import UpdateAccount from '../fetchAPIs/account/UpdateAccount';


function* getAccountRequest() {
    try {
        let res = yield GetAccount();
        yield put(actions.getAccountSuccess(res.content))
    } catch (error) {
        yield put(actions.getAccountFailure(error.message))
    }
}

function* deleteAccountRequest(data) {
    // console.log(data.payload,"datttt");
    try {
        let res = yield DeleteAccount(data.payload);
        // console.log(data.payload,"add thành công ở saga");
        yield put(actions.deleteAccountSuccess(res.message))
        // console.log(res.message,"res chấm con ten");
        yield put(actions.getAccountRequest())
        // console.log(data,"get thành công ở saga");

    } catch (error) {
        yield put(actions.deleteAccountFailure(error.message))
    }
}
function* updateAccountRequest(data) {
    console.log(data.payload,"datttt úp dateeee sagaa");
    try {
        let res = yield UpdateAccount(data.payload);
        console.log(data.payload,"upsdate thành công ở saga");
        // console.log(res,"resssssss upsdate thành công ở saga");

        yield put(actions.updateAccountSuccess(res.message))
        console.log(res.message,"res chấm con ten");
        yield put(actions.getAccountRequest())
        // console.log(data,"get thành công ở saga");

    } catch (error) {
        yield put(actions.updateAccountFailure(error.message))
    }
}
export const ACCOUNT_SAGA = [
    takeEvery(types.GET_ACCOUNT_REQUEST, getAccountRequest),
    takeEvery(types.DELETE_ACCOUNT_REQUEST, deleteAccountRequest),
    takeEvery(types.UPDATE_ACCOUNT_REQUEST, updateAccountRequest),
]