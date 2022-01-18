import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useActions, useAppSelector} from "../../hooks/productHoock";
import {Checkbox} from "@mui/material";
import {CardState} from "../../redux/reducers/card/types";



export default function ProductTable() {
    // @ts-ignore
    const product:ProductDataType[] = useAppSelector(state=>state.product.data)
    const {setCard, removeCard} = useActions()


    const handleAdd = (e: React.ChangeEvent<HTMLInputElement>, obj: CardState[]) => {
        if(e.target.checked){
            setCard(obj)
        }else{
            removeCard(obj)
        }

    }

    // @ts-ignore
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Категории</TableCell>
                        <TableCell align="center">Продукты</TableCell>
                        <TableCell align="center">Цена</TableCell>
                        <TableCell align="center">Выбрать</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {product.map((item, index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell  align="center">
                                {item.categories}
                            </TableCell>
                            <TableCell align="center">{item.name}</TableCell>
                            <TableCell align="center">{item.price}</TableCell>
                            <TableCell align="center">
                                <Checkbox  defaultChecked={false} onChange={(e)=>handleAdd(e, item)}/>
                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}