import React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import CloseIcon from "@mui/icons-material/Close";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

export default function SearchBar({
  search,
  setSearch,
  type,
  setPage,
  setOpen,
  open,
  setAnchorEl
}) {

  const handleInputChange = (event, setSearch) => {
    let value = event.target.value;
    if(value==="") setSearch((search)=>{
      let copy = {...search}
      delete copy[type]
      return {...copy}})
    else{
      setSearch((search)=>{return {...search, [type]: value}});
      setPage(0)
    }
    
  };

  const handleClearInput = (setSearch) => {
    if(!search[type] && open){
      setOpen(false)
      setAnchorEl(null)
    }else{
      setSearch((search)=>{
        let copy = {...search}
        delete copy[type]
        return {...copy}});
    }

  };

  return (
    <>
      <OutlinedInput
        fullWidth
        id={"searchBar"}
        value={search[type] ? search[type] : ""}
        placeholder={type}
        onChange={(e) => handleInputChange(e, setSearch)}
        autoComplete="off"
        sx={{backgroundColor: '#FFF'}}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              onClick={() => handleClearInput(setSearch)}
              aria-label="clear search"
              edge="end"
            >
              {search[type] !== "" && <CloseIcon />}
            </IconButton>
          </InputAdornment>
        }
      />
    </>
  );
}
