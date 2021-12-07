import React, {useState} from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { InputText } from "./InputText";
import Actions from './Actions'
export function Row({row, keys, type, setUpdate, setModal}){

    const [edit, setEdit] = useState(false)
    const [data, setData] = useState({id: row.id})

    return (
        <TableRow
        hover
        key={`book-${row.id}`}>
            {keys.map(key=>{
            return <TableCell key={`${row.id}-${key}-cell`}>{
                (()=>{
                    if(edit) {
                        if(key !== 'id' && key !== 'available'){
                            return <InputText setData={setData} data={data} label={key} placeholder={row[key]} />
                        } else {return `${row[key]}`}
                    } else {return `${row[key]}`}
                })()
                
                
                }</TableCell>
        })} 
            <TableCell>{!edit ? <Actions setAdd={setModal} type={type} setEdit={setEdit} data={data} /> : <Actions url={`/${type}`} type="save" data={data} setEdit={setEdit} setUpdate={setUpdate} />}</TableCell>
            
        </TableRow>
    )
}

export function EmptyRow({keys,index}){

    return (
        <TableRow
        hover
        key={`empty-${index}`}
        height={53}>
            <TableCell colSpan={keys.length + 1}></TableCell>
        </TableRow>
    )
}