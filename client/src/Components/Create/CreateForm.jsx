import React, {useState} from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import { InputText } from '../Table/Partials/InputText';
import Button from '@mui/material/Button';
import ModalDialog from '../Modal/Modal';

export default function Create({type, setUpdate, searchKey=""}){

    const [data, setData] = useState({})
    const [open, setOpen] = useState(false)
    
    const handleSave = ()=>{
        if(type==='return'){
            let {userId, bookId} = data;
            axios.put(`/transaction?userId=${userId}&bookId=${bookId}`, data)
                .then((response)=>setOpen({status: true, message: "Success", type:"successDialog"  }))
                .then(()=>setData({}))
                .then(()=>setUpdate && setUpdate((prev)=>++prev))
                .catch((e)=>{
                    setOpen({status: true, type:"successDialog", message: e.status!==500 ? e.response.data : 'Something went wrong. Try Again'})
            })
        } else {
            axios.post(`/${type}`, data)
                .then((response)=>setOpen({status: true, message: "Success", type:"successDialog"  }))
                .then(()=>setData({}))
                .then(()=>setUpdate && setUpdate((prev)=>++prev))
                .catch((e)=>{
                    setOpen({status: true, type:"successDialog", message: e.status!==500 ? e.response.data : 'Something went wrong. Try Again'})
            })
        }
        
        
    }

    const handleClear = ()=>{
        setData({})
    }

   

    const style = {
        Box: {
            width: "600px",
            height: "max-content",
            m: 'auto',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: "center"
        },
        Button: {
            primary: {
                width: "60%",
                marginInline: "10px"
            },
            secondary: {
                width: "20%",
                marginInline: "10px"
            }
        }
    }

    const keys = {
        book: ['title', 'author', 'subject', 'year'],
        user: ['id', 'firstName', 'lastName'],
        transaction: ['bookId', 'userId'],
        return: ['bookId', 'userId']
    }

    return (
        <Box sx={style.Box}>
            {
                keys[type].map((key, index)=>{
                    
                     
                    return type === 'transaction' ? 
                    <InputText valueTag={searchKey[key]} m="10px" width="90%" setData={setData} data={data} label={key} placeholder={key} />
                    :
                    <InputText m="10px" width="90%" setData={setData} data={data} label={key} placeholder={key} />
                    })
            }
                <Button onClick={handleClear} variant="outlined" sx={style.Button.secondary}>Clear</Button>
                <Button onClick={handleSave} variant="contained" sx={style.Button.primary}>Save</Button>
                <ModalDialog open={open} setOpen={setOpen} />
        </Box>
    )
}