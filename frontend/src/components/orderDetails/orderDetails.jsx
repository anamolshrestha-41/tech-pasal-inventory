import "./orderDetails.css";

import customerImage from "../../demo/customerImage.jpg";
import productImage from "../../demo/productImage.jpg";
import supplierImage from "../../demo/supplierLogo.png";

import { Avatar, Button, Divider, Stack, Typography } from "@mui/material";
import OrdersTable from "../tables/orderTable";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import CustomerOrderTable from "../tables/customerOrderTable";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import UpdateOrderFormDialog from "../updateForms/updateOrderFormDialog";
import DeleteConfirmationDialogModal from "../deleteConfirmationDialogModal/deleteConfirmationDialogModal";
import { useSnackbar } from "notistack";
import { cancelCustomerOrder, getCustomerOrderCompleteDetails, updateCustomerOrderDetails } from "../../controllers/customerOrderController";
import { getCompleteImportOrderDetails } from "../../controllers/importOrderController";


function OrderDetails() {
  const { enqueueSnackbar } = useSnackbar();
  const { orderId } = useParams();
  const [myOrderData, setMyOrderData] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);

  const [orderToDeleteId, setOrderToDeleteId] = useState(orderId);
  const [orderToChangeId, setOrderToChangeId] = useState(orderId);
  const [deleteConfirmationDialogOpen, setDeleteConfirmationDialogOpen] =
    useState(false);
  const [updateConfirmationDialogOpen, setUpdateConfirmationDialogOpen] =
    useState(false);

  const deleteOrder = (orderId) => {
    console.log(" order", orderId, "deleted");
    cancelCustomerOrder(orderId).then(data=>{
      console.log(data);
      if (data.sucess == true) {
        enqueueSnackbar("import order cancelled sucessfully", {
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
  };

  const updateOrder = (orderId, newOrderData) => {
    console.log(orderId, newOrderData);
    updateCustomerOrderDetails(orderId, newOrderData).then((data) => {
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
  };

  const handleOnUpdateOrder = () => {
    setUpdateConfirmationDialogOpen(true);
  };

  const handleOnDeleteOrder = () => {
    console.log("kkkkkkkkkk");
    setDeleteConfirmationDialogOpen(true);
  };

  useEffect(() => {
    getCustomerOrderCompleteDetails(orderId).then((data) => {
      console.log(data);
      setMyOrderData(data[0]);
    });
  }, [isUpdate]);

  if (!myOrderData) {
    return <div>loading</div>;
  }


  return (
    <div className="order-details">
      <div className="order-information-bar">
        <div className="order-information">
          <div className="order-description">
            <div className="order-full-details">
              <h3>#{myOrderData.orderId}</h3>
              <div>{myOrderData.productName}</div>
              <div>
                Brand:<p>{myOrderData.brand}</p>
              </div>
              <div>
                Category:<p>{myOrderData.category}</p>
              </div>
             
              <div>
                Supplier:
                <Avatar src={myOrderData.supplierImage.image_url} sx={{ marginLeft: "5px" }} />
                <p>{myOrderData.supplierName}</p>
              </div>
              <div>
                @Cost Price:<p>{myOrderData.eachPrice}</p>
              </div>
              <div>
                @Selling Price:<p>{(myOrderData.quantity*myOrderData.eachPrice*(1+myOrderData.customDuty/100))*(1+myOrderData.vat/100)}</p>
              </div>
              <div>
                @VAT:<p>{myOrderData.vat}%</p>
              </div>
              <div>
                Profit:<p>{myOrderData.profit}%</p>
              </div>
              <div>
                Quantity:<p>{myOrderData.quantity}</p>
              </div>

              <div style={{ color: "green", fontWeight: "bold" }}>
                Total Price:
                <p style={{ color: "green", fontWeight: "bold" }}>NRS.{(myOrderData.quantity*myOrderData.eachPrice*(1+myOrderData.customDuty/100))}</p>
              </div>
              <div>
                Order Date:<p>{myOrderData.orderedDate.slice(0,10)}</p>
              </div>
              <div>
                Order Status:<p>{myOrderData.orderStatus}</p>
              </div>
              <div>
                Payment Status:<p>{myOrderData.paymentStatus}</p>
              </div>
              <div>
                Payment Mode:<p>{myOrderData.paymentMode}</p>
              </div>
            </div>
            <div className="product-image">
              <div>
                <img src={myOrderData.productImage.image_url} alt="productImage" />
              </div>
            </div>
          </div>
        </div>
        <div className="order-shipping-info">
          <div className="customer-profile-view">
            <Avatar sx={{ width: 150, height: 150 }} src={myOrderData.customerImage.image_url} />
            <h4>{myOrderData.customerName}</h4>
            <h5>{myOrderData.customerEmail}</h5>
            <h5>{myOrderData.customerContactNo}</h5>
            <Link to={`/customer/${myOrderData.customerId}`} style={{ color: "blue" }}>
              View customer details
            </Link>
          </div>
          <Divider variant="middle" />
          <div className="order-shipping-address">
            <h3>Shipping Address</h3>
            <div>{`${myOrderData.customerCity} ,${myOrderData.customerStreet}`}</div>
            <div>{myOrderData.customerState}</div>
          </div>
          <Divider variant="middle" />
          <div className="order-account-update">
            <h3>
              <SettingsIcon />
              Manage
            </h3>
            <Button variant="contained" onClick={ handleOnUpdateOrder }>
              Change Order Details
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={ handleOnDeleteOrder }
            >
              Cancel Order
            </Button>
          </div>
        </div>
      </div>

      <div>
        {/* update product form */}
        <UpdateOrderFormDialog
          orderToUpdateId={orderToChangeId || `123`}
          updateConfirmationDialogOpen={updateConfirmationDialogOpen}
          setUpdateConfirmationDialogOpen={setUpdateConfirmationDialogOpen}
          updateOrder={updateOrder}
          dialogTitle={`Update Order Details`}
          dialogText={`Fill the data to update `}
        />
      </div>

      <div>
        {/* dialog for deleteconfirmaton */}
        <DeleteConfirmationDialogModal
          deletionId={orderToDeleteId||`123` }
          deleteConfirmationDialogOpen={deleteConfirmationDialogOpen}
          setDeleteConfirmationDialogOpen={setDeleteConfirmationDialogOpen}
          deleteConfirmed={deleteOrder}
          deleteConfirmationTitle={`Do you want to Delete this  order?`}
          deleteConfirmationText={`Are you sure! If you delete this import.It will be permanently removed and this cannot be undone`}
        />
      </div>
    </div>
  );
}

export default OrderDetails;
