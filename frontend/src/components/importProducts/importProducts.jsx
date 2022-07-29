import "./importProducts.css";

import { Avatar, Button, Stack, Typography } from "@mui/material";
import * as React from "react";
import { Link } from "react-router-dom";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import CustomerList from "../customerList/customerList";
import { useSnackbar } from "notistack";
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
import { UserContext } from "../../userContext";
import {
  getAllProductsForImport,
  getProductNameAndImage,
} from "../../controllers/productController";
import { createNewImportOrder } from "../../controllers/importOrderController";

// const categoryListDemo = [
//   "mobile",
//   "laptop",
//   "gaming console",
//   "headphone",
//   "webcam",
// ];
const label = { inputProps: { "aria-label": "Checkbox demo" } };

function ImportProducts() {
  const { enqueueSnackbar } = useSnackbar();
  const value = React.useContext(UserContext);
  console.log(value);
  const { categoryList } = value;

  const [products, setProducts] = useState(null);

  const [searchItem, setSearchItem] = useState("");
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [selectedProductImportQuantity, setSelectedProductImportQuantity] =
    useState(1);
  const [selectedProductCustomDuty, setSelectedProductCustomDuty] =
    useState("");
  const [selectedProductPrice, setSelectedProductPrice] = useState("");
  const [isProductCreateFormOpen, setIsProductFormOpen] = useState(false);
  const [selectedProductBarItem, setSelectedProductBarItem] = useState(null);

  const toggleProductForm = (e) => {
    setIsProductFormOpen(!isProductCreateFormOpen);
  };

  const changeSelectedProductImportQuantity = React.useCallback((newValue) => {
    setSelectedProductImportQuantity(newValue);
  }, []);

  const handleProductClick = (e) => {
    // console.log(e.currentTarget.getAttribute('productId'));
    setSelectedProductId(e.currentTarget.getAttribute("productId"));
    setSelectedProductCustomDuty(e.currentTarget.getAttribute("customDuty"));
    setSelectedProductPrice(e.currentTarget.getAttribute("price"));
    console.log(
      setSelectedProductCustomDuty(e.currentTarget.getAttribute("customDuty"))
    );
    console.log(selectedProductId);
  };

  const handleCategoryChange = (e) => {
    setActiveCategory(e.target.value);
  };
  const handleSearchItem = (e) => {
    setSearchItem(e.target.value);
  };

  const placeImportOrderClick = () => {
    const importOrderData = {
      quantity: selectedProductImportQuantity,
      productId: selectedProductId,
    };
    console.log(importOrderData);
    createNewImportOrder(importOrderData).then((data) => {
      console.log(data);
      if (data.sucess == true) {
        enqueueSnackbar("import order placed sucessfully", {
          variant: "success",
          autoHideDuration: 2000,
        });
        setSelectedProductImportQuantity(1);
        setSelectedProductId(null);
      } else {
        enqueueSnackbar(data.error, {
          variant: "error",
          autoHideDuration: 2000,
        });
      }
    });
  };

  useEffect(() => {
    getProductNameAndImage(selectedProductId).then((data) => {
      console.log(data);
     
        setSelectedProductBarItem(data[0]);
      
    });

    console.log(selectedProductId);
    setSelectedProductImportQuantity(1);
  }, [selectedProductId]);

  useEffect(() => {
    getAllProductsForImport().then((data) => {
      console.log(data);
      setProducts(data);
    });
  }, []);

  if (!products) {
    return <div>loding</div>;
  }
  return (
    <div className="import-products">
      {!isProductCreateFormOpen && (
        <div className="import-products-bar">
          {products.map((product) => {
            return (
              <div
                className="import-product-item"
                productId={product.productId}
                customDuty={product.customDuty}
                price={product.price}
                onClick={handleProductClick}
              >
                {selectedProductId == product.productId ? (
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
                  isSelected={
                    selectedProductId == product.productId ? true : false
                  }
                  changeSelectedProductImportQuantity={
                    changeSelectedProductImportQuantity
                  }
                  name={product.name}
                  brand={product.brand}
                  supplierId={product.supplierId}
                  productDescription={product.productDescription}
                  price={product.price}
                  image={product.productImage.image_url}
                />
              </div>
            );
          })}

          {/* <div
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
          </div> */}

          {/* <div
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
          </div> */}
        </div>
      )}

      {isProductCreateFormOpen && (
        <div className="create-product-form">
          <NewProductForm />
        </div>
      )}

      <div className="import-manage-bar">
        {!isProductCreateFormOpen && (
          <div>
            <div className="import-manage-top-bar">
              <FormControl fullWidth variant="filled">
                <SearchOutlinedIcon
                  sx={{ position: "absolute", bottom: "0px" }}
                />
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
                  sx={{
                    paddingLeft: "30px",
                    height: "25px",
                    paddingTop: "0px",
                  }}
                />
              </FormControl>

              <FormControl fullWidth variant="filled" sx={{ mt: 1 }}>
                <InputLabel id="demo-simple-select-filled-label">
                  Filter
                </InputLabel>
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
                    <MenuItem key={option.categoryId} value={option.name}>
                      {option.name}
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
              {selectedProductId && selectedProductBarItem && (
                <div className="selected-customer-info">
                  <div>
                    <Avatar
                      src={selectedProductBarItem.productImage.image_url}
                      sx={{ height: 60, width: 60 }}
                    ></Avatar>
                  </div>

                  <h5>{selectedProductBarItem.name}</h5>
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
                    @Price:<p>{selectedProductPrice}</p>
                  </div>
                  <div>
                    Custom duty:<p>{selectedProductCustomDuty}</p>
                  </div>

                  <div style={{ color: "green", fontWeight: "bold" }}>
                    Total Cost:
                    <p style={{ color: "green", fontWeight: "bold" }}>
                      NRs.
                      {(
                        selectedProductImportQuantity *
                        selectedProductPrice *
                        (1 + selectedProductCustomDuty / 100)
                      ).toFixed(0)}
                    </p>
                  </div>
                </div>
              )}

              <Button
                variant="contained"
                disabled={!selectedProductId}
                sx={{ backgroundColor: "orange", color: "black" }}
                onClick={placeImportOrderClick}
              >
                Import
              </Button>

              {selectedProductId && (
                <Link to={`/product/${selectedProductId}`} style={{ color: "blue" }}>
                  View Product History
                </Link>
              )}
            </div>
          </div>
        )}

        {isProductCreateFormOpen && (
          <div className="create-form-manage">
            <Button
              variant="contained"
              color="error"
              sx={{ letterSpacing: "5" }}
              onClick={toggleProductForm}
            >
              Cancel
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ImportProducts;
