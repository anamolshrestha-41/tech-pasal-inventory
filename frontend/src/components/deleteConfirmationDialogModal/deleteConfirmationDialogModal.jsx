import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function DeleteConfirmationDialogModal(props) {
  const {
    deletionId,
    deleteConfirmationDialogOpen,
    setDeleteConfirmationDialogOpen,
    deleteConfirmed,
    deleteConfirmationText,
    deleteConfirmationTitle
  } = props;

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setDeleteConfirmationDialogOpen(false);
  };

  const handleDeleteConfirm = () => {
    deleteConfirmed(deletionId); // id is passed
    handleClose();
  };

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={deleteConfirmationDialogOpen}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      disableAutoFocus={false}
      >
        <DialogTitle id="responsive-dialog-title">
          {deleteConfirmationTitle}
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{fontWeight:550}}>
         {deleteConfirmationText}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} sx={{fontWeight:"bold" ,color:"green"}}>
            Cancel
          </Button>
          <Button onClick={handleDeleteConfirm} autoFocus sx={{fontWeight:"bold",color:"red"}}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
