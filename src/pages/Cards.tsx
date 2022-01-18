import React from 'react';
import {useAppSelector} from "../hooks/productHoock";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';

export const CardPage:React.FC = ()=>{
    // @ts-ignore
    const {card} = useAppSelector(state=>state.card)
    const cardElement = (
        <React.Fragment>
            <CardContent>

                {
                    // @ts-ignore
                    card.map((item,index) =>(
                    <>
                        <Typography key={index} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>

                            <List component="nav" aria-label="secondary mailbox folder">
                                <ListItemText primary={item.name} />
                                <ListItemText primary={item.categories} />
                                <ListItemText primary={item.price} />
                            </List>
                    </Typography>
                        </>

                    ))}


            </CardContent>
            <CardActions>
                <List component="nav" aria-label="secondary mailbox folder">

                    <ListItemText primary={ // @ts-ignore
                        "Количество " + card.length} />

                </List>
            </CardActions>
        </React.Fragment>
    );


    return (
        <>
            <Box sx={{ minWidth: 275 }}>
                <Card variant="outlined">{cardElement}</Card>
            </Box>
        </>
    )
}