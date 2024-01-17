import { put, takeEvery, select } from 'redux-saga/effects';
import * as types from '../constant';
import * as actions from '../actions/ProductAction'
import GetProduct from '../fetchAPIs/product/GetProduct';
import AddProduct from '../fetchAPIs/product/AddProduct';
import DeleteProduct from '../fetchAPIs/product/DeleteProduct';
import UpdateProduct from '../fetchAPIs/product/UpdateProduct';


function* getProductRequest() {
    try {
        let res = yield GetProduct();
        yield put(actions.getProductSuccess(res.content))
    } catch (error) {
        yield put(actions.getProductFailure(error.message))
    }
}
function* addProductRequest(data) {
    console.log(data.payload,"datttt");
    try {
        let res = yield AddProduct(data.payload);
        // console.log(data.payload,"add thành công ở saga");
        yield put(actions.addProductSuccess(res.message))
        // console.log(res.message,"res chấm con ten");
        yield put(actions.getProductRequest())
        // console.log(data,"get thành công ở saga");

    } catch (error) {
        yield put(actions.addProductFailure(error.message))
    }
}
function* deleteProductRequest(data) {
    // console.log(data.payload,"datttt");
    try {
        let res = yield DeleteProduct(data.payload);
        // console.log(data.payload,"add thành công ở saga");
        yield put(actions.deleteProductSuccess(res.message))
        // console.log(res.message,"res chấm con ten");
        yield put(actions.getProductRequest())
        // console.log(data,"get thành công ở saga");

    } catch (error) {
        yield put(actions.deleteProductFailure(error.message))
    }
}
function* updateProductRequest(data) {
    console.log(data.payload,"datttt úp dateeee sagaa");
    try {
        let res = yield UpdateProduct(data.payload);
        console.log(data.payload,"upsdate thành công ở saga");
        // console.log(res,"resssssss upsdate thành công ở saga");

        yield put(actions.updateProductSuccess(res.message))
        console.log(res.message,"res chấm con ten");
        yield put(actions.getProductRequest())
        // console.log(data,"get thành công ở saga");

    } catch (error) {
        yield put(actions.updateProductFailure(error.message))
    }
}
export const PRODUCT_SAGA = [
    takeEvery(types.GET_PRODUCT_REQUEST, getProductRequest),
    takeEvery(types.ADD_PRODUCT_REQUEST, addProductRequest),
    takeEvery(types.DELETE_PRODUCT_REQUEST, deleteProductRequest),
    takeEvery(types.UPDATE_PRODUCT_REQUEST, updateProductRequest),
]