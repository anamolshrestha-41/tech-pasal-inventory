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
import { Link } from "react-router-dom";
import UpdateOrderFormDialog from "../updateForms/updateOrderFormDialog";
import DeleteConfirmationDialogModal from "../deleteConfirmationDialogModal/deleteConfirmationDialogModal";

function OrderDetails() {
  const [orderToDeleteId, setOrderToDeleteId] = useState(null);
  const [orderToChangeId, setOrderToChangeId] = useState(null);
  const [deleteConfirmationDialogOpen, setDeleteConfirmationDialogOpen] =
    useState(false);
  const [updateConfirmationDialogOpen, setUpdateConfirmationDialogOpen] =
    useState(false);

  const deleteOrder = (orderId) => {
    console.log(" order", orderId, "deleted");
  };

  const updateOrder = (orderId, newOrderData) => {
    console.log(orderId, newOrderData);
  };

  const handleOnUpdateOrder = () => {
    setUpdateConfirmationDialogOpen(true);
  };

  const handleOnDeleteOrder = () => {
    console.log("kkkkkkkkkk");
    setDeleteConfirmationDialogOpen(true);
  };

  return (
    <div className="order-details">
      <div className="order-information-bar">
        <div className="order-information">
          <div className="order-description">
            <div className="order-full-details">
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
                Supplier:
                <Avatar src={supplierImage} sx={{ marginLeft: "5px" }} />
                <p>Autocad Technology Pvt. Ltd</p>
              </div>
              <div>
                @Cost Price:<p>100000</p>
              </div>
              <div>
                @Selling Price:<p>110000</p>
              </div>
              <div>
                @VAT:<p>14%</p>
              </div>
              <div>
                Quantity:<p>5</p>
              </div>

              <div style={{ color: "green", fontWeight: "bold" }}>
                Total Price:
                <p style={{ color: "green", fontWeight: "bold" }}>NRS.550000</p>
              </div>
              <div>
                Order Date:<p>2078-4-30</p>
              </div>
              <div>
                Order Status:<p>processing</p>
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
        <div className="order-shipping-info">
          <div className="customer-profile-view">
            <Avatar sx={{ width: 150, height: 150 }} src={customerImage} />
            <h4>Jagadish Shrestha</h4>
            <h5>Jagadish.sta@gmail.com</h5>
            <h5>9869194591</h5>
            <Link to={`/customer/123`} style={{ color: "blue" }}>
              View customer details
            </Link>
          </div>
          <Divider variant="middle" />
          <div className="order-shipping-address">
            <h3>Shipping Address</h3>
            <div>epatole,sankhu</div>
            <div>Kathmandu</div>
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
