import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../redux/store'
import {bindActionCreators} from "redux";
import {allActionsCreators} from "../redux/reducers/actions";


// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(allActionsCreators, dispatch)
}