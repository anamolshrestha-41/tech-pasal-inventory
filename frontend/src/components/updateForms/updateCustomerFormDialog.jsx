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
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import FormLabel from "@mui/material/FormLabel";

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
const countryList = ["Nepal", "India", "Russia", "China", "Germany"];

export default function UpdateCustomerFormDialog(props) {
    const [value, setValue] = React.useState(null);
  const {
    customerToUpdateId,
    updateCustomer,
    updateConfirmationDialogOpen,
    setUpdateConfirmationDialogOpen,
    dialogTitle,
    dialogText,
  } = props;

  const [newCustomerData, setNewCustomerData] = React.useState({
    name: "",
    email: "",
    contactNo: "",
    state: "",
    city: "",
    street: "",
    customerType:"",
  });
  const { name, email, contactNo, state, city, street,customerType} =newCustomerData;

  const handleDataChange = (e) => {
    e.preventDefault();

    console.log(e.target.name);
    setNewCustomerData({ ...newCustomerData, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    setUpdateConfirmationDialogOpen(false);
  };

  const updateProductConfirm = () => {
    updateCustomer(customerToUpdateId, newCustomerData);
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
            <InputLabel htmlFor="standard-adornment-name">Name</InputLabel>
            <Input
              required
              id="standard-adornment-name"
              value={name}
              name="name"
              onChange={handleDataChange}
            />
          </FormControl>
      
     

          <FormControl
            fullWidth
            sx={{ marginTop: "20px", marginBottom: "20px" }}
            variant="standard"
          >
            <InputLabel htmlFor="standard-adornment-email">Email</InputLabel>
            <Input
              id="standard-adornment-email"
              required
              value={email}
              name="email"
              onChange={handleDataChange}
            />
          </FormControl>

          <FormControl
            sx={{
              marginTop: "20px",
              marginBottom: "20px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
            variant="standard"
          >
            <TextField
              id="standard-basic"
              label="State"
              required
              variant="standard"
              value={state}
              name="state"
              onChange={handleDataChange}
            />
            <TextField
              id="standard-basic"
              required
              label="City"
              variant="standard"
              value={city}
              name="city"
              onChange={handleDataChange}
            />
            
          </FormControl>

          <FormControl
            sx={{
              marginTop: "20px",
              marginBottom: "20px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
            variant="standard"
          >
            <TextField
              id="standard-basic"
              required
              label="Street"
              variant="standard"
              value={street}
              name="street"
              onChange={handleDataChange}
            />
            <TextField
              type={`number`}
              min="0"
              id="standard-basic"
              label="Contact No"
              variant="standard"
              required
              value={contactNo}
              name="contactNo"
              onChange={handleDataChange}
            />
          </FormControl>

          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
            Customer Type
              
            </FormLabel>

            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="customerType"
              value={customerType}
              onChange={handleDataChange}
             
            >
              <FormControlLabel
                value="individual"
                control={<Radio />}
                label="Individual"
              />
              <FormControlLabel value="company" control={<Radio />} label="Company" />
             
            </RadioGroup>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ fontWeight: "bold" }}>
            Cancel
          </Button>
          <Button onClick={updateProductConfirm} sx={{ fontWeight: "bold" }}>
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
