import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Table from '../Table/Table';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from '../TabPanel/TabPanel'
import CreateForm from '../Create/CreateForm'
import Box from '@mui/material/Box';

export default function Users (){
    const [users, setUsers] = useState()
    const [update, setUpdate] = useState(0)
    const [tabPage, setTabPage] = useState(0)

    useEffect(()=>{
        axios.get('/user')
        .then((response)=>setUsers(response.data))
    }, [update])

    const handleChange = (event, newValue) => {
        setTabPage(newValue);
      };

    return (
        <>
    <h1>Users</h1>
    <Box sx={{width: "90%", marginInline: 'auto', mt: "20px"}}>
    <Tabs value={tabPage} onChange={handleChange} aria-label="basic tabs example" centered>
        <Tab label="Users"/>
        <Tab label="Create User"/>
    </Tabs>
    </Box>
    
    <Box sx={{width: "90%", marginInline: 'auto', mt: "20px"}}>
    <TabPanel value={tabPage} index={0}>
           {users && users.length > 0 ? <Table info={users} setInfo={setUsers} timestamps={false} transactions={false} type="user" setUpdate={setUpdate} /> : <h1>There is no information to show</h1>} 
        </TabPanel>
        <TabPanel value={tabPage} index={1}>
            <CreateForm type='user' setUpdate={setUpdate} />
        </TabPanel>
    </Box>
        
    
    </>
        )
}