import { Avatar, Button, Stack, Typography } from "@mui/material";
import * as React from "react";
import {Link} from 'react-router-dom';
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import CustomerList from "../customerList/customerList";
import "./customers.css";
import customerImage from "../../demo/customerImage.jpg";

import Delete from "@mui/icons-material/Delete";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import SettingsIcon from "@mui/icons-material/Settings";
import BlockIcon from "@mui/icons-material/Block";

import {
  Fab,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import { useState } from "react";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useRef } from "react";
import { useEffect } from "react";
import DeleteConfirmationDialogModal from "../deleteConfirmationDialogModal/deleteConfirmationDialogModal";

const customerFilter = ["location", "name"];
const label = { inputProps: { "aria-label": "Checkbox demo" } };
function Customers() {
  const [searchItem, setSearchItem] = useState("");
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);


  const [deleteConfirmationDialogOpen, setDeleteConfirmationDialogOpen] =
  useState(false);



  const customerRef = useRef(null);

const handleDeleteCustomerConfirmation = () => {

  // change state of dialog modal
  setDeleteConfirmationDialogOpen(true);
};


const deleteCustomer=(customerId)=>{
  // delete product fuction
  console.log("customer deleted",customerId);
}

  const handleCustomerClick = (e) => {
    // console.log(e.currentTarget.getAttribute('customerId'));
    setSelectedCustomerId(e.currentTarget.getAttribute("customerId"));
  };
  const handleCategoryChange = (e) => {
    setActiveCategory(e.target.value);
  };
  const handleSearchItem = (e) => {
    setSearchItem(e.target.value);
  };

  useEffect(() => {
    console.log(selectedCustomerId);
  }, [selectedCustomerId]);

  return (
    <div className="customers">
      <div className="customers-bar">
        <div
          className="customer-bar-item"
          customerId={1}
          onClick={handleCustomerClick}
        >
          {selectedCustomerId == 1 ? (
            <Checkbox
              {...label}
              checked
              color="success"
              sx={{ position: "absolute", left: 0 }}
            />
          ) : (
            ""
          )}

          <CustomerList />
        </div>
        <div
          className="customer-bar-item"
          customerId={2}
          onClick={handleCustomerClick}
        >
          {selectedCustomerId == 2 ? (
            <Checkbox
              {...label}
              checked
              color="success"
              sx={{ position: "absolute", left: 0 }}
            />
          ) : (
            ""
          )}
          <CustomerList />
        </div>
        <div
          className="customer-bar-item"
          customerId={3}
          onClick={handleCustomerClick}
        >
          {selectedCustomerId == 3 ? (
            <Checkbox
              {...label}
              checked
              color="success"
              sx={{ position: "absolute", left: 0 }}
            />
          ) : (
            ""
          )}
          <CustomerList />
        </div>
        <div
          className="customer-bar-item"
          customerId={4}
          onClick={handleCustomerClick}
        >
          {selectedCustomerId == 4 ? (
            <Checkbox
              {...label}
              checked
              color="success"
              sx={{ position: "absolute", left: 0 }}
            />
          ) : (
            ""
          )}
          <CustomerList />
        </div>
      </div>
      <div className="customer-manage-bar">
        <div className="customer-manage-top-bar">
          <FormControl fullWidth variant="filled">
            <SearchOutlinedIcon sx={{ position: "absolute", bottom: "0px" }} />
            <InputLabel
              htmlFor="standard-adornment-name"
              sx={{ paddingLeft: "30px", fontSize: "16px" }}
            >
              {" "}
              {!searchItem && "Search"}
            </InputLabel>
            <Input
              required
              id="standard-adornment-name"
              value={searchItem}
              onChange={handleSearchItem}
              sx={{ paddingLeft: "30px", height: "25px", paddingTop: "0px" }}
            />
          </FormControl>

          <FormControl fullWidth variant="filled" sx={{ mt: 1 }}>
            <InputLabel id="demo-simple-select-filled-label">Filter</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              MenuProps={{ disableScrollLock: true }}
              sx={{
                "& .MuiSelect-select": {
                  paddingTop: 1,
                  paddingBottom: 1,
                },
              }}
              value={activeCategory}
              onChange={handleCategoryChange}
            >
              <MenuItem value="All">
                <em>All</em>
              </MenuItem>
              {customerFilter.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="customer-account-manage-bar">
          <h3>
            <SettingsIcon />
            Manage Account
          </h3>
          {
            selectedCustomerId &&
            <div className="selected-customer-info">
            {" "}
            <div>
              <Avatar
                src={customerImage}
                sx={{ height: 60, width: 60 }}
              ></Avatar>
            </div>
            <h5>jagadish.sta@gmail.com</h5>
          </div>
          }
          {
            !selectedCustomerId && <p>Select the customer to manage account</p>
          }
         

          <Button variant="contained" disabled={!selectedCustomerId}>Update</Button>
          <Button variant="contained"disabled={!selectedCustomerId} color="error" onClick={handleDeleteCustomerConfirmation}>
            Delete
          </Button>
          {
            selectedCustomerId &&  <Link to ={`/Customer/123`} style={{color:"blue"}}>View customer  details</Link>
          }
         
        </div>
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

export default Customers;
