import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import dotenv from 'dotenv';
import './index.css';
import App from './App';

import Books from './Components/Books/Books';
import Users from './Components/Users/Users';
import Transactions from './Components/Transactions/Transactions';
import reportWebVitals from './reportWebVitals';
dotenv.config();

axios.defaults.baseURL = "http://localhost:3001";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
    <Routes>
        <Route path="/" element={<App />}>
          <Route exact path="/books" element={<Books />} />
          <Route exact path="/users" element={<Users />} />
          <Route exact path="/transactions" element={<Transactions />} />
        </Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
