import { put, takeEvery, select } from 'redux-saga/effects';
import * as types from '../constant';
import * as actions from '../actions/BrandAction'
import {errorMessage} from '../StringMessage'
import GetBrand from '../fetchAPIs/brand/GetBrand';
import AddBrand from '../fetchAPIs/brand/AddBrand';
import DeleteBrand from '../fetchAPIs/brand/DeleteBrand';
import UpdateBrand from '../fetchAPIs/brand/UpdateBrand';
import { notification } from 'antd';


function* getBrandRequest() {
    try {
        let res = yield GetBrand();
        yield put(actions.getBrandSuccess(res.content))
    } catch (error) {
        yield put(actions.getBrandFailure(error.message))
    }
}

function* addBrandRequest(data) {
    console.log(data.payload,"datttt");
    try {
        if(data.payload.name != ""){
            let res = yield AddBrand(data.payload);
            console.log(res,"dsdsdsdds");
            if(res.status == true){
                yield put(actions.addBrandSuccess(res.message))
                notification.success({message:res.message})
                yield put(actions.getBrandRequest())
            }else{
                yield put(actions.addBrandFailure(res.message))
                notification.error({message:res.message})
            }
        }else{
            yield put(actions.addBrandFailure(true))
            notification.error({message:errorMessage})

        }
    } catch (error) {
        yield put(actions.addBrandFailure(error.message))
        notification.error({message:error.message})
    }
}
function* deleteBrandRequest(data) {
    // console.log(data.payload,"datttt");
    try {
        let res = yield DeleteBrand(data.payload);
        yield put(actions.deleteBrandSuccess(res.message))
        notification.success({message:res.message})
        yield put(actions.getBrandRequest())
    } catch (error) {
        yield put(actions.deleteBrandFailure(error.message))
        notification.error({message:error.message})
    }
}
function* updateBrandRequest(data) {
    console.log(data.payload, "datttt úp dateeee sagaa");
    try {
        if(data.payload.name != ""){
            let res = yield UpdateBrand(data.payload);
            console.log(res,"dsdsdsdds");
            if(res.status == true){
                yield put(actions.updateBrandSuccess(res.message))
                notification.success({message:res.message})
                yield put(actions.getBrandRequest())
            }else{
                yield put(actions.updateBrandFailure(res.message))
                notification.error({message:res.message})
            }
        }else{
            yield put(actions.updateBrandFailure(true))
            notification.error({message:errorMessage})
        }
    } catch (error) {
        yield put(actions.updateBrandFailure(error.message))
    }
}
export const BRAND_SAGA = [
    takeEvery(types.GET_BRAND_REQUEST, getBrandRequest),
    takeEvery(types.ADD_BRAND_REQUEST, addBrandRequest),
    takeEvery(types.DELETE_BRAND_REQUEST, deleteBrandRequest),
    takeEvery(types.UPDATE_BRAND_REQUEST, updateBrandRequest),
]