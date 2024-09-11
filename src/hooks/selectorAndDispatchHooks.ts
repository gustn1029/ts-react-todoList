import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispach, RootState } from "../store/store";

export const useAppDispach = () => useDispatch<AppDispach>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;