import React from "react";
import {setDialog} from "../features/dialogModal/dialogSlice";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteClient } from "../crm-logic/deleteClient";

export default function AlertDialog() {

  const dispatch = useDispatch();
  const clientInfo = useSelector((state) => state.getOneClient.getOneClient);
  const isOpen = useSelector(state => state.dialog)

  const handleOpen = () => {
    dispatch(setDialog(true));
  };

  const handleClose = () => {
    dispatch(setDialog(false));
  };

  const deleteOneClient = async () => {
    await deleteClient(clientInfo.id, dispatch)
    dispatch(setDialog(false));
  }

  return (
    <div>
      <Button
        variant='outlined'
        size='small'
        color='success'
        onClick={handleOpen}
      >
        Удалить
      </Button>

      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle sx={{textAlign: 'center'}}>
          <p>Вы точно хотите удалить?</p>
          <p> Это действие будет безвозвратным!</p>
        </DialogTitle>
        <DialogActions>
          <Button
            onClick={handleClose}
            color='success'
          >
            Нет
          </Button>

          <Button
            onClick={deleteOneClient}
            autoFocus
            color='success'
          >
            Да
          </Button>

        </DialogActions>
      </Dialog>


    </div>
  );
}
