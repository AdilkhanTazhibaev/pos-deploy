import {ActionCardEnum, ActionTypeCard, CardState} from "./types"
import {addToArray, removeFromArray} from "../../../utils/pushArray";

const initialState:CardState = {
    card: []
}


const reducer = (state=initialState, action:ActionTypeCard) => {
    switch (action.type) {
        case ActionCardEnum.SET_CARD_ACTION:
            return {
                ...state,
                card: addToArray(state.card, action.payload)
            }

        case ActionCardEnum.REMOVE_CARD_ACTION:
            return {
                ...state,
                card: removeFromArray(state.card, action.payload)
            }


        default:return state
    }
}

export default reducer