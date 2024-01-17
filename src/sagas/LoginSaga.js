import { put, takeEvery } from "redux-saga/effects";
import * as types from "../constant";
import LoginApi from "../fetchAPIs/account/LoginApi"

function* Login(action) {
    console.log("dataa");
    try {
        let res = yield LoginApi(action.payload);
        console.log(res.role[0].authority,"resss")
        localStorage.setItem("token", res.token);
        localStorage.setItem("role", res.role[0].authority);
        yield put({
            type: types.LOGIN_SUCCESS,
        })
        // return {token: res.token,role: res.role[0].authority}
    } catch (err) {
        yield put({
            type: types.LOGIN_FAILURE,
            errorMessage: 'loi roi'
        })
    }
}

export const LOGIN_SAGA = [
    takeEvery(types.LOGIN_REQUEST, Login)
]