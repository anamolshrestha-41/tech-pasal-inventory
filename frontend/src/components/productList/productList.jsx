import "./productList.css";

import productImage from "../../demo/productImage.jpg";
import supplierImage from "../../demo/supplierLogo.png";
import { Avatar, Button, ButtonGroup, Divider, TextField } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";

function ProductList({ isSelected,changeSelectedProductImportQuantity}) {
  const [importQuantity, setImportQuantity] = useState(1);

  const handleUpdateImportQuantity = (e, update) => {
    e.stopPropagation();
    if (
      (update == -1 && importQuantity > 1) ||
      (update == 1 && importQuantity < 100)
    ) {
     // changing state of parent
      changeSelectedProductImportQuantity(importQuantity+update);
      setImportQuantity(importQuantity + update);
    }

    console.log(importQuantity);
   
  };
  useEffect(()=>{
    
setImportQuantity(1);
  },[isSelected])

  return (
    <div className="product-list">
      <div className="product-list-image">
        <img src={productImage} alt="" />
      </div>
      <Divider orientation="vertical" variant="middle" flexItem />

      <div className="product-list-description">
        <h3>Samsung F22</h3>
        <div className="product-list-brand">
          Brand :<p>samsumg</p>
        </div>
        <div className="product-supplier-list">
      
          <Avatar src={supplierImage}/>
          <p>    AutoCad Technology Pvt. Ltd</p>
      
        </div>

        <div className="product-list-price">
          Rs.
          <p>100000</p>
        </div>
      </div>
      <Divider orientation="vertical" variant="middle" flexItem />
      <div className="product-details-import">
        <div>
          {" "}
          Weight:<p>0.75kg</p>
        </div>
        <div>
          {" "}
          Screen:<p>14inch</p>
        </div>
        <div>
          {" "}
          Display:<p>720p</p>
        </div>
        <div>
          Camera:<p>48MP main camera,2MP micro,2MP macro,8MP front cammera</p>
        </div>
        <div>
          {" "}
          Processor:<p>helio G80 </p>
        </div>
        <div>
          {" "}
          Charging:<p>35W (fast charging) </p>
        </div>
        <div>
          {" "}
          Security:<p>fingerprint,face lock </p>
        </div>
        <div>
          {" "}
          Screen refresh rate:<p>90hz </p>
        </div>
      </div>
      <Divider orientation="vertical" variant="middle" flexItem />
      <div className="product-quantity-import">
        <ButtonGroup
          disabled={!isSelected}
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
    </div>
  );
}

export default ProductList;
