import * as React from "react";

import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { Button, MenuItem, Select, TextareaAutosize } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import FormLabel from '@mui/material/FormLabel';


const categoryList = [
  "mobile",
  "laptop",
  "gaming console",
  "headphone",
  "webcam",
];

const supplierList = [
  "AutoCad Technology Pvt. Ltd.",
  "G-Max Technology Pvt. Ltd.",
  "One-Piece Technology Pvt. Ltd.",
  "Amaterasu Technology Pvt. Ltd.",
  "Shadow-clone Technology Pvt. Ltd.",
  "Nine-tial Technology Pvt. Ltd.",
  "Quark Technology Pvt. Ltd.",
];

export default function UpdateOrderFormDialog(props) {
  const {
    orderToUpdateId,
    updateOrder,
    updateConfirmationDialogOpen,
    setUpdateConfirmationDialogOpen,
    dialogTitle,
    dialogText,
  } = props;

 

  const [newOrderData, setNewOrderData] = React.useState({
   quantity:"",
   orderStatus:"",
   paymentStatus:"",
   paymentMode:"",
  });
  const {
    quantity,
    orderStatus,
    paymentStatus,
    paymentMode
  } = newOrderData;

  const handleDataChange = (e) => {
    e.preventDefault();

    console.log(e.target.name);
    setNewOrderData({ ...newOrderData, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    setUpdateConfirmationDialogOpen(false);
  };

  const updateOrderConfirm= () => {
    updateOrder(orderToUpdateId, newOrderData);
    handleClose();
  };

  

  return (
    <div>
      <Dialog
        open={updateConfirmationDialogOpen}
        onClose={handleClose}
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: "600px", // Set your width here
            },
          },
        }}
      >
        <DialogTitle>{dialogTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText>{dialogText}</DialogContentText>
          
         

      
       

          <FormControl
            fullWidth
            sx={{ marginTop: "20px", marginBottom: "20px" }}
            variant="standard"
          >
            <InputLabel htmlFor="standard-adornment-name">
              Quantity
            </InputLabel>
            <Input
              required
              type="number"
              inputProps={{
                min: 0,
                pattern: "[1-9]*",
              }}
              onInput={(e) => {
                e.target.validity.valid || (e.target.value = "");
              }}
              id="standard-adornment-name"
              name="quantity"
              value={quantity}
              onChange={handleDataChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
            Order Status
              
            </FormLabel>

            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="orderStatus"
              value={orderStatus}
              onChange={handleDataChange}
            >
              
              <FormControlLabel value="processing" control={<Radio />} label="Processing" />
              <FormControlLabel
                value="shipped"
                control={<Radio />}
                label="Shipped"
              />
              <FormControlLabel
                value="delivered"
                control={<Radio />}
                label="Delivered"
              />
            </RadioGroup>
          </FormControl>
          <FormControl fullWidth>
            <FormLabel id="demo-row-radio-buttons-group-label">
            Payment Status
              
            </FormLabel>

            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="paymentStatus"
              value={paymentStatus}
              onChange={handleDataChange}
            >
              
              <FormControlLabel value="COD" control={<Radio />} label="Cash On Delivery" />
              <FormControlLabel
                value="online"
                control={<Radio />}
                label="Online"
              />
             
            </RadioGroup>
          </FormControl>
          <FormControl
          fullWidth>
            <FormLabel id="demo-row-radio-buttons-group-label">
            Payment Mode
              
            </FormLabel>

            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="paymentMode"
              value={paymentMode}
              onChange={handleDataChange}
            >
              
              <FormControlLabel value="unpaid" control={<Radio />} label="Unpaid" />
              <FormControlLabel
                value="paid"
                control={<Radio />}
                label="Paid"
              />
             
            </RadioGroup>
          </FormControl>
       
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ fontWeight: "bold" }}>
            Cancel
          </Button>
          <Button onClick={updateOrderConfirm} sx={{ fontWeight: "bold" }}>
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
