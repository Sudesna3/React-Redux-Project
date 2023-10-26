import { createStore, combineReducers } from "redux";
import login_types  from "./constants/loginConstant";
import {authInitialState, authLoginReducer} from './reducers/loginReducer';

const rootReducer = combineReducers({
    auth: authLoginReducer
})

const store = createStore(rootReducer);

export default store;