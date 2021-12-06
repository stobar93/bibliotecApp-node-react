import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Users (){
    const [users, setUsers] = useState()
    useEffect(()=>{
        axios.get('/user')
        .then((response)=>setUsers(response.data))
    }, [])

    return <h1>Users</h1>
}