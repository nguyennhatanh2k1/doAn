import * as types from '../constant';

const DEFAULT_STATE = {
    isFetching: false,
    dataFetched: false,
    success: false,
    successMessage: '',
    error: false,
    errorMessage: '',
    listAccount: [],
}
export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.GET_ACCOUNT_REQUEST:
        case types.UPDATE_ACCOUNT_REQUEST:
        case types.DELETE_ACCOUNT_REQUEST:
            return {
                ...state,
                isFetching: true,
            }
        // 
        case types.GET_ACCOUNT_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                success: true,
                listAccount: action.payload,
            }
        // 
        case types.UPDATE_ACCOUNT_SUCCESS:
        case types.DELETE_ACCOUNT_SUCCESS:
            // console.log(action.payload,'actoin pay loadđ');
            return {
                ...state,
                isFetching: false,
                success: true,
                successMessage: action.payload,
            }

        case types.GET_ACCOUNT_FAILURE:
        case types.UPDATE_ACCOUNT_FAILURE:
        case types.DELETE_ACCOUNT_FAILURE:
            // console.log(action.payload, 'actoin pay loadđ');
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