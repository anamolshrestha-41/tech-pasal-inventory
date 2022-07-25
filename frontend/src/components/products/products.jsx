import { Button, Input, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";
import ProductsTable from "../tables/productTable";
import "./products.css";
import TextField from "@mui/material/TextField";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";

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

function Products() {
  const [activeProductListMenu, setActiveProductListMenu] =
    useState("All Products");
  const [activeCategory, setActiveCategory] = useState(null);
  const[searchItem,setSearchItem]=useState(null);

  const handleSearchItem=(e)=>{
   setSearchItem(e.target.value);

  }

  const handleProductListMenuClick = (menuList) => {
    // console.log(menuList);
    setActiveProductListMenu(menuList);
  };

  const handleCategoryChange = (e) => {
    setActiveCategory(e.target.value);
  };

  useEffect(() => {
    document.querySelectorAll(".products-list-menu").forEach((element) => {
      // console.log(element.innerHTML);

      if (activeProductListMenu == element.innerHTML) {
        element.style.color = "blue";
      } else {
        element.style.color = "black";
      }
    });
  }, [activeProductListMenu]);

  return (
    <div className="products">
      <h3>Products</h3>

      <div className="products-filter-bar">
        <Button
          onClick={(e) => {
            handleProductListMenuClick("All Products");
          }}
        >
          <div className="products-list-menu">All Products</div>
        </Button>
        <Button
          onClick={(e) => {
            handleProductListMenuClick("Published");
          }}
        >
          <div className="products-list-menu">Published</div>
        </Button>
        <Button
          onClick={(e) => {
            handleProductListMenuClick("Unpublished");
          }}
        >
          <div className="products-list-menu">Unpublished</div>
        </Button>
        <Button
          onClick={(e) => {
            handleProductListMenuClick("Deleted");
          }}
        >
          <div className="products-list-menu">Deleted</div>
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

      <div className="products-bar">
        <ProductsTable />
      </div>
    </div>
  );
}

export default Products;
