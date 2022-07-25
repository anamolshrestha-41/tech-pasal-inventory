import { useState } from "react";
import "./newSupplierFrom.css";

import * as React from "react";
import { Formik, useFormikContext } from "formik";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Button, MenuItem, Select, TextareaAutosize } from "@mui/material";
import { ScrollToError } from "../errorhandlers/scrollToErrorForm";

const countryList = ["Nepal", "India", "Russia", "China", "Germany"];

function NewSupplierForm() {
  const [values, setValues] = useState({
    name: "",
    country: "",
    email: "",
    contactNo:"",
    state: "",
    city: "",
    street: "",
    pinCode: "",
    poBox: "",
    details: "",
  });
  const { name, country, email,contactNo, state, city, street, pinCode, poBox, details } =
    values;

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const submitNewSupplierForm = (e) => {
 
    e.preventDefault();
    console.log("form submitted");
    console.log(values);
    
  };

  return (
    <div className="supplier-form">
  
        <form  onSubmit={submitNewSupplierForm} >
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
              onChange={handleChange("name")}
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
              onChange={handleChange("email")}
            />
          </FormControl>
          <FormControl
            fullWidth
            sx={{ marginTop: "20px", marginBottom: "20px" }}
            variant="standard"
          >
              <InputLabel id="demo-simple-select-standard-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={country}
          onChange={handleChange("country")}
          label="Country"
          required
          sx={{textAlign:"left"}}
        >
         
          {
            countryList.map(option=>{
              return  <MenuItem key={option} value={option}>{option}</MenuItem>
            })
          }
         
         
        </Select>
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
              onChange={handleChange("state")}
            />
            <TextField
              id="standard-basic"
              required
              label="City"
              variant="standard"
              value={city}
              onChange={handleChange("city")}
            />
            <TextField
              id="standard-basic"
              required
              label="Street"
              variant="standard"
              value={street}
              onChange={handleChange("street")}
            />
          </FormControl>

          <FormControl
            sx={{
              marginTop: "20px",
              marginBottom: "20px",
              display: "flex",
              flexDirection: "row",
                justifyContent:"space-between"
            }}
            variant="standard"
          >
             <TextField
              type={`number`}
              min="0"
              id="standard-basic"
              label="Contact No"
              variant="standard"
              required
              value={contactNo}
              onChange={handleChange("contactNo")}
            />
            <TextField
              type={`number`}
              min="0"
              id="standard-basic"
              label="Pin Code"
              variant="standard"
              required
              value={pinCode}
              onChange={handleChange("pinCode")}
            />
            <TextField
              id="standard-basic"
              label="P.O Box"
              variant="standard"
              required
              value={poBox}
              onChange={handleChange("poBox")}
            />
          </FormControl>

          <div>
            <InputLabel
              htmlFor="standard-adornment-name"
              style={{ textAlign: "left" }}
            >
              Supplier details
            </InputLabel>
            <FormControl
              fullWidth
              sx={{ marginTop: "0px", marginBottom: "20px" }}
              variant="standard"
            >
              <TextareaAutosize
                aria-label="empty textarea"
                required
                placeholder="Empty"
                value={details}
                onChange={handleChange("details")}
                style={{ width: "100%", minHeight: "100px", fontSize: "16px" }}
              />
            </FormControl>
          </div>
          <div className="submit-btn">
            <Button type="submit"  variant="contained" color="success">
              Add
            </Button>
          </div>
        
        </form>
        
     
    </div>
  );
}

export default NewSupplierForm;
