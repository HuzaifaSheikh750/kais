
import { combineReducers } from "redux";
import usersReducer from "./blog/reducer"

const rootReducer = combineReducers({
    users: usersReducer
});

export default rootReducer;