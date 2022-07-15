import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from "./action.types";
import axios from "axios";
export const registerAPI = (creds) => (dispatch) => {
    dispatch({ type: REGISTER_REQUEST })
    return axios.post("https://masai-api-mocker.herokuapp.com/auth/register", creds)
        .then(res => dispatch({ type: REGISTER_SUCCESS }))
        .catch(e => dispatch({ type: REGISTER_FAILURE }))
}

export const loginAPI = (creds) => (dispatch) => {
    dispatch({ type: LOGIN_REQUEST })
    return axios.post("https://masai-api-mocker.herokuapp.com/auth/login", creds)
        .then(res => dispatch({ type: LOGIN_SUCCESS, payload: res.data.token }))
        .catch(e => dispatch({ type: LOGIN_FAILURE }))
}