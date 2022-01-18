import { addToArray } from "../../../utils/pushArray"
import {ProductAction, ProductActionEnum, ProductState} from "./types"


const initialState:ProductState = {
    data: []
}

const reducer = (state = initialState, action:ProductAction) =>{
    switch(action.type){
        case ProductActionEnum.SET_PRODUCT_ACTION:
            return{
                ...state,
                data: action.payload
            }

        case ProductActionEnum.CREATE_PRODUCT_ACTION:

            return {
                ...state,
                // @ts-ignore
                data: addToArray(state.data, action.payload)
            }

        default:
            return state
    }
}

export default reducer