import {
    GET_TASKS_REQUEST,
    GET_TASKS_SUCCESS,
    GET_TASKS_FAILURE
} from "./action.types";

const initialState = {
    isLoading: false,
    isError: false,
    tasks: []
}

const AppReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_TASKS_REQUEST: return {
            ...state,
            isLoading: true,
            isError: false
        }
        case GET_TASKS_SUCCESS: return {
            ...state,
            isLoading: false,
            isError: false,
            tasks: payload
        }
        case GET_TASKS_FAILURE: return {
            ...state,
            isLoading: false,
            isError: true,
        }
        default: return state
    }
}
export { AppReducer };