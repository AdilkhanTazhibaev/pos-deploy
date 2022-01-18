import React from 'react';
import {Routes, Route} from 'react-router-dom'
import { CardPage } from '../pages/Cards';
import {ProductPage} from "../pages/Products";


export const AppRouter:React.FC = ()=>{
    return (
        <>

            <Routes>
                <Route path={"/"} element={<ProductPage/>}/>
                <Route path={"/card"} element={<CardPage/>}/>
            </Routes>
        </>
    )
}