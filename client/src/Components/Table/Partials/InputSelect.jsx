import React, {useState, useEffect} from "react";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";


export default function InputSelect({label, placeholder, handleOnChange, options, value, width, m}){
    return (
        <FormControl sx={{width: width ?? "100px", m: m ?? 0}}>
        <InputLabel sx={{backgroundColor: "#fff"}} id={`select-create-${label}`}>{label}</InputLabel>
        <Select
            
            size="small"
            id={`inputText-${label}`}
            variant="outlined"
            placeholder={placeholder}
            onChange={(e)=>handleOnChange(e)}
            value={value ?? ""}
        >
            {options.map(option=>{
                return <MenuItem value={option}>{option}</MenuItem>
            })}
        </Select>
      </FormControl>
    )
}