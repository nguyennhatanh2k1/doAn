import * as types from '../constant';
const DEFAULT_STATE = {
    isFetching: false,
    dataFetched: false,
    successMessage: "",
    error: false,
    errorMessage: null,
    listRegister: [],
}

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.REGISTER_REQUEST:

            return {
                ...state,
                isFetching: true,
            }
        case types.REGISTER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                successMessage: action.payload
            }
        case types.REGISTER_FAILURE:
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