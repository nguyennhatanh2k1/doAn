import { put, takeEvery, select } from 'redux-saga/effects';
import * as types from '../constant';
import * as actions from '../actions/CategoryAction'
import GetCategory from '../fetchAPIs/category/GetCategory';
import AddCategory from '../fetchAPIs/category/AddCategory';
import DeleteCategory from '../fetchAPIs/category/DeleteCategory';
import UpdateCategory from '../fetchAPIs/category/UpdateCategory';


function* getCategoryRequest() {
    try {
        let res = yield GetCategory();
        yield put(actions.getCategorySuccess(res.content))
    } catch (error) {
        yield put(actions.getCategoryFailure(error.message))
    }
}
function* addCategoryRequest(data) {
    console.log(data.payload,"datttt");
    try {
        let res = yield AddCategory(data.payload);
        // console.log(data.payload,"add thành công ở saga");
        yield put(actions.addCategorySuccess(res.message))
        // console.log(res.message,"res chấm con ten");
        yield put(actions.getCategoryRequest())
        // console.log(data,"get thành công ở saga");

    } catch (error) {
        yield put(actions.addCategoryFailure(error.message))
    }
}
function* deleteCategoryRequest(data) {
    // console.log(data.payload,"datttt");
    try {
        let res = yield DeleteCategory(data.payload);
        // console.log(data.payload,"add thành công ở saga");
        yield put(actions.deleteCategorySuccess(res.message))
        // console.log(res.message,"res chấm con ten");
        yield put(actions.getCategoryRequest())
        // console.log(data,"get thành công ở saga");

    } catch (error) {
        yield put(actions.deleteCategoryFailure(error.message))
    }
}
function* updateCategoryRequest(data) {
    console.log(data.payload,"datttt úp dateeee sagaa");
    try {
        let res = yield UpdateCategory(data.payload);
        console.log(data.payload,"upsdate thành công ở saga");
        // console.log(res,"resssssss upsdate thành công ở saga");

        yield put(actions.updateCategorySuccess(res.message))
        console.log(res.message,"res chấm con ten");
        yield put(actions.getCategoryRequest())
        // console.log(data,"get thành công ở saga");

    } catch (error) {
        yield put(actions.updateCategoryFailure(error.message))
    }
}
export const CATEGORY_SAGA = [
    takeEvery(types.GET_CATEGORY_REQUEST, getCategoryRequest),
    takeEvery(types.ADD_CATEGORY_REQUEST, addCategoryRequest),
    takeEvery(types.DELETE_CATEGORY_REQUEST, deleteCategoryRequest),
    takeEvery(types.UPDATE_CATEGORY_REQUEST, updateCategoryRequest),
]