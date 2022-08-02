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


const categoryLists= [
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

export default function UpdateProductFormDialog(props) {
  const value=React.useContext(UserContext);
  const {categoryList}=value;
  const {supplierList}=value;

  const {
    productToUpdateId,
    updateProduct,
    updateConfirmationDialogOpen,
    setUpdateConfirmationDialogOpen,
    dialogTitle,
    dialogText,
  } = props;

  const [newProductData, setNewProductData] = React.useState({
    name: "",
    brand: "",
    category: "",
    supplier:"",
    price: "",
    stock: "",
    productStatus: "",
    productDescription: "",
  });
  const {
    name,
    brand,
    category,
    supplier,
    variant,
    stock,
    price,
    productStatus,
    productDescription,
  } = newProductData;

  const handleDataChange = (e) => {
    e.preventDefault();

    console.log(e.target.name);
    setNewProductData({ ...newProductData, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    setUpdateConfirmationDialogOpen(false);
  };

  const updateProductConfirm = () => {
    updateProduct(productToUpdateId, newProductData);
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
            <InputLabel id="demo-simple-select-standard-label">
              Category
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={category}
              onChange={handleDataChange}
              name="category"
              label="Country"
              required
              sx={{ textAlign: "left" }}
            >
              {categoryList.map((option) => (
            <MenuItem key={option.categoryId} value={option.name}>{option.name}</MenuItem>
            ))}
            </Select>
          </FormControl>
          {/* <FormControl
            fullWidth
            sx={{ marginTop: "20px", marginBottom: "20px" }}
            variant="standard"
          >
            <InputLabel id="demo-simple-select-standard-label">
              Supplier
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={supplier}
              onChange={handleDataChange}
              name="supplier"
              label="Supplier"
              required
              sx={{ textAlign: "left" }}
            >
              {supplierList.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl> */}

          <FormControl
            fullWidth
            sx={{ marginTop: "20px", marginBottom: "20px" }}
            variant="standard"
          >
            <InputLabel htmlFor="standard-adornment-name">
              Stock
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
              name="stock"
              value={stock}
              onChange={handleDataChange}
            />
          </FormControl>
          <FormControl
            fullWidth
            sx={{ marginTop: "20px", marginBottom: "20px" }}
            variant="standard"
          >
            <InputLabel htmlFor="standard-adornment-name">
              Price(NRs)
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
              name="price"
              value={price}
              onChange={handleDataChange}
            />
          </FormControl>

          <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Product Status</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="Published" control={<Radio name="productStatus" value="published" checked={productStatus=="published"?true:false} onChange={handleDataChange} />} label="Published" />
        <FormControlLabel value="Unpublished" control={<Radio  name="productStatus" value="unpublished" checked={productStatus=="unpublished"?true:false} onChange={handleDataChange}  />} label="Unpublished" />
        <FormControlLabel value="Deleted" control={<Radio  name="productStatus" value="deleted" checked={productStatus=="deleted"?true:false} onChange={handleDataChange}  />} label="Deleted" />
        
      </RadioGroup>
    </FormControl>
    <div>
            <InputLabel
              htmlFor="standard-adornment-name"
              style={{ textAlign: "left" }}
            >
              Product Description
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
                value={productDescription}
                name="productDescription"
                onChange={handleDataChange}
                style={{ width: "100%", minHeight: "100px", fontSize: "16px" }}
              />
            </FormControl>
          </div>

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
