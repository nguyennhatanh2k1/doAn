import React, { useEffect,Component } from 'react';
import { connect } from 'react-redux';

import * as AccountAction from '../actions/AccountAction';
import AccountComponent from '../components/account/AccountComponent';

function AccountContainer(props) {
    useEffect(() => {
        props.getAccount()
    }, []);
return (
    <AccountComponent {...props} />
)

}
const mapStateToProps = (state) => {
// console.log("brand state sucess msg", state.BrandReducer.errorMessage);
// const data = useSelector(state=>state.BrandReducer.listBrand.content)
return {
    listAccount: state.AccountReducer.listAccount,
    // check: state.BrandReducer.errorMessage
}
}

const mapDispatchToProps = (dispatch) => {
    return {
        // addCategory: (data) => {
        //     dispatch(AccountAction)
        // },
        getAccount: (data) =>{
            dispatch(AccountAction.getAccountRequest(data))
        },
        // updateCategory: (data) => {
        //     dispatch(AccountAction.updateCategoryAction(data))
        // }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountContainer)