import { put, takeEvery, select } from 'redux-saga/effects';
import * as types from '../constant';
import * as actions from '../actions/ColorAction'
import GetColor from '../fetchAPIs/color/GetColor';
import AddColor from '../fetchAPIs/color/AddColor';
import DeleteColor from '../fetchAPIs/color/DeleteColor';
import UpdateColor from '../fetchAPIs/color/UpdateColor';


function* getColorRequest() {
    try {
        let res = yield GetColor();
        yield put(actions.getColorSuccess(res.content))
    } catch (error) {
        yield put(actions.getColorFailure(error.message))
    }
}
function* addColorRequest(data) {
    console.log(data.payload,"datttt");
    try {
        let res = yield AddColor(data.payload);
        // console.log(data.payload,"add thành công ở saga");
        yield put(actions.addColorSuccess(res.message))
        // console.log(res.message,"res chấm con ten");
        yield put(actions.getColorRequest())
        // console.log(data,"get thành công ở saga");

    } catch (error) {
        yield put(actions.addColorFailure(error.message))
    }
}
function* deleteColorRequest(data) {
    // console.log(data.payload,"datttt");
    try {
        let res = yield DeleteColor(data.payload);
        // console.log(data.payload,"add thành công ở saga");
        yield put(actions.deleteColorSuccess(res.message))
        // console.log(res.message,"res chấm con ten");
        yield put(actions.getColorRequest())
        // console.log(data,"get thành công ở saga");

    } catch (error) {
        yield put(actions.deleteColorFailure(error.message))
    }
}
function* updateColorRequest(data) {
    console.log(data.payload,"datttt úp dateeee sagaa");
    try {
        let res = yield UpdateColor(data.payload);
        console.log(data.payload,"upsdate thành công ở saga");
        // console.log(res,"resssssss upsdate thành công ở saga");

        yield put(actions.updateColorSuccess(res.message))
        console.log(res.message,"res chấm con ten");
        yield put(actions.getColorRequest())
        // console.log(data,"get thành công ở saga");

    } catch (error) {
        yield put(actions.updateColorFailure(error.message))
    }
}
export const COLOR_SAGA = [
    takeEvery(types.GET_COLOR_REQUEST, getColorRequest),
    takeEvery(types.ADD_COLOR_REQUEST, addColorRequest),
    takeEvery(types.DELETE_COLOR_REQUEST, deleteColorRequest),
    takeEvery(types.UPDATE_COLOR_REQUEST, updateColorRequest),
]