import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Transactions (){

    const [transactions, setTransactions] = useState()
    useEffect(()=>{
        axios.get('/transaction')
        .then((response)=>setTransactions(response.data))
    }, [])

    return <h1>Transactions</h1>
}