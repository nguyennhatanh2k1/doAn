import React, { useEffect,Component } from 'react';
import { connect } from 'react-redux';

import * as OrderAction from '../actions/OrderAction';
import * as ProductAction from '../actions/ProductAction';

import OrderComponent from '../components/order/OrderComponent';


function OrderContainer(props) {
    useEffect(() => {
        props.getOrder()
        props.getProduct()
    }, []);
return (
    <OrderComponent {...props} />
)

}
const mapStateToProps = (state) => {
    return {
        listOrder: state.OrderReducer.listOrder,
        listProduct: state.ProductReducer.listProduct,
    
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getOrder: (data) => {
            dispatch(OrderAction.getOrderRequest(data))
        },
        getProduct: (data) => {
            dispatch(ProductAction.getProductRequest(data))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderContainer)