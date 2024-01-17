import * as types from '../constant';

const DEFAULT_STATE = {
    isFetching: false,
    dataFetched: false,
    success: false,
    successMessage: '',
    error: false,
    errorMessage: null,
    listColor: [],
}
export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.GET_COLOR_REQUEST:
        case types.ADD_COLOR_REQUEST:
        case types.UPDATE_COLOR_REQUEST:
        case types.DELETE_COLOR_REQUEST:
            return {
                ...state,
                isFetching: true,
            }
        // 
        case types.GET_COLOR_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                success:true,
                successMessage: action.payload,
                listColor: action.payload
            }
        // 
        case types.ADD_COLOR_SUCCESS:
        case types.UPDATE_COLOR_SUCCESS:
        case types.DELETE_COLOR_SUCCESS:
            return {
                ...state,
                isFetching: false,
                successMessage: action.payload,
            }

        case types.GET_COLOR_FAILURE:
        case types.ADD_COLOR_FAILURE:
        case types.UPDATE_COLOR_FAILURE:
        case types.DELETE_COLOR_FAILURE:
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