import {ProductData} from "../../../components/ProductTable/ProductData";
import { ProductActionEnum } from "./types";

export const ProductActionCreator = {
    setProduct: (data: ProductData[]) => ({type: ProductActionEnum.SET_PRODUCT_ACTION, payload: data}),
    createProduct: (data:ProductData[]) => ({type: ProductActionEnum.CREATE_PRODUCT_ACTION, payload: data})
}