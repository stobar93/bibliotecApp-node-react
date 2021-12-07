import React from 'react';
import axios from 'axios';
import IconButton from "@mui/material/IconButton";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt'; //Prestar, Crear usuario
import ZoomInIcon from '@mui/icons-material/ZoomIn'; //Detalles (book,user, transaction)
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import SaveIcon from '@mui/icons-material/Save';
import BookIcon from '@mui/icons-material/Book';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const buttons = {
    book: {
        add: <PersonAddAltIcon />,
        //detail: <ZoomInIcon />,
        edit: <EditIcon />
    },
    user: {
        add: <BookIcon />,
        //detail: <ZoomInIcon />,
        edit: <EditIcon />,
        
    },
    transaction: {
        //detail: <ZoomInIcon />
    },
    save: {
        save: <SaveIcon />,
        delete: <DeleteForeverIcon />,
        close: <CloseIcon />
    }

}

export default function Actions ({type, setEdit, setAdd, setDetail, url, data, setUpdate}){

    

    const action = {
        
            add: ()=>setAdd({status: true, type: 'transaction', [`${type}Id`]: data.id}),
            detail: setDetail,
            edit: ()=>{setEdit(true)},
            save: ()=>{
                axios.put(`${url}?id=${data.id}`, data)
                .then(()=>setUpdate((prev)=>prev+1))
                .then(()=>setEdit(false))
            },
            close: ()=>setEdit(false),
            delete: ()=>{
                axios.delete(`${url}?id=${data.id}`)
                .then(()=>setUpdate((prev)=>prev+1))
                .then(()=>setEdit(false))
            }
    }

    return (
        <>
        {
            Object.keys(buttons[type]).map(key=>{
                return (<IconButton 
                    onClick={action[key]} 
                    key={`${type}-${key}`}>{buttons[type][key]}</IconButton>)
            }
            )
        
        } </>
    )
}