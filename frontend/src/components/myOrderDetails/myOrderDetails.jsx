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
import { Link ,useParams} from 'react-router-dom';
import UpdateOrderFormDialog from '../updateForms/updateOrderFormDialog';
import DeleteConfirmationDialogModal from '../deleteConfirmationDialogModal/deleteConfirmationDialogModal';
import UpdateMyOrderFormDialog from '../updateForms/updateMyOrderFormDialog';
import { getCompleteImportOrderDetails } from '../../controllers/importOrderController';

function MyOrderDetails() {
  const{myOrderId}=useParams();
  const[myOrderData,setMyOrderData]=useState(null);
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


useEffect(()=>{
getCompleteImportOrderDetails(myOrderId).then(data=>{
  console.log(data);
  setMyOrderData(data[0]);
})
},[])

if(!myOrderData){
  return <div>loading</div>
}

    return (  <div className="my-order-details">
    <div className="my-order-information-bar">
      <div className="my-order-information">
        <div className="my-order-description">
          <div className="my-order-full-details">
            <h3>#{myOrderData.myOrderId}</h3>
            <div>
            {myOrderData.productName}
            </div>
            <div>
              Brand:<p>{myOrderData.productBrand}</p>
            </div>
            <div>
              Category:<p>{myOrderData.productCategory}</p>
            </div>
           
           
            <div>
              @Price:<p>{myOrderData.eachPrice}</p>
            </div>
            
            <div>
              @Custom Duty:<p>{myOrderData.customDuty}</p>
            </div>
            <div>
              Quantity:<p>{myOrderData.quantity}</p>
            </div>
          
            
            <div style={{color:"green",fontWeight:"bold"}}>
              Total Cost Price:<p style={{color:"green",fontWeight:"bold"}}>NRs.{myOrderData.priceEach*myOrderData.quantity*(1+myOrderData.customDuty/100)}</p>
            </div>
            <div>
              Order Date:<p>{myOrderData.orderedDate.slice(1,10)}</p>
            </div>
            <div>
              Order Status:<p>{myOrderData.myOrderStatus}</p>
            </div>
            <div>
              Expected Delivery Date:<p>{myOrderData.expectedDeliveryDate.slice(0,10)}</p>
            </div>
          </div>
          <div className="product-image">
            <div>
            <img src={myOrderData.productImage.image_url} alt="productImage" />
            </div>
            
         
              
          
          </div>
        </div>
      </div>
      <div className="my-order-shipping-info">

        <div className="supplier-profile-view">
            <Avatar sx={{width:150,height:150}} src={myOrderData.supplierImage.image}/>
            <h4>{myOrderData.supplierName}</h4>
            <h5>{myOrderData.supplierEmail}</h5>
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