import React, { useEffect,Component } from 'react';
import { connect } from 'react-redux';

import * as ProductAction from '../actions/ProductAction';
import * as BrandAction from '../actions/BrandAction';
import * as CategoryAction from '../actions/CategoryAction';
import * as ColorAction from '../actions/ColorAction';
import * as SizeAction from '../actions/SizeAction';


import ProductComponent from '../components/product/ProductComponent';

function ProductContainer(props) {
    useEffect(() => {
        props.getProduct()
        // props.getSelection()
    }, []);
    return (
        <ProductComponent {...props} />
    )

}
const mapStateToProps = (state) => {
    return {
        dataFetchedCategory:state.CategoryReducer.dataFetched,
        dataFetchedColor:state.ColorReducer.dataFetched,
        dataFetchedBrand:state.BrandReducer.dataFetched,

        listProduct: state.ProductReducer.listProduct,
        listCategory: state.CategoryReducer.listCategory,
        listBrand: state.BrandReducer.listBrand,
        listColor: state.ColorReducer.listColor,
        listSize:state.SizeReducer.listSize,

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getProduct: (data) => {
            dispatch(ProductAction.getProductRequest(data))
        },
        getSelection: () => {
            dispatch(CategoryAction.getCategoryRequest());
            dispatch(ColorAction.getColorRequest());
            dispatch(BrandAction.getBrandRequest());
            dispatch(SizeAction.getSizeRequest());

        },
        AddProduct: (data) => {
            dispatch(ProductAction.addProductRequest(data))
        },
        UpdateProduct: (data) => {
            dispatch(ProductAction.updateProductRequest(data))
        },
        DeleteProduct: (data) => {
            dispatch(ProductAction.deleteProductRequest(data))
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer)

