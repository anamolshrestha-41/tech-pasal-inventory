import "./supplierDetails.css";

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
import SupplierImportTable from "../tables/supplierImportTable";
import DeleteConfirmationDialogModal from "../deleteConfirmationDialogModal/deleteConfirmationDialogModal";
import UpdateSupplierFormDialog from "../updateForms/updateSupplierFormDialog";

function SupplierDetails() {
  const [activeOrderListMenu, setActiveOrderListMenu] =useState("All Orders");
  const [deleteConfirmationDialogOpen, setDeleteConfirmationDialogOpen] =useState(false);
  const[updateConfirmationDialogOpen,setUpdateConfirmationDialogOpen]=useState(false);
 
 
  const handleOrderListMenuClick = (menuList) => {
    // console.log(menuList);
    setActiveOrderListMenu(menuList);
  };






const handleDeleteSupplierConfirmation = () => {

  // change state of dialog modal
  setDeleteConfirmationDialogOpen(true);
};


const deleteSupplier=(supplierId)=>{
  // delete supplier fuction
  console.log("supplier deleted",supplierId);
}

const handleOnUpdateSupplier = () => {
  setUpdateConfirmationDialogOpen(true);
 };

 const updateSupplier=(supplierId,newSupplierData)=>{
   console.log(supplierId,"data:",newSupplierData);
 }


  useEffect(() => {
    document.querySelectorAll(".supplier-import-list-menu").forEach((element) => {
      // console.log(element.innerHTML);

      if (activeOrderListMenu == element.innerHTML) {
        element.style.color = "blue";
      } else {
        element.style.color = "black";
      }
    });
  }, [activeOrderListMenu]);


  return (
    <div className="supplier-d-details">
      <div className="supplier-information-bar">
        <div className="supplier-information">
          <div className="supplier-d-description">
            <div className="supplier-full-details">
              <h3>#123</h3>
              <div>Autocad Technonogy Pvt. Ltd</div>
              <div>
                Country:<p>India</p>
              </div>
              <div>
                Address:<p>uttaranchal , New Delhi, solte street</p>
              </div>
              <div>
                Email :<p>autocadtech@gmail</p>
              </div>

              <div>
                Contact No:<p>9869194591</p>
              </div>

              <div>
                PinCode:<p>44600</p>
              </div>
              <div>
                P.O Box:<p>458215</p>
              </div>
              <div style={{ display: "block", textAlign: "start" }}>
                Description:
                <p
                  style={{ display: "flex", color: "gray", textAlign: "start" }}
                >
                  we have been electronics goods including webcam ,drone,
                  processor since 2000.We have branches in 25 countries across
                  Asia
                </p>
              </div>
            </div>
            <div className="supplier-image">
              <div>
                <img src={supplierImage} alt="supplierImage" />
              </div>
            </div>
          </div>
        </div>
        <div className="product-supplier-info">
          {/* <div className="supplier-profile-view">
            <Avatar sx={{ width: 150, height: 150 }} src={supplierImage} />
            <h4>Autocad Technology Pvt. Ltd</h4>
            <h5>autocadtech@gmail.com</h5>
            <Link to={`/Supplier/123`} style={{ color: "blue" }}>
              View supplier details
            </Link>
          </div> */}
          <Divider variant="middle" />

          <Divider variant="middle" />
          <div className="supplier-account-update">
            <h3>
              <SettingsIcon />
              Manage
            </h3>
            <Button variant="contained" onClick={handleOnUpdateSupplier}>Update</Button>
            <Button variant="contained" color="error" onClick={handleDeleteSupplierConfirmation}>
              Delete
            </Button>
          </div>
        </div>
      </div>

      <div className="product-import-d-details">
        <h3>Imports</h3>
        <div className="supplier-import-filter-bar">
        <Button
          onClick={(e) => {
            handleOrderListMenuClick("All Orders");
          }}
        >
          <div className="supplier-import-list-menu">All Orders</div>
        </Button>
        <Button
          onClick={(e) => {
            handleOrderListMenuClick("Processing");
          }}
        >
          <div className="supplier-import-list-menu">Processing</div>
        </Button>
        <Button
          onClick={(e) => {
            handleOrderListMenuClick("Shipped");
          }}
        >
          <div className="supplier-import-list-menu">Shipped</div>
        </Button>
        <Button
          onClick={(e) => {
            handleOrderListMenuClick("Delivered");
          }}
        >
          <div className="supplier-import-list-menu">Delivered</div>
        </Button>
      </div>
      <div className="my-orders-bar">
     <SupplierImportTable/>
      </div>
      </div>

      <div>
  {/* update supplier form */}
  <UpdateSupplierFormDialog
  supplierToUpdateId={`123`}
  updateConfirmationDialogOpen={updateConfirmationDialogOpen}
  setUpdateConfirmationDialogOpen={setUpdateConfirmationDialogOpen}
  updateSupplier={updateSupplier}
  dialogTitle={`Update Supplier`}
  dialogText={`Fill the data to update `}
  />
</div>

      <div >
      {/* dialog for deleteconfirmaton */}
        <DeleteConfirmationDialogModal
        deletionId={`123`}
          deleteConfirmationDialogOpen={deleteConfirmationDialogOpen}
          setDeleteConfirmationDialogOpen={setDeleteConfirmationDialogOpen}
          deleteConfirmed={deleteSupplier}
          deleteConfirmationTitle={`Do you want to Delete this supplier?`}
          deleteConfirmationText={`Are you sure! If you delete this supplier.It will be permanently removed and this cannot be undone`}
        />
      </div>
      
    </div>
  );
}

export default SupplierDetails;
