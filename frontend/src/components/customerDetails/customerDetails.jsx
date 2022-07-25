import "./customerDetails.css";

import customerImage from "../../demo/customerImage.jpg";
import { Avatar, Button, Divider, Stack, Typography } from "@mui/material";
import OrdersTable from "../tables/orderTable";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import CustomerOrderTable from "../tables/customerOrderTable";
import { useEffect, useState } from "react";
import DeleteConfirmationDialogModal from "../deleteConfirmationDialogModal/deleteConfirmationDialogModal";
import UpdateCustomerFormDialog from "../updateForms/updateCustomerFormDialog";
function CustomerDetails() {
  const [activeOrderListMenu, setActiveOrderListMenu] =useState("All Orders");
  const [deleteConfirmationDialogOpen, setDeleteConfirmationDialogOpen] =
  useState(false);
  const[updateConfirmationDialogOpen,setUpdateConfirmationDialogOpen]=useState(false);


const handleDeleteCustomerConfirmation = () => {

  // change state of dialog modal
  setDeleteConfirmationDialogOpen(true);
};


const deleteCustomer=(customerId)=>{
  // delete product fuction
  console.log("customer deleted",customerId);
}
const handleOnUpdateCustomer = () => {
  setUpdateConfirmationDialogOpen(true);
 };

 const updateCustomer=(customerId,newCustomerData)=>{
   console.log(customerId,"data:",newCustomerData);
 }

 
  const handleOrderListMenuClick = (menuList) => {
    // console.log(menuList);
    setActiveOrderListMenu(menuList);
  };

  useEffect(() => {
    document.querySelectorAll(".customer-orders-list-menu").forEach((element) => {
      // console.log(element.innerHTML);

      if (activeOrderListMenu == element.innerHTML) {
        element.style.color = "blue";
      } else {
        element.style.color = "black";
      }
    });
  }, [activeOrderListMenu]);


  return (
    <div className="customer-details">
      <div className="customer-information-bar">
        <div className="customer-information">
          <div className="customer-description">
            <div className="customer-profile-details">
              <div>
                Name:<p>Jagadish Shrestha</p>
              </div>
              <div>
                Gender:<p>Male</p>
              </div>
              <div>
                Birth Date:<p>2058-01-16</p>
              </div>
              <div>
                Father's/Mother's Name:<p>Jayaram Shrestha</p>
              </div>
              <div>
                Address:<p>Kathmandu-,Kathmandu-SHANKHARAPUR -6,Nepal</p>
              </div>
              <div>
                Email:<p>Jagadish.sta@gmail.com</p>
              </div>
              <div>
                Contact NO:<p>9869194591</p>
              </div>
              <div>
                PAN NO:<p>null</p>
              </div>
              <div>
                Account Open Date:<p>2079-3-30</p>
              </div>
              <div>
                Account Update Date:<p>null</p>
              </div>
              <div>
                Account Mode:<p>Individual</p>
              </div>
            </div>
            <div className="customer-profile">
              
                <Avatar sx={{ width: 150, height: 150 }} src={customerImage} />
                
            
            </div>
          </div>
        </div>
        <div className="customer-address-info">
          <div className="customer-shipping-address">
            <h3>
              Shipping Address
             
            </h3>
            <div>epatole,sankhu</div>
            <div>Kathmandu</div>
          </div>
          <Divider variant="middle" />
          <div className="customer-account-update">
            <h3>
            <SettingsIcon />
            Manage
            </h3>
            <Button variant="contained" onClick={handleOnUpdateCustomer} >Update</Button>
          <Button variant="contained" color="error" onClick={handleDeleteCustomerConfirmation}>
            Delete
          </Button>
          </div>
        </div>

      </div>

      <div className="customer-orders">
        <h3>Orders</h3>
        <div className="customer-orders-filter-bar">
        <Button
          onClick={(e) => {
            handleOrderListMenuClick("All Orders");
          }}
        >
          <div className="customer-orders-list-menu">All Orders</div>
        </Button>
        <Button
          onClick={(e) => {
            handleOrderListMenuClick("Processing");
          }}
        >
          <div className="customer-orders-list-menu">Processing</div>
        </Button>
        <Button
       
          onClick={(e) => {
            handleOrderListMenuClick("Shipped");
          }}
        >
          <div className="customer-orders-list-menu" >Shipped</div>
        </Button>
        <Button
          onClick={(e) => {
            handleOrderListMenuClick("Delivered");
          }}
        >
          <div className="customer-orders-list-menu">Delivered</div>
        </Button>
      </div>
         <CustomerOrderTable/>
       
      </div>

      <div>
  {/* update product form */}
  <UpdateCustomerFormDialog
  customerToUpdateId={`123`}
  updateConfirmationDialogOpen={updateConfirmationDialogOpen}
  setUpdateConfirmationDialogOpen={setUpdateConfirmationDialogOpen}
  updateCustomer={updateCustomer}
  dialogTitle={`Update Customer`}
  dialogText={`Fill the data to update `}
  />
</div>

      <div >
      {/* dialog for deleteconfirmaton */}
        <DeleteConfirmationDialogModal
         deletionId={`123`}
          deleteConfirmationDialogOpen={deleteConfirmationDialogOpen}
          setDeleteConfirmationDialogOpen={setDeleteConfirmationDialogOpen}
          deleteConfirmed={deleteCustomer}
          deleteConfirmationTitle={`Do you want to Delete this customer?`}
          deleteConfirmationText={`Are you sure! If you delete this customer.It will be permanently removed and this cannot be undone`}
        />
      </div>
    </div>
  );
}

export default CustomerDetails;
