


export interface CardState {
    card: []
}

export enum ActionCardEnum {
    SET_CARD_ACTION = "SET_CARD_ACTION",
    REMOVE_CARD_ACTION = "REMOVE_CARD_ACTION"
}

export interface SetActionCard {
    type: ActionCardEnum.SET_CARD_ACTION,
    payload: []
}
export interface RemoveActionCard {
    type: ActionCardEnum.REMOVE_CARD_ACTION,
    payload: []
}

export type ActionTypeCard = SetActionCard | RemoveActionCard

