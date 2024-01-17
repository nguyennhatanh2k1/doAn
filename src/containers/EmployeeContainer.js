import React, { useEffect,Component } from 'react';
import { connect } from 'react-redux';

import * as EmployeeAction from '../actions/EmployeeAction';
import * as EmployeeStatusAction from '../actions/EmployeeStatusAction';

import EmployeeComponent from "../components/employee/EmployeeComponent";

function EmployeeContainer(props) {
    useEffect(() => {
        props.getEmployeeStatus()
        props.getEmployee()
    }, []);
    return (
        <EmployeeComponent {...props} />
    )

}
const mapStateToProps = (state) => {
    // console.log("color state ", state);
    return {
        listEmplStatus: state.EmployeeStatusReducer.listEmplStatus,
        listEmployee: state.EmployeeReducer.listEmployee,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getEmployee: (data) => {
            dispatch(EmployeeAction.getEmployeeRequest(data))
        },
        getEmployeeStatus: (data) => {
            dispatch(EmployeeStatusAction.getEmployeeStatusRequest(data))
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(EmployeeContainer)