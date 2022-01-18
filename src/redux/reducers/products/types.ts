import { ProductData } from "../../../components/ProductTable/ProductData";


export enum ProductActionEnum{
    GET_PRODUCT_ACTION = "GET_PRODUCT_ACTION",
    SET_PRODUCT_ACTION = "SET_PRODUCT_ACTION",
    CREATE_PRODUCT_ACTION = "CREATE_PRODUCT_ACTION"
}

export interface ProductState {
    data: ProductData | []
}

export interface GetProductAction {
    type: ProductActionEnum.GET_PRODUCT_ACTION
    payload: string
}
export interface SetProductAction {
    type: ProductActionEnum.SET_PRODUCT_ACTION
    payload: []
}
export interface CreateProductAction {
    type: ProductActionEnum.CREATE_PRODUCT_ACTION
    payload: []
}

export type ProductAction = GetProductAction | SetProductAction | CreateProductAction