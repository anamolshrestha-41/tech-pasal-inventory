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
import { UserContext } from "../../userContext";
import { createNewCategory } from "../../controllers/categoryController";


import { useSnackbar } from "notistack";

export default function CreateNewCategoryForm(props) {
    const { enqueueSnackbar } = useSnackbar();

  const {
 
   isUpdate,
   setIsUpdate,
    createConfirmationDialogOpen,
   setCreateConfirmationDialogOpen,
   setCategoryList

  } = props;

  const [newCategory,setNewCategory] = React.useState({
    name: "",
   profit:"",
   vat:"",
   customDuty:""
  });

  const {
    name,
   profit,
   vat,
   customDuty
  } = newCategory;

  const handleDataChange = (e) => {
    e.preventDefault();

    console.log(e.target.name);
    setNewCategory({ ...newCategory, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
   setCreateConfirmationDialogOpen(false);
  };

  const updateProductConfirm = () => {
    // updateProduct(productToUpdateId, newCategory);
    createNewCategory(newCategory).then(data=>{
        console.log(data);
       
            if (data.sucess == true) {
              enqueueSnackbar(data.message, {
                variant: "success",
                autoHideDuration: 2000,

              });
              setIsUpdate(!isUpdate);
              setCategoryList([]);
            } else {
              enqueueSnackbar("fill the field properly! donot leave empty category already existed", {
                variant: "error",
                autoHideDuration: 2000,
              });
            
            }
    })
    console.log(newCategory);
    console.log("created");
    handleClose();
  };

  return (
    <div>
       
      <Dialog
        open={createConfirmationDialogOpen}
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
        <DialogTitle>`Create New Category`</DialogTitle>
        <DialogContent>
          <DialogContentText>Fill your business margin for this category</DialogContentText>
          <FormControl
            fullWidth
            sx={{ marginTop: "20px", marginBottom: "20px" }}
            variant="standard"
            required
          >
            <InputLabel htmlFor="standard-adornment-name">Name</InputLabel>
            <Input
              required
              id="standard-adornment-name"
              
              name="name"
              value={name}
              onChange={handleDataChange}
            />
          </FormControl>

     
       

      
        

          <FormControl
            fullWidth
            sx={{ marginTop: "20px", marginBottom: "20px" }}
            variant="standard"
            required
          >
            <InputLabel htmlFor="standard-adornment-name">
              Custom Duty(%)
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
              name="customDuty"
              value={customDuty}
              onChange={handleDataChange}
            />
          </FormControl>
          <FormControl
            fullWidth
            sx={{ marginTop: "20px", marginBottom: "20px" }}
            variant="standard"
            required
          >
            <InputLabel htmlFor="standard-adornment-name">
              VAT(%)
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
              name="vat"
              value={vat}
              onChange={handleDataChange}
            />
          </FormControl>
          <FormControl
            fullWidth
            sx={{ marginTop: "20px", marginBottom: "20px" }}
            variant="standard"
            required
          >
            <InputLabel htmlFor="standard-adornment-name">
              Profit(%)
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
              name="profit"
              value={profit}
              onChange={handleDataChange}
            />
          </FormControl>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ fontWeight: "bold" }}>
            Cancel
          </Button>
          <Button onClick={updateProductConfirm} sx={{ fontWeight: "bold" }}>
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
