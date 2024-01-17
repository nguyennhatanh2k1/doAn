import * as types from '../constant';

const DEFAULT_STATE = {
    isFetching: false,
    dataFetched: false,
    success: false,
    successMessage: '',
    error: false,
    errorMessage: '',
    listProduct: [],
}
export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.GET_PRODUCT_REQUEST:
        case types.ADD_PRODUCT_REQUEST:
        case types.UPDATE_PRODUCT_REQUEST:
        case types.DELETE_PRODUCT_REQUEST:
            return {
                ...state,
                isFetching: true,
                error: false,
            }
        // 
        case types.GET_PRODUCT_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                success: true,
                error: false,
                listProduct: action.payload,
            }
        // 
        case types.ADD_PRODUCT_SUCCESS:
        case types.UPDATE_PRODUCT_SUCCESS:
        case types.DELETE_PRODUCT_SUCCESS:
            // console.log(action.payload,'actoin pay loadđ');
            return {
                ...state,
                isFetching: false,
                success: true,
                successMessage: action.payload,
            }

        case types.GET_PRODUCT_FAILURE:
        case types.ADD_PRODUCT_FAILURE:
        case types.UPDATE_PRODUCT_FAILURE:
        case types.DELETE_PRODUCT_FAILURE:
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