import * as types from '../constant';

const DEFAULT_STATE = {
    isFetching: false,
    dataFetched: false,
    successMessage: '',
    error: false,
    errorMessage: null,
    listCategory: [],
}
export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.GET_CATEGORY_REQUEST:
        case types.ADD_CATEGORY_REQUEST:
        case types.UPDATE_CATEGORY_REQUEST:
        case types.DELETE_CATEGORY_REQUEST:
            return {
                ...state,
                isFetching: true,
            }
        // 
        case types.GET_CATEGORY_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                success:true,
                listCategory: action.payload
            }
        // 
        case types.ADD_CATEGORY_SUCCESS:
        case types.UPDATE_CATEGORY_SUCCESS:
        case types.DELETE_CATEGORY_SUCCESS:
            return {
                ...state,
                isFetching: false,
                success: true,
                successMessage: action.payload,
            }

        case types.GET_CATEGORY_FAILURE:
        case types.ADD_CATEGORY_FAILURE:
        case types.UPDATE_CATEGORY_FAILURE:
        case types.DELETE_CATEGORY_FAILURE:
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