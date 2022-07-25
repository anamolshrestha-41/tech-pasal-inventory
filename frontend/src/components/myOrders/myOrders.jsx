import { Button, Input, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";
import ProductsTable from "../tables/productTable";
import "./myOrders.css";
import TextField from "@mui/material/TextField";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import OrdersTable from "../tables/orderTable";
import MyOrdersTable from "../tables/myOrderTable";

const filterOptions = createFilterOptions({
  matchFrom: "start",
  stringify: (option) => option.title,
});

const categoryList = [
  "mobile",
  "laptop",
  "gaming console",
  "headphone",
  "webcam",
];

function MyOrders() {
  const [activeOrderListMenu, setActiveOrderListMenu] =useState("All Orders");
  const [activeCategory, setActiveCategory] = useState(null);
  const[searchItem,setSearchItem]=useState(null);

  const handleSearchItem=(e)=>{
   setSearchItem(e.target.value);

  }

  const handleOrderListMenuClick = (menuList) => {
    // console.log(menuList);
    setActiveOrderListMenu(menuList);
  };

  const handleCategoryChange = (e) => {
    setActiveCategory(e.target.value);
  };

  useEffect(() => {
    document.querySelectorAll(".my-orders-list-menu").forEach((element) => {
      // console.log(element.innerHTML);

      if (activeOrderListMenu == element.innerHTML) {
        element.style.color = "blue";
      } else {
        element.style.color = "black";
      }
    });
  }, [activeOrderListMenu]);

  return (
    <div className="my-orders">
      <h3>My Orders</h3>

      <div className="my-orders-filter-bar">
        <Button
          onClick={(e) => {
            handleOrderListMenuClick("All Orders");
          }}
        >
          <div className="my-orders-list-menu">All Orders</div>
        </Button>
        <Button
          onClick={(e) => {
            handleOrderListMenuClick("Processing");
          }}
        >
          <div className="my-orders-list-menu">Processing</div>
        </Button>
        <Button
          onClick={(e) => {
            handleOrderListMenuClick("Shipped");
          }}
        >
          <div className="my-orders-list-menu">Shipped</div>
        </Button>
        <Button
          onClick={(e) => {
            handleOrderListMenuClick("Delivered");
          }}
        >
          <div className="my-orders-list-menu">Delivered</div>
        </Button>
        <Button
          onClick={(e) => {
            handleOrderListMenuClick("Cancelled");
          }}
        >
          <div className="my-orders-list-menu">Cancelled</div>
        </Button>
      </div>

      <div className="category-filter-bar">
        <FormControl variant="filled" sx={{ m: 1, minWidth: 150 }}>
          {!activeCategory && (
            <InputLabel id="demo-simple-select-filled-label">
              Category
            </InputLabel>
          )}

          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={activeCategory}
            onChange={handleCategoryChange}
            margin="none"
            sx={{
              "& .MuiSelect-select": {
                paddingTop: 1,
                paddingBottom: 1,
              },
            }}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            MenuProps={{ sx: { padding: 0 } }}
          >
            <MenuItem value="All">
              <em>All</em>
            </MenuItem>
            {categoryList.map((category, index) => {
              return (
                <MenuItem
                  onChange={handleCategoryChange}
                  key={index}
                  value={category}
                >
                  {category}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <div className="search-bar">
         
            <SearchOutlinedIcon/>
         
          <FormControl
            fullWidth
        
            variant='filled'
          >
            
        
            <InputLabel htmlFor="standard-adornment-name" sx={{paddingLeft:"30px",fontSize:"16px"}}> {!searchItem && "Search"}</InputLabel>
            <Input
              required
              id="standard-adornment-name"
              value={searchItem}
              onChange={handleSearchItem}
              sx={{paddingLeft:"30px",height:"25px",paddingTop:"0px"}}

              
           
            />
          </FormControl>
        </div>
       
      </div>

      <div className="my-orders-bar">
        <MyOrdersTable />
      </div>
    </div>
  );
}

export default MyOrders;
