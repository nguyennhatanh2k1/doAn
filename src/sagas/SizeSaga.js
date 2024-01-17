import { put, takeEvery, select } from 'redux-saga/effects';
import * as types from '../constant';
import * as actions from '../actions/SizeAction'
import GetSize from '../fetchAPIs/size/GetSize';


function* getSizeRequest() {
    try {
        let res = yield GetSize();
        yield put(actions.getSizeSuccess(res.content))
    } catch (error) {
        yield put(actions.getSizeFailure(error.message))
    }
}
export const SIZE_SAGA = [
    takeEvery(types.GET_SIZE_REQUEST, getSizeRequest),
]