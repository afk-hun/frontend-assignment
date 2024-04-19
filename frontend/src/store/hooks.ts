import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";

type DispatchFunction = () => AppDispatch;

export const useProductsDispatch: DispatchFunction = useDispatch;
export const useProductsSelector: TypedUseSelectorHook<RootState> = useSelector;
