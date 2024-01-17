import React, { useEffect} from 'react';
import { connect } from 'react-redux';

import RegisterComponent from "../components/register/RegisterComponent";
import * as RegisterAction from "../actions/RegisterAction";
function RegisterContainer(props) {
    useEffect(() => {
    // get()
    }, []);
    return (
        <RegisterComponent {...props} />
    )

}
const mapStateToProps = (state) => {
    return {
        
      
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        Register: (data) => {
            console.log(data,"dtaaa regisstre");
            dispatch(RegisterAction.registerRequest(data))
        },
    //    get
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer)