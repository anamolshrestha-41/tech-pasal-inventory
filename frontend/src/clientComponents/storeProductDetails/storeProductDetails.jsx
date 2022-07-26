import "./storeProductDetails.css";

import customerImage from "../../demo/customerImage.jpg";
import productImage from "../../demo/productImage.jpg";
import supplierImage from "../../demo/supplierLogo.png";

import {
  Avatar,
  Button,
  ButtonGroup,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import SettingsIcon from "@mui/icons-material/Settings";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function StoreProductDetails() {
  const [importQuantity, setImportQuantity] = useState(1);

  const handleUpdateImportQuantity = (e, update) => {
    e.stopPropagation();
    if (
      (update == -1 && importQuantity > 1) ||
      (update == 1 && importQuantity < 100)
    ) {
      setImportQuantity(importQuantity + update);
    }

    console.log(importQuantity);
  };

  return (
    <div className="store-product-details">
      <div className="product-information-bar">
        <div className="product-information">
          <div className="product-description">
            <div className="product-full-details">
              <h3>Samsung F22</h3>

              <div>
                Brand:<p>Samsung</p>
              </div>
              <div>
                Category:<p>mobile</p>
              </div>
              <div>
                Variant:<p>black</p>
              </div>

              <div>
                Price:<p>100000</p>
              </div>

              <div>
                Stock:<p>In Stock</p>
              </div>

              <div className="product-description-material">
                <h6> Description:</h6>

                <ul>
                  <li>
                    Weight:<p>2kg</p>
                  </li>
                  <li>
                    Screen:<p>90hz</p>
                  </li>
                  <li>
                    Processor:<p>Heloo G80</p>
                  </li>
                  <li>
                    Camera:
                    <p>48Mp Main Camera,2MP Micro,2MP Macro,8MP front camera</p>
                  </li>
                </ul>
                <div></div>
              </div>
            </div>
            <div className="product-image">
              <div>
                <img src={productImage} alt="productImage" />
              </div>
            </div>
          </div>
        </div>
        <div className="product-supplier-info">
          <div className="supplier-profile-view">
            <h3>Buy</h3>
            <h4>Quantity</h4>

            <div className="product-quantity-import">
              <ButtonGroup
                orientation="vertical"
                size="medium"
                aria-label="small outlined button group"
                sx={{ width: 60 }}
              >
                <Button
                  onClick={(e) => {
                    handleUpdateImportQuantity(e, 1);
                  }}
                  sx={{ fontSize: "25px", padding: "0px" }}
                >
                  +
                </Button>
                <TextField
                  type="number"
                  sx={{ input: { textAlign: "center" } }}
                  inputProps={{
                    min: 0,
                    max: 100,
                    pattern: "[1-9]*",
                  }}
                  onInput={(e) => {
                    e.target.validity.valid || (e.target.value = 100);
                  }}
                  value={importQuantity}
                  onChange={(e) => setImportQuantity(parseInt(e.target.value))}
                />
                <Button
                  onClick={(e) => {
                    handleUpdateImportQuantity(e, -1);
                  }}
                  sx={{ fontSize: "25px", padding: "0px" }}
                >
                  -
                </Button>
              </ButtonGroup>
            </div>
            
            {/* <div className="customer-shipping-address">
            <h5>
              Shipping Address
            </h5>
            <Button>  <EditOutlinedIcon /> </Button>
            </div>
            <div >epatole,sankhu,kathmandu</div> */}
          </div>
          <Divider variant="middle" />
          <div className="selected-import-product-details">
            <div>
              Quantity:<p>{importQuantity}</p>
            </div>
            <div>
              Price:<p>NRs.100000</p>
            </div>
            <div>
              VAT:<p>100000</p>
            </div>

            <div style={{ color: "green", fontWeight: "bold" }}>
              Total Cost:
              <p style={{ color: "green", fontWeight: "bold" }}>NRs.5000000</p>
            </div>
          </div>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "orange",
              color: "black",
              width: "200px",
              margin: "10px",
            }}
          >
            Import
          </Button>
        </div>
      </div>
    </div>
  );
}

export default StoreProductDetails;
