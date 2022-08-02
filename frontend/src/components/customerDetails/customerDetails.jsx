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
import { getCustomerCompleteDetails, updateCustomerOrderDetails } from "../../controllers/customerOrderController";
import { useParams } from "react-router-dom";
import { deleteCustomerByDate, updateCustomerrDetails } from "../../controllers/customerController";
import { useSnackbar } from "notistack";

function CustomerDetails() {
  const { enqueueSnackbar } = useSnackbar();
  const {customerId}=useParams();
  const [activeOrderListMenu, setActiveOrderListMenu] = useState("All Orders");
  const [deleteConfirmationDialogOpen, setDeleteConfirmationDialogOpen] =
    useState(false);
  const [updateConfirmationDialogOpen, setUpdateConfirmationDialogOpen] =
    useState(false);
  const [customerDetailsData, setCustomerDetailsData] = useState(null);
  const[isUpdateSucessful,setIsUpdateSucessful]=useState(false);

  const handleDeleteCustomerConfirmation = () => {
    // change state of dialog modal
    setDeleteConfirmationDialogOpen(true);
  };

  const deleteCustomer = (customerId) => {
    // delete product fuction
    console.log("customer deleted", customerId);

    deleteCustomerByDate(customerId).then(data=>{
      console.log(data);
      if (data.sucess == true) {
        enqueueSnackbar("customer deleted sucessfully", {
          variant: "success",
          autoHideDuration: 2000,
        });
      } else {
        enqueueSnackbar(data.error, {
          variant: "error",
          autoHideDuration: 2000,
        });
      }
      setIsUpdateSucessful(!isUpdateSucessful);
    })
  };
  const handleOnUpdateCustomer = () => {
    setUpdateConfirmationDialogOpen(true);
  };

  const updateCustomer = (customerId, newCustomerData) => {
    console.log(customerId, "data:", newCustomerData);
    updateCustomerrDetails(customerId,newCustomerData).then(data=>{
      console.log(data);
      if (data.sucess == true) {
        enqueueSnackbar("customerDetails updated sucessfully", {
          variant: "success",
          autoHideDuration: 2000,
        });
      } else {
        enqueueSnackbar(data.error, {
          variant: "error",
          autoHideDuration: 2000,
        });
      }
      setIsUpdateSucessful(!isUpdateSucessful);
    
    });
  };

  const handleOrderListMenuClick = (menuList) => {
    // console.log(menuList);
    setActiveOrderListMenu(menuList);
  };

  useEffect(() => {
    document
      .querySelectorAll(".customer-orders-list-menu")
      .forEach((element) => {
        // console.log(element.innerHTML);

        if (activeOrderListMenu == element.innerHTML) {
          element.style.color = "blue";
        } else {
          element.style.color = "black";
        }
      });
  }, [activeOrderListMenu]);

  useEffect(() => {
    getCustomerCompleteDetails(customerId).then((data) => {
      console.log(data);
      setCustomerDetailsData(data[0]);
    });
  }, [isUpdateSucessful]);

  if (!customerDetailsData) {
    return <div>loading</div>;
  }
  return (
    <div className="customer-details">
      <div className="customer-information-bar">
        <div className="customer-information">
          <div className="customer-description">
            <div className="customer-profile-details">
              <h3>#{customerDetailsData.customerId}</h3>
              <div>
                Name:<p>{customerDetailsData.name}</p>
              </div>
             
              <div>
                Email:<p>{customerDetailsData.email}</p>
              </div>
              <div>
                State:<p>{customerDetailsData.state}</p>
              </div>
              <div>
                City:<p>{customerDetailsData.city}</p>
              </div>
              <div>
                Street:<p>{customerDetailsData.street}</p>
              </div>
              <div>
                Contact NO:<p>{customerDetailsData.contactNo}</p>
              </div>
              <div>
                Customer Type:<p>{customerDetailsData.customerType}</p>
              </div>
              <div>
                Role:<p>{customerDetailsData.role}</p>
              </div>
              <div>
                Account Open Date:<p>{customerDetailsData.openedDate.slice(0,10)}</p>
              </div>
             {
              customerDetailsData.closedDate && <div>
              ClosedDate:<p>{customerDetailsData.closedDate.slice(0,10)}</p>
            </div>
             }
             
            </div>
            <div className="customer-profile">
              <Avatar sx={{ width: 150, height: 150 }} src={customerDetailsData.profileImage.image_url} />
            </div>
          </div>
        </div>
        <div className="customer-address-info">
          <div className="customer-shipping-address">
            <h3>Shipping Address</h3>
            <div>epatole,sankhu</div>
            <div>Kathmandu</div>
          </div>
          <Divider variant="middle" />
          <div className="customer-account-update">
            <h3>
              <SettingsIcon />
              Manage
            </h3>
            <Button variant="contained" onClick={handleOnUpdateCustomer}>
              Update
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={handleDeleteCustomerConfirmation}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>

      {/* <div className="customer-orders">
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
            <div className="customer-orders-list-menu">Shipped</div>
          </Button>
          <Button
            onClick={(e) => {
              handleOrderListMenuClick("Delivered");
            }}
          >
            <div className="customer-orders-list-menu">Delivered</div>
          </Button>
        </div>
        <CustomerOrderTable />
      </div> */}

      <div>
        {/* update product form */}
        <UpdateCustomerFormDialog
          customerToUpdateId={customerId}
          updateConfirmationDialogOpen={updateConfirmationDialogOpen}
          setUpdateConfirmationDialogOpen={setUpdateConfirmationDialogOpen}
          updateCustomer={updateCustomer}
          dialogTitle={`Update Customer`}
          dialogText={`Fill the data to update `}
        />
      </div>

      <div>
        {/* dialog for deleteconfirmaton */}
        <DeleteConfirmationDialogModal
          deletionId={customerId}
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
