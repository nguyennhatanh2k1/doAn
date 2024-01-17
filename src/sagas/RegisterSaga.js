import { put, takeEvery } from "redux-saga/effects";
import * as types from "../constant";
import RegisterApi from "../fetchAPIs/account/RegisterApi"

function* register(action) {
    // console.log(action,"register");
    try {
        let res = yield RegisterApi(action.payload);
        yield put({
            type: types.REGISTER_SUCCESS,
            payload:{
                message: res
            }
        })
    } catch (error) {
        yield put({
            type: types.REGISTER_FAILURE,
            payload:error.message
        })
    }
}   

export const REGISTER_SAGA = [
    takeEvery(types.REGISTER_REQUEST,register)
]