import * as types from '../constant';

const DEFAULT_STATE = {
    isFetching: false,
    dataFetched: false,
    success: false,
    successMessage: '',
    error: false,
    errorMessage: '',
    listBrand: [],
}
export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.GET_BRAND_REQUEST:
        case types.ADD_BRAND_REQUEST:
        case types.UPDATE_BRAND_REQUEST:
        case types.DELETE_BRAND_REQUEST:
            return {
                ...state,
                isFetching: true,
            }
        // 
        case types.GET_BRAND_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                success: true,
                listBrand: action.payload,
            }
        // 
        case types.ADD_BRAND_SUCCESS:
        case types.UPDATE_BRAND_SUCCESS:
        case types.DELETE_BRAND_SUCCESS:
            // console.log(action.payload,'actoin pay loadđ');
            return {
                ...state,
                isFetching: false,
                success: true,
                successMessage: action.payload,
            }

        case types.GET_BRAND_FAILURE:
        case types.ADD_BRAND_FAILURE:
        case types.UPDATE_BRAND_FAILURE:
        case types.DELETE_BRAND_FAILURE:
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