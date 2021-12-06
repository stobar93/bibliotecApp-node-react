import React from 'react'
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const links = ["Books", "Users", "Transactions"]

export default function NavBar (){
    return (
        <>
        <AppBar position="fixed" sx={{display: "flex", flexDirection:"row"}}>
            <Typography
            variant="h6"
            noWrap
            component="div"
          >
            Library 365
          </Typography>
            <Toolbar disableGutters>
            {
                links.map(link=>{
                    return (
                    <Link key={link} to={`/${link}`}>
                        <Button
                            
                            sx={{  color: 'white', textDecoration: "none" }}
                        >
                        {link}
                        </Button>
                    </Link>)
                })
            }
            </Toolbar>
            
        </AppBar>
        <Toolbar />
        </>
        )
}