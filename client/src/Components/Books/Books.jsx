import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Books (){

    const [books, setBooks] = useState()
    useEffect(()=>{
        axios.get('/book')
        .then((response)=>setBooks(response.data))
    }, [])

    return (<h1>Books</h1>)
}