import React, {useState} from "react";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';
import Popper from '@mui/material/Popper';
import SearchBar from './SearchBar'


export default function Head({keys,search, setSearch, setPage}){
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  
  const handleClick = (event, headCell) => {
    setAnchorEl( {element: event.currentTarget, type: headCell});
    setOpen(open=>!open)
  };

 return(
        <TableHead>
      <TableRow>
        {keys && keys
        .map((headCell) => (
          <>
          <TableCell
            key={`${headCell}-head`}
            align={'center'}
            padding='normal'
          >{headCell}
            <IconButton onClick={(e)=>handleClick(e, headCell)}><SearchIcon/></IconButton>
            
              <Popper placement="left-start" id={`${headCell}-popper`} open={open} anchorEl={anchorEl && anchorEl.element}>
                <SearchBar type={anchorEl && anchorEl.type} search={search} setSearch={setSearch} setPage={setPage} open={open} setOpen={setOpen} setAnchorEl={setAnchorEl} />
                
              </Popper>
            
          </TableCell>
          
        </>
        ))}
        <TableCell>
            Actions
        </TableCell>
      </TableRow>
    </TableHead>
    )
}