import * as types from '../constant';

const DEFAULT_STATE = {
    isFetching: false,
    dataFetched: false,
    success: false,
    successMessage: '',
    error: false,
    errorMessage: null,
    listEmployee: [],
}
export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.GET_EMPLOYEE_REQUEST:
        case types.ADD_EMPLOYEE_REQUEST:
        case types.UPDATE_EMPLOYEE_REQUEST:
        case types.DELETE_EMPLOYEE_REQUEST:
            return {
                ...state,
                isFetching: true,
            }
        // 
        case types.GET_EMPLOYEE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                success:true,
                successMessage: action.payload,
                listEmployee: action.payload
            }
        // 
        case types.ADD_EMPLOYEE_SUCCESS:
        case types.UPDATE_EMPLOYEE_SUCCESS:
        case types.DELETE_EMPLOYEE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                successMessage: action.payload,
            }

        case types.GET_EMPLOYEE_FAILURE:
        case types.ADD_EMPLOYEE_FAILURE:
        case types.UPDATE_EMPLOYEE_FAILURE:
        case types.DELETE_EMPLOYEE_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload
            }

        default:
            return state
    }
}