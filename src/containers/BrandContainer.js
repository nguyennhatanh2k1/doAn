import React, { useEffect } from 'react';
import { connect,useDispatch,useSelector } from 'react-redux';
import * as BrandAction from "../actions/BrandAction";
import BrandComponent from '../components/brand/BrandComponent';


function BrandContainer(props) {
        useEffect(() => {
            props.getBrand()
        }, []);
    return (
        <BrandComponent {...props} />
    )

}
const mapStateToProps = (state) => {
    console.log("brand state sucess msg", state.BrandReducer.errorMessage);
    // const data = useSelector(state=>state.BrandReducer.listBrand.content)
    return {
        data: state.BrandReducer.listBrand,
        check: state.BrandReducer.errorMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getBrand: (data) => { dispatch(BrandAction.getBrandRequest(data)) },
        AddBrand: (data) => {
            // console.log(data,"data tại containerrrr");
            dispatch(BrandAction.addBrandRequest(data))
        },
        DeleteBrand: (data) => {
            // console.log(data,"data tại containerrrr");
            dispatch(BrandAction.deleteBrandRequest(data))
        },
        UpdateBrand: (data) => {
            // console.log(data,"úp date data tại containerrrr");
            dispatch(BrandAction.updateBrandRequest(data))
        },
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(BrandContainer)