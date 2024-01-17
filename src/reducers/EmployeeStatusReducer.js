import * as types from '../constant';

const DEFAULT_STATE = {
    isFetching: false,
    dataFetched: false,
    successMessage: '',
    error: false,
    errorMessage: null,
    listEmplStatus: [],
}
export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.GET_EMPLOYEE_STATUS_REQUEST:
            return {
                ...state,
                isFetching: true,
            }
        // 
        case types.GET_EMPLOYEE_STATUS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                success:true,
                listEmplStatus: action.payload
            }
        // 
        case types.GET_EMPLOYEE_STATUS_FAILURE:
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