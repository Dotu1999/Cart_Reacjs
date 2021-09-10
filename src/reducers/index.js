import FoodReducer from "./foods-reducers";
import UserReducer from "./users-reducers";
import { combineReducers } from "redux";
//tao obj noi cac reducer
const allReducers = combineReducers({
  foods: FoodReducer,
  user: UserReducer,
});
export default allReducers;
