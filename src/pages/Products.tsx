import React from 'react';
import Header from "../components/Header";
import ProductTable from '../components/ProductTable/ProductTable';
import {useActions, useAppSelector} from "../hooks/productHoock";
import {data} from "../components/ProductTable/ProductData";
import {CreateModal} from "../components/Modal/CreateProduct";
import {Button} from "@mui/material";
import {Link} from 'react-router-dom'

export const ProductPage:React.FC = ()=>{
    const {setProduct} = useActions()
    const [open, setOpen] = React.useState(false)
    const {card} = useAppSelector(state=> state.card)
    const handleClose = () =>{
        setOpen(false)
    }
    const handleOpen = () =>{
        setOpen(true)
    }

    React.useEffect(()=>{
        setProduct(data)
    }, [])

    return (
        <>
            <Header/>
            <ProductTable/>
            <CreateModal handleClose={handleClose} open={open}/>
            <Button onClick={handleOpen}>Создать</Button>

            {// @ts-ignore
                card.length > 0 && (
                    <>
                        <Button>
                            <Link to={"/card"}>Чек</Link>
                        </Button>
                    </>

            )}
        </>
    )
}