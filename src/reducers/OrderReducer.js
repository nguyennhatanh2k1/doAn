import * as types from '../constant';

const DEFAULT_STATE = {
    isFetching: false,
    dataFetched: false,
    success: false,
    successMessage: '',
    error: false,
    errorMessage: '',
    listOrder: [],
}
export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.GET_ORDER_REQUEST:
        case types.ADD_ORDER_REQUEST:
        case types.UPDATE_ORDER_REQUEST:
        case types.DELETE_ORDER_REQUEST:
            return {
                ...state,
                isFetching: true,
                error: false,
            }
        // 
        case types.GET_ORDER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                success: true,
                error: false,
                listOrder: action.payload,
            }
        // 
        case types.ADD_ORDER_SUCCESS:
        case types.UPDATE_ORDER_SUCCESS:
        case types.DELETE_ORDER_SUCCESS:
            // console.log(action.payload,'actoin pay loadđ');
            return {
                ...state,
                isFetching: false,
                success: true,
                successMessage: action.payload,
            }

        case types.GET_ORDER_FAILURE:
        case types.ADD_ORDER_FAILURE:
        case types.UPDATE_ORDER_FAILURE:
        case types.DELETE_ORDER_FAILURE:
            console.log(action.payload, 'actoin pay loadđ');
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