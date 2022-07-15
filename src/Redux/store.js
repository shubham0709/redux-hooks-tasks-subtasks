import { AppReducer } from "./AppReducer/reducer";
import { AuthReducer } from "./AuthReducer/reducer"
import thunk from 'redux-thunk';
import {
    combineReducers,
    legacy_createStore,
    applyMiddleware,
    compose
} from "redux";
const rootReducer = combineReducers({
    AppReducer,
    AuthReducer
})

export const store =
    legacy_createStore(rootReducer, applyMiddleware(thunk));