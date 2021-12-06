import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Books from './Components/Books/Books';
import Users from './Components/Users/Users';
import Transactions from './Components/Transactions/Transactions';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />} />
        <Route exact path="/books" element={<Books />} />
        <Route exact path="/users" element={<Users />} />
        <Route exact path="/transactions" element={<Transactions />} />
      </Routes>
    </div>
  );
}

export default App;
