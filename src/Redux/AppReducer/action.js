import axios from "axios";
import {
    GET_TASKS_REQUEST,
    GET_TASKS_SUCCESS,
    GET_TASKS_FAILURE
} from "./action.types";

export const getTasksAPI = () => (dispatch) => {
    dispatch({ type: GET_TASKS_REQUEST });
    //https://mjg9q8.sse.codesandbox.io/tasks
    return axios.get("http://localhost:8080/tasks")
        .then(res => {
            dispatch({ type: GET_TASKS_SUCCESS, payload: res.data });
        })
        .catch(e => dispatch({ type: GET_TASKS_FAILURE }));
}