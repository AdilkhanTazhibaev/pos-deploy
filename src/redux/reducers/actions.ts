import { CardActionCreator } from "./card/action-creators";
import {ProductActionCreator} from "./products/action-creator";

export const allActionsCreators = {
    ...ProductActionCreator,
    ...CardActionCreator
}