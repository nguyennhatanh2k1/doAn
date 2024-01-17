import * as types from '../constant';
const DEFAULT_STATE = {
    isFetching: false,
    dataFetched: false,
    successMessage: "",
    error: false,
    errorMessage: null,
}

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.LOGIN_REQUEST:

            return {
                ...state,
                isFetching: true,
            }
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                isFetching: false,
                successMessage: action.payload
            }
        case types.LOGIN_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true,
                errorMessage: 'loi roi'
            }
        default:
            return state
    }
}