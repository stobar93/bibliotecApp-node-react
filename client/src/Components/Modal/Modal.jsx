import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CreateForm from '../Create/CreateForm'
import CloseIcon from '@mui/icons-material/Close';
import IconButton from "@mui/material/IconButton";

export default function ModalDialog ({open, setOpen}){

    const handleClose = () => setOpen({status: false});
    const style = {
        Box:{
            position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "max-content",
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        display: 'flex',
        flexDirection: 'column'
        },
        Button: {
                width: "90%",
                margin: "auto"
        },
        Typography:{
            textAlign: "center"
        },
        IconButton: {
            position: 'relative',
            ml: 'auto',
            width: 'min-content'
        }
        
      };

    const components = {
        successDialog: <Box sx={style.Box}>
            <IconButton sx={style.IconButton} onClick={handleClose}><CloseIcon /></IconButton>
            <Typography sx={style.Typography} id="modal-modal-title" variant="h3" component="h2">
              {open.message}
            </Typography>
            <Button sx={style.Button} variant='contained' onClick={()=>setOpen(prev=>{return {status: false}})}>OK</Button>
          </Box>,
        transaction: <Box sx={style.Box}>
                        <IconButton sx={style.IconButton} onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={style.Typography} id="modal-modal-title" variant="h4" component="h2">
                        Lend a book
                        </Typography>
                    <CreateForm type='transaction' searchKey={open} /></Box>
    }

    return (
        <>
        <Modal
        open={open.status}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <div>
           
        {components[open.type]}
        </div>
      </Modal>
      
      </>
    )
}
