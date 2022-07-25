import "./productDetails.css";

import customerImage from "../../demo/customerImage.jpg";
import productImage from "../../demo/productImage.jpg";
import supplierImage from "../../demo/supplierLogo.png";

import { Avatar, Button, Divider, Stack, Typography } from "@mui/material";
import OrdersTable from "../tables/orderTable";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import CustomerOrderTable from "../tables/customerOrderTable";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SalesProductTable from "../tables/salesProductTable";
import DeleteConfirmationDialogModal from "../deleteConfirmationDialogModal/deleteConfirmationDialogModal";
import UpdateProductFormDialog from "../updateForms/updateProductFormDialog";

function ProductDetails() {
  const [deleteConfirmationDialogOpen, setDeleteConfirmationDialogOpen] =
    useState(false);
    const[updateConfirmationDialogOpen,setUpdateConfirmationDialogOpen]=useState(false);

 

  const handleDeleteProductConfirmation = () => {

    // change state of dialog modal
    setDeleteConfirmationDialogOpen(true);
  };


  const deleteProduct=(productId)=>{
    // delete product fuction
    console.log("product deleted",productId);
  }


  const handleOnUpdateProduct = () => {
   setUpdateConfirmationDialogOpen(true);
  };

  const updateProduct=(productId,newProductData)=>{
    console.log(productId,"data:",newProductData);
  }

  return (
    <div className="product-details">
      <div className="product-information-bar">
        <div className="product-information">
          <div className="product-description">
            <div className="product-full-details">
              <h3>#123</h3>
              <div>Samsung F22</div>
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
                @Price:<p>100000</p>
              </div>

              <div>
                Stock:<p>500</p>
              </div>
              <div>
                Product Status:<p>Published</p>
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
            <Avatar sx={{ width: 150, height: 150 }} src={supplierImage} />
            <h4>Autocad Technology Pvt. Ltd</h4>
            <h5>autocadtech@gmail.com</h5>
            <Link to={`/Supplier/123`} style={{ color: "blue" }}>
              View supplier details
            </Link>
          </div>
          <Divider variant="middle" />

          <Divider variant="middle" />
          <div className="product-account-update">
            <h3>
              <SettingsIcon />
              Manage
            </h3>
            <Button variant="contained" onClick={handleOnUpdateProduct}>
              Update
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={handleDeleteProductConfirmation}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>

      <div className="product-import-details">
        <h3>Import Details</h3>
        <div>
          @Custom Duty:<p>14%</p>
        </div>
        <div>
          Import Quantity:<p>5000</p>
        </div>
        <div>
          Order Date:<p>2078-4-30</p>
        </div>
        <div>
          Delivered Date:<p>2078-6-30</p>
        </div>
        <div style={{ color: "green", fontWeight: "bold" }}>
          Total Cost:
          <p style={{ color: "green", fontWeight: "bold" }}>NRs.50000000</p>
        </div>
      </div>
      <div className="product-sales-details">
        <h3>Sales Details</h3>
        <SalesProductTable />
      </div>

<div>
  {/* update product form */}
  <UpdateProductFormDialog
  productToUpdateId={`123`}
  updateConfirmationDialogOpen={updateConfirmationDialogOpen}
  setUpdateConfirmationDialogOpen={setUpdateConfirmationDialogOpen}
  updateProduct={updateProduct}
  dialogTitle={`Update Product`}
  dialogText={`Fill the data to update `}
  />
</div>

      <div >
      {/* dialog for deleteconfirmaton */}
        <DeleteConfirmationDialogModal
         deletionId={`123`}
          deleteConfirmationDialogOpen={deleteConfirmationDialogOpen}
          setDeleteConfirmationDialogOpen={setDeleteConfirmationDialogOpen}
          deleteConfirmed={deleteProduct}
          deleteConfirmationTitle={`Do you want to Delete this product?`}
          deleteConfirmationText={`Are you sure! If you delete this product.It will be permanently removed and this cannot be undone`}
        />
      </div>
    </div>
  );
}

export default ProductDetails;
