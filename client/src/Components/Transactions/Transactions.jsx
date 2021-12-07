import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Table from '../Table/Table';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from '../TabPanel/TabPanel'
import CreateForm from '../Create/CreateForm'
import Box from '@mui/material/Box';

export default function Transactions (){

    const [transactions, setTransactions] = useState()
    const [tabPage, setTabPage] = useState(0)
    const [update, setUpdate] = useState(0)

    useEffect(()=>{
        axios.get('/transaction')
        .then((response)=>setTransactions(response.data))
    }, [update])

    

    const handleChange = (event, newValue) => {
        setTabPage(newValue);
      };

    return (
    
    <>
    <h1>Transactions</h1>
    <Box sx={{width: "90%", marginInline: 'auto', mt: "20px"}}>
    <Tabs value={tabPage} onChange={handleChange} aria-label="basic tabs example" centered>
        <Tab label="Transactions"/>
        <Tab label="Lend a book"/>
        <Tab label="Return a book"/>
    </Tabs>
    </Box>
    <Box sx={{width: "90%", marginInline: 'auto', mt: "20px"}}>
    <TabPanel value={tabPage} index={0}>
    {transactions && transactions.length > 0 ? <Table info={transactions} setInfo={setTransactions} timestamps={false} transactions={false} type="transaction" /> : <h1>There is no information to show</h1> }
        </TabPanel>
        <TabPanel value={tabPage} index={1}>
        <CreateForm type='transaction' setUpdate={setUpdate} />
        </TabPanel>
        <TabPanel value={tabPage} index={2}>
        <CreateForm type='return' setUpdate={setUpdate} />
        </TabPanel>
    </Box>
        

    
    </>
    )
}