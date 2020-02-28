import { combineReducers } from "redux";
import deMoReducer from "./deMoReducer";
import customerReducer from "./customerReducer";

const rootReducer = combineReducers({
  deMoReducer,
  customerReducer
});

export default rootReducer;
