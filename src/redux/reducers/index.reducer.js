import CounterReducer from "./counter.reducer";
import IsLoggedReducer from "./IsLogged.reducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counter: CounterReducer,
    isLogged: IsLoggedReducer,
});
export default allReducers;
