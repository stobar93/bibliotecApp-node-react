import React from 'react';
import TablePagination from "@mui/material/TablePagination";

export default function PaginationHandler({info, page, setPage, rowsPerPage, setRowsPerPage, setEmptyRows}){

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
        setEmptyRows(((newPage+1) * rowsPerPage) - info.length)
      };
    
      const handleChangeRowsPerPage = (event) => {  
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
        setEmptyRows(0)
      };

    return (
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={info?.length ?? 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
    )
}