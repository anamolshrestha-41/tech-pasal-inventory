import ProductItemCard from "../productItemCard/productItemCard";
import "./store.css";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Input, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getProductsForStore } from "../../controllers/storeController";

const categoryList = [
  "mobile",
  "laptop",
  "gaming console",
  "headphone",
  "webcam",
];

function Store() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchItem, setSearchItem] = useState(null);
  const [products, setProducts] = useState(null);

  const handleSearchItem = (e) => {
    setSearchItem(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setActiveCategory(e.target.value);
  };

  useEffect(() => {
    getProductsForStore().then((data) => {
      console.log(data);
      setProducts(data);
      console.log(products);
    });
  }, []);

  if(!products){
    return <div>loading</div>
  }
  return (
    <div className="store">
      <div className="category-filter-bar">
        <h3>Store</h3>
        <FormControl
          variant="filled"
          sx={{ m: 1, minWidth: 250, mt: 1, pt: 0 }}
        >
          <InputLabel id="demo-simple-select-filled-label" variant="filled">
            Category
          </InputLabel>

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
                height: "20px",
              },
            }}
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
          <SearchOutlinedIcon />

          <FormControl fullWidth variant="filled">
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
        </div>
      </div>
      <div className="store-product-list">
        {products &&
          products.map((product) => {
            console.log(product.productImage.image_url);
            return (
              <Link
                to={`/store/product/${product.productId}`}
              key={product.productId}
              >
                {" "}
                <ProductItemCard   name={product.name}
                brand={product.brand}
                price={product.price}
                image={product.productImage.image_url} />
              </Link>
            );
          })}
       
        
        
      </div>
    </div>
  );
}

export default Store;
