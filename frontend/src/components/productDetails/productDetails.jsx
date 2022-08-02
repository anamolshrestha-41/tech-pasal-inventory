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
import { Link,useParams } from "react-router-dom";
import SalesProductTable from "../tables/salesProductTable";
import DeleteConfirmationDialogModal from "../deleteConfirmationDialogModal/deleteConfirmationDialogModal";
import UpdateProductFormDialog from "../updateForms/updateProductFormDialog";
import { useSnackbar } from "notistack";
import { deleteProductByStatus, getCompleteProductDetails, updateProductDetails } from "../../controllers/productController";

function ProductDetails() {

  const { enqueueSnackbar } = useSnackbar();
  const {productId}=useParams();
  const [productData, setProductData] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);

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
    deleteProductByStatus(productId).then(data=>{
      console.log(data);
      if (data.sucess == true) {
        enqueueSnackbar("product deleted sucessffully", {
          variant: "success",
          autoHideDuration: 2000,
        });
      } else {
        enqueueSnackbar(data.error, {
          variant: "error",
          autoHideDuration: 2000,
        });
      }
      setIsUpdate(!isUpdate);
    });
  }


  const handleOnUpdateProduct = () => {
   setUpdateConfirmationDialogOpen(true);
  };

  const updateProduct=(productId,newProductData)=>{
    console.log(productId,"data:",newProductData);
    updateProductDetails(productId, newProductData).then((data) => {
      console.log(data);
      if (data.sucess == true) {
        enqueueSnackbar(data.message, {
          variant: "success",
          autoHideDuration: 2000,
        });
      } else {
        enqueueSnackbar(data.error, {
          variant: "error",
          autoHideDuration: 2000,
        });
      }
      setIsUpdate(!isUpdate);
    });
  }

  useEffect(() => {
    getCompleteProductDetails(productId).then((data) => {
      console.log(data);
      setProductData(data[0]);
    });
  }, [isUpdate]);

  if (!productData) {
    return <div>loading</div>;
  }



  return (
    <div className="product-details">
      <div className="product-information-bar">
        <div className="product-information">
          <div className="product-description">
            <div className="product-full-details">
              <h3>#{productData.productId}</h3>
              <div>{productData.productName}</div>
              <div>
                Brand:<p>{productData.brand}</p>
              </div>
              <div>
                Category:<p>{productData.category}</p>
              </div>
           

              <div>
                @Price:<p>{productData.price}</p>
              </div>

              <div>
                Stock:<p>{productData.stock}</p>
              </div>
              <div>
                Product Status:<p>{productData.productStatus}</p>
              </div>
              <div>
              VAT:<p>{productData.vat}%</p>
              </div>
              <div>
                Custom Duty:<p>{productData.customDuty}%</p>
              </div>
              <div>
                Added Data:<p>{productData.addedDate.slice(0,10)}</p>
              </div>
              {
                productData.deletedDate &&  <div>
                Deleted Date:<p>{productData.deletedDate.slice(0,10)}</p>
              </div>
              }
             

              <div className="product-description-material">
                <h6> Description:</h6>

             
                <div>   {productData.productDescription}</div>
              </div>
            </div>
            <div className="product-image">
              <div>
                <img src={productData.productImage.image_url} alt="productImage" />
              </div>
            </div>
          </div>
        </div>
        <div className="product-supplier-info">
          <div className="supplier-profile-view">
            <Avatar sx={{ width: 150, height: 150 }} src={productData.supplierImage.image_url} />
            <h4>{productData.supplierName}</h4>
            <h5>{productData.supplierEmail}</h5>
            <Link to={`/Supplier/${productData.supplierId}`} style={{ color: "blue" }}>
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

      {/* <div className="product-import-details">
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
      </div> */}

<div>
  {/* update product form */}
  <UpdateProductFormDialog
  productToUpdateId={productId}
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
         deletionId={productId}
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
