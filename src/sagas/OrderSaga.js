import { put, takeEvery, select } from 'redux-saga/effects';
import * as types from '../constant';
import * as actions from '../actions/OrderAction'
import GetOrder from '../fetchAPIs/order/GetOrder';
// import AddOrder from '../fetchAPIs/order/AddOrder';
// import DeleteOrder from '../fetchAPIs/order/DeleteOrder';
// import UpdateOrder from '../fetchAPIs/order/UpdateOrder';


function* getOrderRequest() {
    try {
        let res = yield GetOrder();
        yield put(actions.getOrderSuccess(res.content))
    } catch (error) {
        yield put(actions.getOrderFailure(error.message))
    }
}
// function* addOrderRequest(data) {
//     console.log(data.payload,"datttt");
//     try {
//         let res = yield AddOrder(data.payload);
//         // console.log(data.payload,"add thành công ở saga");
//         yield put(actions.addOrderSuccess(res.message))
//         // console.log(res.message,"res chấm con ten");
//         yield put(actions.getOrderRequest())
//         // console.log(data,"get thành công ở saga");

//     } catch (error) {
//         yield put(actions.addOrderFailure(error.message))
//     }
// }
// function* deleteOrderRequest(data) {
//     // console.log(data.payload,"datttt");
//     try {
//         let res = yield DeleteOrder(data.payload);
//         // console.log(data.payload,"add thành công ở saga");
//         yield put(actions.deleteOrderSuccess(res.message))
//         // console.log(res.message,"res chấm con ten");
//         yield put(actions.getOrderRequest())
//         // console.log(data,"get thành công ở saga");

//     } catch (error) {
//         yield put(actions.deleteOrderFailure(error.message))
//     }
// }
// function* updateOrderRequest(data) {
//     console.log(data.payload,"datttt úp dateeee sagaa");
//     try {
//         let res = yield UpdateOrder(data.payload);
//         console.log(data.payload,"upsdate thành công ở saga");
//         // console.log(res,"resssssss upsdate thành công ở saga");

//         yield put(actions.updateOrderSuccess(res.message))
//         console.log(res.message,"res chấm con ten");
//         yield put(actions.getOrderRequest())
//         // console.log(data,"get thành công ở saga");

//     } catch (error) {
//         yield put(actions.updateOrderFailure(error.message))
//     }
// }
export const ORDER_SAGA = [
    takeEvery(types.GET_ORDER_REQUEST, getOrderRequest),
    // takeEvery(types.ADD_ORDER_REQUEST, addOrderRequest),
    // takeEvery(types.DELETE_ORDER_REQUEST, deleteOrderRequest),
    // takeEvery(types.UPDATE_ORDER_REQUEST, updateOrderRequest),
]