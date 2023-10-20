import { createStore } from "redux";
import login_types  from "./constants/loginConstant";
import {authInitialState, authLoginReducer} from './reducers/loginReducer';

const store = createStore(authLoginReducer);

export default store;