import "./newProductForm.css";
import { resizeImageFile } from "../../utils/imageSizeReducer.js";

import { useState } from "react";

import * as React from "react";
import { Formik, useFormikContext } from "formik";

import Input from "@mui/material/Input";

import InputLabel from "@mui/material/InputLabel";

import FormControl from "@mui/material/FormControl";

import { Button, MenuItem, Select, TextareaAutosize } from "@mui/material";


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
  "Quark Technology Pvt. Ltd."
];
function NewProductForm() {
  const [imagePreview, setImagePreview] = useState(null);

  const [product, setProduct] = useState({
    name: "",
    brand: "",
    variant:"",
    category: "",
    supplier: "",
    price:"",
  });
  const { name, brand, category, supplier,variant ,price} = product;

  const handleDataChange = (e) => {
    e.preventDefault();
    console.log("done");
    if (e.target.name === "productImage") {
      const file = e.target.files[0];
      resizeImageFile(file).then((image) => {
        console.log(image);
        setImagePreview(image);
      });
    } else {
      console.log(e.target.name);
      setProduct({ ...product, [e.target.name]: e.target.value });
    }
  };

  const submitNewProductForm = (e) => {
    e.preventDefault();
    console.log("form submitted");
    console.log(product);
  };
  return (
    <div className="new-product-form">
      <form onSubmit={submitNewProductForm}>
        <FormControl
          fullWidth
          sx={{ marginTop: "20px", marginBottom: "20px" }}
          variant="standard"
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
        >
          <InputLabel htmlFor="standard-adornment-email">Brand</InputLabel>
          <Input
            id="standard-adornment-email"
            required
            name="brand"
            value={brand}
            onChange={handleDataChange}
          />
        </FormControl>
        <FormControl
            fullWidth
            sx={{ marginTop: "20px", marginBottom: "20px" }}
            variant="standard"
          >
            <InputLabel htmlFor="standard-adornment-email">Variant</InputLabel>
            <Input
              id="standard-adornment-email"
              required
              name="variant"
              value={variant}
              onChange={handleDataChange}
            />
          </FormControl>
        <FormControl
            fullWidth
            sx={{ marginTop: "20px", marginBottom: "20px" }}
            variant="standard"
          >
              <InputLabel id="demo-simple-select-standard-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={category}
          onChange={handleDataChange}
          name="category"
          label="Country"
          required
          sx={{textAlign:"left"}}
        >
         
         
           {categoryList.map((option) => (
            <MenuItem key={option} value={option}>{option}</MenuItem>
            ))}
         
         
        </Select>
          </FormControl>
          <FormControl
            fullWidth
            sx={{ marginTop: "20px", marginBottom: "20px" }}
            variant="standard"
          >
              <InputLabel id="demo-simple-select-standard-label">Supplier</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={supplier}
          onChange={handleDataChange}
          name="supplier"
          label="Supplier"
          required
          sx={{textAlign:"left"}}
        >
         
         
           {supplierList.map((option) => (
            <MenuItem key={option} value={option}>{option}</MenuItem>
            ))}
         
         
        </Select>
          </FormControl>

  

        <FormControl
          fullWidth
          sx={{ marginTop: "20px", marginBottom: "20px" }}
          variant="standard"
        >
          <InputLabel htmlFor="standard-adornment-name">Price(NRs)</InputLabel>
          <Input
            required
            type="number"
            inputProps={{
              min: 0,
              pattern: "[1-9]*",
            }}
            onInput={(e) => {
              e.target.validity.valid || (e.target.value ="");
            }}
            id="standard-adornment-name"
            name="price"
            value={price}
            onChange={handleDataChange}
          />
        </FormControl>
        <div id="product-image">
                  <img src={imagePreview} alt="product Preview" />
                  </div>
        <div id="register-image">
                 <input
                    type="file"
                    name="productImage"
                    accept="image/*"
                    required
                    onChange={handleDataChange}
                  />
                 </div>

        <div>
          <InputLabel
            htmlFor="standard-adornment-name"
            style={{ textAlign: "left" }}
          >
            Product details
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
              style={{ width: "100%", minHeight: "100px", fontSize: "16px" }}
            />
          </FormControl>
        </div>
        <div className="submit-btn">
          <Button type="submit" variant="contained" color="success">
            Add
          </Button>
        </div>
      </form>
    </div>
  );
}

export default NewProductForm;
