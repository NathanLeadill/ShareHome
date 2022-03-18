import { combineReducers } from "redux";

import account from "@redux/slices/account";
import auth from "@redux/slices/auth";

import { AppDispatch, store } from "./store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const rootReducer = combineReducers({ account, auth });

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default rootReducer;
