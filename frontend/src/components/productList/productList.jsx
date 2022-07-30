import "./productList.css";

import productImage from "../../demo/productImage.jpg";
import supplierImage from "../../demo/supplierLogo.png";
import { Avatar, Button, ButtonGroup, Divider, TextField } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { getSupplierNameAndImage } from "../../controllers/supplierController";

function ProductList(props) {

  const {isSelected,changeSelectedProductImportQuantity,
  name,
  brand,
  price,
  supplierId,
  productDescription,
  image

  }=props;
  const [importQuantity, setImportQuantity] = useState(1);
  const [supplier,setSupplier]=useState(null);

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
    getSupplierNameAndImage(supplierId).then(data=>{
      console.log(data);
      setSupplier(data[0]);
    })
setImportQuantity(1);
  },[isSelected])

  if(!supplier){
    return <div>loadig</div>
  }

  return (
    <div className="product-list">
      <div className="product-list-image">
        <img src={image} alt="" />
      </div>
      <Divider orientation="vertical" variant="middle" flexItem />

      <div className="product-list-description">
        <h3>{name}</h3>
        <div className="product-list-brand">
          Brand :<p>{brand}</p>
        </div>
        <div className="product-supplier-list">
      
          <Avatar src={ supplier.supplierImage.image_url}/>
          <p> {supplier.name}</p>
      
        </div>

        <div className="product-list-price">
          Rs.
          <p>{price}</p>
        </div>
      </div>
      <Divider orientation="vertical" variant="middle" flexItem />
      <div className="product-details-import">
        
       {productDescription}
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
