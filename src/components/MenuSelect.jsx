import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {useAppSelector} from "../hooks/productHoock";

export default function MenuSelect({handleChangeSelect, product}) {
    const {data} = useAppSelector(state => state.product)



    let newCategories = data.filter((a, i) => data.findIndex((s) => a.categories === s.categories) === i)
    // @ts-ignore


    return (
        <Box sx={{ minWidth: 120 }}>
                <InputLabel id="demo-simple-select-label">categories</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={product.categories}
                    name="categories"
                    onChange={handleChangeSelect}
                >
                    {newCategories.map(item =>(
                        <MenuItem key={item.parentId} value={item.categories}>{item.categories}</MenuItem>
                    ))}
                </Select>
        </Box>
    );
}