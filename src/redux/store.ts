import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {RootState, userReducer} from "./reducer/rootReducer";
import thunk from "redux-thunk";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const store = createStore({
  reducer: userReducer,
  middleware: (getDefaultMiddleware: (arg0: { immutableCheck: boolean; }) => any) =>
      getDefaultMiddleware({
          immutableCheck: false,
      }),
  devTools: true,
});



export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>() // Export a hook that can be reused to resolve types

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store