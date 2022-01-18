import {ActionCardEnum, CardState } from "./types";

export const CardActionCreator = {
    setCard : (card: CardState[])=>({type: ActionCardEnum.SET_CARD_ACTION, payload: card}),
    removeCard : (card: CardState[])=>({type: ActionCardEnum.REMOVE_CARD_ACTION, payload: card})
}