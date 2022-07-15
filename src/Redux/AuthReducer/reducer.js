import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
} from "./action.types";

import { getData, setData } from "../../Utils/localStorage";

const initialState = {
    isLoading: false,
    isError: false,
    token: (getData("isAuth") || ""),
    isAuth: (getData("isAuth")?.length > 0 ? true : false)
}

const AuthReducer = (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case LOGIN_REQUEST: return {
            ...state,
            isAuth: false,
            isLoading: true,
            isError: false
        }
        case LOGIN_SUCCESS: {
            setData("isAuth", payload);
            return {
                ...state,
                isAuth: true,
                isLoading: false,
                isError: false,
                token: payload
            }
        }
        case LOGIN_FAILURE: return {
            ...state,
            isAuth: false,
            isError: true,
            isLoading: false
        }
        case LOGOUT: {
            return initialState
        }
        default: return state;
    }
}
export { AuthReducer };