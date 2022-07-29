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
import { resizeImageFile } from "../../utils/imageSizeReducer";
import { addSupplier } from "../../controllers/supplierController";
import { useSnackbar } from 'notistack';
const countryList = ["Nepal", "India", "Russia", "China", "Germany"];

function NewSupplierForm() {
  const { enqueueSnackbar} = useSnackbar();
  const [imagePreview, setImagePreview] = useState("");
  const [values, setValues] = useState({
    name: "",
    country: "",
    email: "",
    contactNo: "",
    state: "",
    city: "",
    street: "",
    pinCode: "",
    poBox: "",
    supplierDetails: "",
    supplierImage:imagePreview
  });
  const {
    name,
    country,
    email,
    contactNo,
    state,
    city,
    street,
    pinCode,
    poBox,
    supplierDetails,
    supplierImage
  } = values;

  const handleDataChange = (e) => {
    e.preventDefault();
    console.log("done");
    if (e.target.name === "supplierImage") {
      const file = e.target.files[0];
      resizeImageFile(file).then((image) => {
        console.log(image);
        console.log("mdmdmd");
        setImagePreview(image);
        setValues({ ...values,supplierImage:image});
      });
    } else {
      console.log(e.target.name);
      setValues({ ...values, [e.target.name]: e.target.value });
    }
  };

  const submitNewSupplierForm = (e) => {
    e.preventDefault();
    console.log("form submitted");
  addSupplier(values).then(data=>{
    if (data.sucess==true) {
      enqueueSnackbar(data.message,{variant:"success",autoHideDuration:2000});
      setValues({
        name: "",
        country: "",
        email: "",
        contactNo: "",
        state: "",
        city: "",
        street: "",
        pinCode: "",
        poBox: "",
        supplierDetails: "",
        supplierImage:""
      });
      setImagePreview(null);
     
    }else{
      enqueueSnackbar("supplier must be unique",{variant:"error",autoHideDuration:2000});
    }
  })
  };

  return (
    <div className="supplier-form">
      <form onSubmit={submitNewSupplierForm}>
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
            name='name'
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
            name='email'
            onChange={handleDataChange}
          />
        </FormControl>
        <FormControl
          fullWidth
          sx={{ marginTop: "20px", marginBottom: "20px" }}
          variant="standard"
        >
          <InputLabel id="demo-simple-select-standard-label">
            Country
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={country}
            onChange={handleDataChange}
            label="Country"
            name="country"
            required
            sx={{ textAlign: "left" }}
          >
            {countryList.map((option) => {
              return (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              );
            })}
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
            name='state'
            onChange={handleDataChange}
          />
          <TextField
            id="standard-basic"
            required
            label="City"
            variant="standard"
            value={city}
            name='city'
            onChange={handleDataChange}
          />
          <TextField
            id="standard-basic"
            required
            label="Street"
            variant="standard"
            value={street}
            name='street'
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
            type={`number`}
            min="0"
            id="standard-basic"
            label="Contact No"
            variant="standard"
            required
            name='contactNo'
            value={contactNo}
            onChange={handleDataChange}
          />
          <TextField
            type={`number`}
            min="0"
            id="standard-basic"
            label="Pin Code"
            variant="standard"
            required
            value={pinCode}
            name='pinCode'
            onChange={handleDataChange}
          />
          <TextField
            id="standard-basic"
            label="P.O Box"
            variant="standard"
            required
            value={poBox}
            name="poBox"
            onChange={handleDataChange}
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
              name="supplierDetails"
              value={supplierDetails}
              onChange={handleDataChange}
              style={{ width: "100%", minHeight: "100px", fontSize: "16px" }}
            />
          </FormControl>
        </div>

        <div>
          <div id="supplier-image">
            <img src={imagePreview} alt="product Preview" />
          </div>
          <div id="supplier-register-image">
            <input
              type="file"
              name="supplierImage"
              accept="image/*"
              required
              onChange={handleDataChange}
            />
          </div>
        </div>

        <div></div>
        <div className="submit-btn">
          <Button type="submit" variant="contained" color="success">
            Add
          </Button>
        </div>
      </form>
    </div>
  );
}

export default NewSupplierForm;
