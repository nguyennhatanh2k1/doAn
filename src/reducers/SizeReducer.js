import * as types from '../constant';

const DEFAULT_STATE = {
    isFetching: false,
    dataFetched: false,
    successMessage: '',
    error: false,
    errorMessage: null,
    listSize: [],
}
export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.GET_SIZE_REQUEST:
            return {
                ...state,
                isFetching: true,
            }
        // 
        case types.GET_SIZE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                success:true,
                listSize: action.payload
            }
        // 
        case types.GET_SIZE_FAILURE:
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