import './myOrderDetails.css';

import customerImage from "../../demo/customerImage.jpg";
import productImage from "../../demo/productImage.jpg";
import supplierImage from "../../demo/supplierLogo.png";


import { Avatar, Button, Divider, Stack, Typography } from "@mui/material";
import OrdersTable from "../tables/orderTable";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import CustomerOrderTable from "../tables/customerOrderTable";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import UpdateOrderFormDialog from '../updateForms/updateOrderFormDialog';
import DeleteConfirmationDialogModal from '../deleteConfirmationDialogModal/deleteConfirmationDialogModal';
import UpdateMyOrderFormDialog from '../updateForms/updateMyOrderFormDialog';

function MyOrderDetails() {
  const [myOrderToDeleteId, setMyOrderToDeleteId] = useState(null);
  const [myOrderToChangeId,setMyOrderToChangeId] = useState(null);
  const [deleteConfirmationDialogOpen, setDeleteConfirmationDialogOpen] =
  useState(false);
const [updateConfirmationDialogOpen, setUpdateConfirmationDialogOpen] =
  useState(false);

const deleteMyOrder = (myOrderId) => {
  console.log(" myorder", myOrderId, "deleted");
};

const updateMyOrder = (myOrderId, newMyOrderData) => {
  console.log(myOrderId, newMyOrderData);
};

const handleOnUpdateMyOrder = () => {
  setUpdateConfirmationDialogOpen(true);
};

const handleOnDeleteMyOrder = () => {
  console.log("kkkkkkkkkk");
  setDeleteConfirmationDialogOpen(true);
};


    return (  <div className="my-order-details">
    <div className="my-order-information-bar">
      <div className="my-order-information">
        <div className="my-order-description">
          <div className="my-order-full-details">
            <h3>#123</h3>
            <div>
             Samsung F22
            </div>
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
              @Custom Duty:<p>14%</p>
            </div>
            <div>
              Quantity:<p>5</p>
            </div>
            <div>
              Transportation Cost:<p>NRs.5000</p>
            </div>
            
            <div style={{color:"green",fontWeight:"bold"}}>
              Total Cost Price:<p style={{color:"green",fontWeight:"bold"}}>NRS.550000</p>
            </div>
            <div>
              Order Date:<p>2078-4-30</p>
            </div>
            <div>
              Order Status:<p>processing</p>
            </div>
            <div>
              Expected Delivery Date:<p>2078-6-30</p>
            </div>
            <div>
              Payment:<p>unpaid</p>
            </div>
            <div>
              Payment Mode:<p>Cash on Delivery</p>
            </div>
          </div>
          <div className="product-image">
            <div>
            <img src={productImage} alt="productImage" />
            </div>
            
         
              
          
          </div>
        </div>
      </div>
      <div className="my-order-shipping-info">

        <div className="supplier-profile-view">
            <Avatar sx={{width:150,height:150}} src={supplierImage}/>
            <h4>Autocad Technology Pvt. Ltd</h4>
            <h5>autocadtech@gmail.com</h5>
            <Link to={`/Supplier/123`} style={{color:"blue"}}>View supplier details</Link>
        </div>
        <Divider variant="middle" />
        <div className="my-order-shipping-address">
          <h3>
            Shipping Address
           
          </h3>
          <div>epatole,sankhu</div>
          <div>Kathmandu</div>
        </div>
        <Divider variant="middle" />
        <div className="my-order-account-update">
          <h3>
          <SettingsIcon />
          Manage
          </h3>
          <Button variant="contained" onClick={handleOnUpdateMyOrder} >Change Import Details</Button>
        <Button variant="contained" color="error" onClick={handleOnDeleteMyOrder}>
          Cancel Order
        </Button>
        </div>
      </div>
    
    </div>


    <div>
        {/* update product form */}
        <UpdateMyOrderFormDialog
          myOrderToUpdateId={myOrderToChangeId || `123`}
          updateConfirmationDialogOpen={updateConfirmationDialogOpen}
          setUpdateConfirmationDialogOpen={setUpdateConfirmationDialogOpen}
          updateMyOrder={updateMyOrder}
          dialogTitle={`Update Order Details`}
          dialogText={`Fill the data to update `}
        />
      </div>
    

    <div>
        {/* dialog for deleteconfirmaton */}
        <DeleteConfirmationDialogModal
          deletionId={myOrderToDeleteId||`123` }
          deleteConfirmationDialogOpen={deleteConfirmationDialogOpen}
          setDeleteConfirmationDialogOpen={setDeleteConfirmationDialogOpen}
          deleteConfirmed={deleteMyOrder}
          deleteConfirmationTitle={`Do you want to Delete this  import?`}
          deleteConfirmationText={`Are you sure! If you delete this import.It will be permanently removed and this cannot be undone`}
        />
      </div>
   
    </div> );
}

export default MyOrderDetails;