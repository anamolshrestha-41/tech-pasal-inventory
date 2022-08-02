import "./supplierDetails.css";

import customerImage from "../../demo/customerImage.jpg";
import productImage from "../../demo/productImage.jpg";
import supplierImage from "../../demo/supplierLogo.png";

import {useParams} from 'react-router-dom';
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
import { deleteSupplierByDate, getSuppierDetails, updateSupplierDetails } from "../../controllers/supplierController";
import { useSnackbar } from "notistack";



function SupplierDetails() {
const {supplierId}=useParams();
const { enqueueSnackbar } = useSnackbar();
  const [activeOrderListMenu, setActiveOrderListMenu] =useState("All Orders");
  const [deleteConfirmationDialogOpen, setDeleteConfirmationDialogOpen] =useState(false);
  const[updateConfirmationDialogOpen,setUpdateConfirmationDialogOpen]=useState(false);
  const[supplierDetails,setSupplieDetails]=useState(null);
  const [isUpdate, setIsUpdate] = useState(false);
 
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

  deleteSupplierByDate(supplierId).then(data=>{
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

}

const handleOnUpdateSupplier = () => {
  setUpdateConfirmationDialogOpen(true);
 };

 const updateSupplier=(supplierId,newSupplierData)=>{
   console.log(supplierId,"data:",newSupplierData);
   updateSupplierDetails(supplierId, newSupplierData).then((data) => {
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
    document.querySelectorAll(".supplier-import-list-menu").forEach((element) => {
      // console.log(element.innerHTML);

      if (activeOrderListMenu == element.innerHTML) {
        element.style.color = "blue";
      } else {
        element.style.color = "black";
      }
    });
  }, [activeOrderListMenu]);

  useEffect(()=>{
getSuppierDetails(supplierId).then(data=>{
  console.log(data);
  setSupplieDetails(data[0]);

})
  },[isUpdate])


  if(!supplierDetails){
    return <div>loading</div>
  }

  return (
    <div className="supplier-d-details">
      <div className="supplier-information-bar">
        <div className="supplier-information">
          <div className="supplier-d-description">
            <div className="supplier-full-details">
              <h3>#{supplierDetails.supplierId}</h3>
              <div>{supplierDetails.name}</div>
              <div>
                Country:<p>{supplierDetails.country}</p>
              </div>
              <div>
                Address:<p>{supplierDetails.street},{supplierDetails.city},{supplierDetails.street}</p>
              </div>
              <div>
                Email :<p>{supplierDetails.email}</p>
              </div>

              <div>
                Contact No:<p>{supplierDetails.contactNo}</p>
              </div>

              <div>
                PinCode:<p>{supplierDetails.pinCode}</p>
              </div>
              <div>
                P.O Box:<p>458215</p>
              </div>
              <div>
                Added Date:<p>{supplierDetails.addedDate.slice(0,10)}</p>
              </div>
              {
                supplierDetails.removedDate &&  <div>
                Deleted Date:<p>{supplierDetails.removedDate.slice(0,10)}</p>
              </div>
              }
             
              <div style={{ display: "block", textAlign: "start" }}>
                Description:
                <p
                  style={{ display: "flex", color: "gray", textAlign: "start" }}
                >{
                  supplierDetails.supplierDetails
                }
                </p>
              </div>
            </div>
            <div className="supplier-image">
              <div>
                <img src={supplierDetails.supplierImage.image_url} alt="supplierImage" />
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
          {/* <Divider variant="middle" /> */}

     
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

      {/* <div className="product-import-d-details">
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
      </div> */}

      <div>
  {/* update supplier form */}
  <UpdateSupplierFormDialog
  supplierToUpdateId={supplierId}
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
        deletionId={supplierId}
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
