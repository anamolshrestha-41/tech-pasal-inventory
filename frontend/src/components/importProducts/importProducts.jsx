import "./importProducts.css";

import { Avatar, Button, Stack, Typography } from "@mui/material";
import * as React from "react";
import { Link } from "react-router-dom";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import CustomerList from "../customerList/customerList";

import customerImage from "../../demo/customerImage.jpg";
import productImage from "../../demo/productImage.jpg";

import Delete from "@mui/icons-material/Delete";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import SettingsIcon from "@mui/icons-material/Settings";
import BlockIcon from "@mui/icons-material/Block";

import {
  Fab,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import { useState } from "react";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useRef } from "react";
import { useEffect } from "react";
import ProductList from "../productList/productList";
import NewProductForm from "../newProductForm/newProductForm";

const categoryList = [
  "mobile",
  "laptop",
  "gaming console",
  "headphone",
  "webcam",
];
const label = { inputProps: { "aria-label": "Checkbox demo" } };

function ImportProducts() {
  const [searchItem, setSearchItem] = useState("");
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [selectedProductImportQuantity, setSelectedProductImportQuantity] =
    useState(1);
  const [isProductCreateFormOpen, setIsProductFormOpen] = useState(false);

  const toggleProductForm = (e) => {
    setIsProductFormOpen(!isProductCreateFormOpen);
  };

  const changeSelectedProductImportQuantity = React.useCallback((newValue) => {
    setSelectedProductImportQuantity(newValue);
  }, []);

  const handleProductClick = (e) => {
    // console.log(e.currentTarget.getAttribute('productId'));
    setSelectedProductId(e.currentTarget.getAttribute("productId"));
  };

  const handleCategoryChange = (e) => {
    setActiveCategory(e.target.value);
  };
  const handleSearchItem = (e) => {
    setSearchItem(e.target.value);
  };

  useEffect(() => {
    console.log(selectedProductId);
    setSelectedProductImportQuantity(1);
  }, [selectedProductId]);
  return (
    <div className="import-products">
      {!isProductCreateFormOpen && (
        <div className="import-products-bar">
          <div
            className="import-product-item"
            productId={1}
            onClick={handleProductClick}
          >
            {selectedProductId == 1 ? (
              <Checkbox
                {...label}
                checked
                color="success"
                sx={{ position: "absolute", left: 0 }}
              />
            ) : (
              ""
            )}

            <ProductList
              isSelected={selectedProductId ? true : false}
              changeSelectedProductImportQuantity={
                changeSelectedProductImportQuantity
              }
            />
          </div>
          <div
            className="import-product-item"
            productId={2}
            onClick={handleProductClick}
          >
            {selectedProductId == 2 ? (
              <Checkbox
                {...label}
                checked
                color="success"
                sx={{ position: "absolute", left: 0 }}
              />
            ) : (
              ""
            )}

            <ProductList
              isSelected={selectedProductId ? true : false}
              changeSelectedProductImportQuantity={
                changeSelectedProductImportQuantity
              }
            />
          </div>
          <div
            className="import-product-item"
            productId={3}
            onClick={handleProductClick}
          >
            {selectedProductId == 3 ? (
              <Checkbox
                {...label}
                checked
                color="success"
                sx={{ position: "absolute", left: 0 }}
              />
            ) : (
              ""
            )}

            <ProductList
              isSelected={selectedProductId ? true : false}
              changeSelectedProductImportQuantity={
                changeSelectedProductImportQuantity
              }
            />
          </div>
          <div
            className="import-product-item"
            productId={4}
            onClick={handleProductClick}
          >
            {selectedProductId == 4 ? (
              <Checkbox
                {...label}
                checked
                color="success"
                sx={{ position: "absolute", left: 0 }}
              />
            ) : (
              ""
            )}

            <ProductList
              isSelected={selectedProductId ? true : false}
              changeSelectedProductImportQuantity={
                changeSelectedProductImportQuantity
              }
            />
          </div>
        </div>
      )}

      {isProductCreateFormOpen && (
        <div className="create-product-form">
        <NewProductForm/>
        </div>
      )}

      <div className="import-manage-bar">

        {
          !isProductCreateFormOpen &&  <div>
          <div className="import-manage-top-bar">
            <FormControl fullWidth variant="filled">
              <SearchOutlinedIcon sx={{ position: "absolute", bottom: "0px" }} />
              <InputLabel
                htmlFor="standard-adornment-name"
                sx={{ paddingLeft: "30px", fontSize: "16px" }}
              >
                {" "}
                {!searchItem && "Search"}
              </InputLabel>
              <Input
                required
                id="standard-adornment-name"
                value={searchItem}
                onChange={handleSearchItem}
                sx={{ paddingLeft: "30px", height: "25px", paddingTop: "0px" }}
              />
            </FormControl>
  
            <FormControl fullWidth variant="filled" sx={{ mt: 1 }}>
              <InputLabel id="demo-simple-select-filled-label">Filter</InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                MenuProps={{ disableScrollLock: true }}
                sx={{
                  "& .MuiSelect-select": {
                    paddingTop: 1,
                    paddingBottom: 1,
                  },
                }}
                value={activeCategory}
                onChange={handleCategoryChange}
              >
                <MenuItem value="All">
                  <em>All</em>
                </MenuItem>
                {categoryList.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="import-product-manage-bar">
              <Button
                variant="contained"
                sx={{ letterSpacing: "5" }}
                onClick={toggleProductForm}
              >
                Create product
              </Button>
              <h3>Place Order</h3>
              {selectedProductId && (
                <div className="selected-customer-info">
                  {" "}
                  <div>
                    <Avatar
                      src={productImage}
                      sx={{ height: 60, width: 60 }}
                    ></Avatar>
                  </div>
                  <h5>Samsung F22</h5>
                </div>
              )}
              {!selectedProductId && (
                <p>Select the product to place import order</p>
              )}
              {selectedProductId && (
                <div className="selected-import-product-details">
                  <div>
                    Quantity:<p>{selectedProductImportQuantity}</p>
                  </div>
                  <div>
                    @Price:<p>NRs.100000</p>
                  </div>
                  <div>
                    Custom duty:<p>100000</p>
                  </div>
                 
                  <div style={{ color: "green", fontWeight: "bold" }}>
                    Total Cost:
                    <p style={{ color: "green", fontWeight: "bold" }}>
                      NRs.5000000
                    </p>
                  </div>
                </div>
              )}
  
              <Button
                variant="contained"
                
                disabled={!selectedProductId}
                sx={{ backgroundColor: "orange", color: "black" }}
              >
                Import
              </Button>
  
              {selectedProductId && (
                <Link to={`/product/productId`} style={{ color: "blue" }}>
                  View Product History
                </Link>
              )}
            </div>
          </div>
        }
       
       
       

        {
          isProductCreateFormOpen && <div className="create-form-manage">
             <Button
              variant="contained"
              color="error"
              sx={{ letterSpacing: "5" }}
              onClick={toggleProductForm}
            >
              Cancel
            </Button>
          </div>
        }
      </div>
    </div>
  );
}

export default ImportProducts;
