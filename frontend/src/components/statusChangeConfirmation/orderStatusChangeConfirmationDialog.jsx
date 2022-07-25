import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";

const options = ["Processing", "Shipped", "Delivered"];

function ConfirmationDialogRaw(props) {
  const { onClose, value: valueProp, open, ...other } = props;
  const [value, setValue] = React.useState(valueProp);
  const radioGroupRef = React.useRef(null);

  React.useEffect(() => {
    if (!open) {
      setValue(valueProp);
    }
  }, [valueProp, open]);

  const handleEntering = () => {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus();
    }
  };

  const changeStatusConfirmed = () => {
    props.statusChange(props.statusChangeId, value);
  };

  const handleCancel = () => {
    onClose();
    props.setStatusChangeConfirmationDialogOpen(false);
  };

  const handleOk = () => {
    changeStatusConfirmed();
    onClose(value);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Dialog
      sx={{ "& .MuiDialog-paper": { width: "80%", maxHeight: 435 } }}
      maxWidth="xs"
      TransitionProps={{ onEntering: handleEntering }}
      open={open}
      {...other}
    >
      <DialogTitle>{props.dialogTitle}</DialogTitle>
      <DialogContent dividers>
        <RadioGroup
          ref={radioGroupRef}
          aria-label="ringtone"
          name="ringtone"
          value={value}
          onChange={handleChange}
        >
          {options.map((option) => (
            <FormControlLabel
              value={option}
              key={option}
              control={<Radio />}
              label={option}
            />
          ))}
        </RadioGroup>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel} sx={{fontWeight:"bold"}}>
          Cancel
        </Button>
        <Button onClick={handleOk} sx={{fontWeight:"bold"}}>Change</Button>
      </DialogActions>
    </Dialog>
  );
}

ConfirmationDialogRaw.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

export default function OrderStatusChangeConfirmationDialog(props) {
 
  const [value, setValue] = React.useState(props.orderStatus);

  const {
    statusChangeId,
    dialogTitle,
    statusChange,
    statusChangeConfirmationDialogOpen,
    setStatusChangeConfirmationDialogOpen,
  } = props;



  

  const handleClose = () => {
 

    
    setStatusChangeConfirmationDialogOpen(false);
  };

  return (
    <ConfirmationDialogRaw
          id="ringtone-menu"
          keepMounted
          open={statusChangeConfirmationDialogOpen}
          onClose={handleClose}
          value={value}
          dialogTitle={dialogTitle}
     
          statusChangeId={statusChangeId}
          statusChange={statusChange}
          setStatusChangeConfirmationDialogOpen={setStatusChangeConfirmationDialogOpen}
        />
  );
}
