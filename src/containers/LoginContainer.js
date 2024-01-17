import React, { useEffect} from 'react';
import { connect } from 'react-redux';

import * as LoginAction from "../actions/LoginAction";
import LoginComponent from "../components/login/LoginComponent";
function LoginContainer(props) {
    useEffect(() => {

    }, []);
    return (
        <LoginComponent {...props} />
    )

}
const mapStateToProps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        Login: (data) => {
            dispatch(LoginAction.loginRequest(data))
        },
       
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)