import Reducer from "./reducer";
import { AnyAction, CombinedState, combineReducers } from "redux";

const RootReducer = combineReducers({
  reducer: Reducer,
});

// export default RootReducer=(combineReducers);
export const userReducer = (state: CombinedState<RootState>, action: AnyAction) => {
  return RootReducer(state, action)
}

export type RootState = ReturnType<typeof RootReducer>