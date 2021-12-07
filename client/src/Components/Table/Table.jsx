import React, {useState} from "react";
import Table from "@mui/material/Table";
import Head from './Partials/Head';
import {Row, EmptyRow} from './Partials/Row';
import Pagination from './Partials/Pagination';
import TableBody from "@mui/material/TableBody";
import ModalDialog from '../Modal/Modal'

const keysHandler = (info, timestamps, transactions, setInfo)=>{
    return info.length > 0 && Object.keys(info[0])
            .filter((key) => {
                if(key === 'createdAt' || key === 'updatedAt')  return timestamps
                    else if(key === 'transactions') return transactions
                    else{return true}
             })
             
}

export default function DataTable({info, timestamps, transactions, type, setUpdate}){

    const [rowsPerPage, setRowsPerPage] = useState(5)
    const [page, setPage] = useState(0);
    const [emptyRows, setEmptyRows] = useState(0)
    const [search, setSearch] = useState({})
    const [modal, setModal] = useState({status: false})
    const keys = info && keysHandler(info, timestamps, transactions)
    
    const copyInfo = info && info
    .filter(row=>{
        let include = [];
        let keys = Object.keys(search);
        
        if(keys.length > 0){
            keys.forEach((key)=>{
                let regexp = new RegExp(`^${search[key]}`, "ig")
                include.push(regexp.test(row[key].toString())) 
            })
        }else {return true}

        return include.every((i)=>i)
    })

    return(
         
        <>
        <Table size="small">
            <Head keys={keys} search={search} setSearch={setSearch} setPage={setPage} />
            <TableBody>
                { copyInfo && copyInfo.length > 0  ? copyInfo.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(row=><Row setModal={setModal} key={`row-${row.id}`} keys={keys} row={row} type={type} setUpdate={setUpdate} />) : null }

                {emptyRows > 0 ? 
                    Array.from(Array(emptyRows), (r)=>r+1)
                    .map((e, i)=><EmptyRow keys={keys} index={i} />) 
                    : null}
            </TableBody>
        </Table>
        <Pagination info={copyInfo} page={page} setPage={setPage} rowsPerPage={rowsPerPage} setRowsPerPage={setRowsPerPage} setEmptyRows={setEmptyRows} />
        <ModalDialog open={modal} setOpen={setModal} />
        </>
        

    )
}