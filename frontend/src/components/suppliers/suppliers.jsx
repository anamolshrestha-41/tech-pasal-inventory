import "./suppliers.css";

import AddIcon from "@mui/icons-material/Add";
import CancelIcon from "@mui/icons-material/Cancel";
import { Fab, FormControl, Input, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import SupplierList from "../supplierList/supplierList";
import { useRef } from "react";
import { useState } from "react";
import { color } from "@mui/system";
import NewSupplierForm from "../newSupplierForm/newSupplierForm";
import { useEffect } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";


const categoryList = [
  "mobile",
  "laptop",
  "gaming console",
  "headphone",
  "webcam",
];

function Suppliers() {
  const [isSupplierFormActive, setSupplierFormActive] = useState(false);
  const [searchItem, setSearchItem] = useState('');
  const [activeCategory,setActiveCategory]=useState(null);

  const handleCategoryChange=(e)=>{
    setActiveCategory(e.target.value);
  }

  const handleCreateNewSupplierClick = (event) => {
    if (!isSupplierFormActive) {
      setSupplierFormActive(true);
    } else {
      setSupplierFormActive(false);
    }
  };

  const handleSearchItem = (e) => {
    setSearchItem(e.target.value);
  };

  return (
    <div className="suppliers">
      {!isSupplierFormActive && (
        <div className="suppliers-bar">
          <div className="supplier">
            <SupplierList />
          </div>
          <div className="supplier">
            <SupplierList />
          </div>
          <div className="supplier">
            <SupplierList />
          </div>
          <div className="supplier">
            <SupplierList />
          </div>
          <div className="supplier">
            <SupplierList />
          </div>
        </div>
      )}

      {/* toggle between above supplierbar and new supplierform on click */}
      {isSupplierFormActive && (
        <div className="new-supplier-form">
          <h3>Add New Supplier</h3>
          <NewSupplierForm />
        </div>
      )}

      <div className="add-supplier-bar">
        {
          !isSupplierFormActive &&  <div className="add-supplier-top-bar">
          <FormControl
            fullWidth
            variant="filled"
           
          >
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
  
          <FormControl fullWidth variant="filled" sx={{ mt:1 }}>
          <InputLabel id="demo-simple-select-filled-label" >Filter</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
             MenuProps= {{ disableScrollLock: true } }
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
            {categoryList.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
           
          
          </Select>
        </FormControl>
  
         
          </div>
        }
       
        
        <Fab
          color={!isSupplierFormActive ? "success" : "error"}
          aria-label="add"
          onClick={handleCreateNewSupplierClick}
        >
          {!isSupplierFormActive && <AddIcon />}
          {isSupplierFormActive && <CancelIcon />}
        </Fab>
        {}
        {!isSupplierFormActive && (
          <p style={{ color: "blue", padding: "0px" }}>Add New Supplier</p>
        )}
        {isSupplierFormActive && (
          <p style={{ color: "red", padding: "0px" }}>Cancel</p>
        )}
      </div>
    </div>
  );
}

export default Suppliers;
