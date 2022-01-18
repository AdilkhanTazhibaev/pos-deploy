import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import MenuSelect from "../MenuSelect";
import {Button, TextField} from "@mui/material";
import {SelectChangeEvent} from "@mui/material/Select";
import {useActions} from "../../hooks/productHoock";
import {ProductData} from "../ProductTable/ProductData";

interface CreateModalProps{
    open: boolean;
    handleClose: ()=>void
}



const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const CreateModal:React.FC<CreateModalProps> = ({open, handleClose})=>{
    const {createProduct} = useActions()


    const [product, setProduct] = useState<ProductData[]>({
        // @ts-ignore
        parentId: 1,
        categories: "",
        price: 0,
        name: ""
    })

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement|HTMLInputElement>) =>{
        setProduct({...product, [event.target.name]: event.target.value})
    }
    const handleChangeSelect = (event: SelectChangeEvent) => {
        setProduct({...product, [event.target.name]: event.target.value});
    };
    const handleSubmit = () =>{
        createProduct(product)
    }
    return (
        <>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <TextField
                            id="outlined-textarea"
                            label="Name"
                            name={"name"}
                            multiline
                            onChange={(e)=>handleChange(e)}
                        />
                        <TextField
                        id="outlined-textarea"
                        label="Price"
                        name={"price"}
                        onChange={(e)=>handleChange(e)}
                        multiline
                    />

                        <MenuSelect handleChangeSelect={handleChangeSelect} product={product}/>

                        <Button onClick={handleSubmit}>Создать</Button>
                    </Box>
                </Modal>
        </>
    )
}