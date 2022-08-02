import "./manageBusinessUpdateBlock.css";

import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { margin } from "@mui/system";
import { Button } from "@mui/material";
import { updatecategoryDetails } from "../../../controllers/categoryController";
import { useSnackbar } from "notistack";
// const categoryList = [
//   "mobile",
//   "laptop",
//   "gaming console",
//   "headphone",
//   "webcam",
// ];

function ManageBusinessUpdateBlock(props) {
 
  const { enqueueSnackbar } = useSnackbar();

  const { businessBlockName,currentBlockMargin,categoryList,setCategoryList,isUpdate,setIsUpdate } = props;
  const [activeCategoryId, setactiveCategoryId] = React.useState("");
  const [margin, setMargin] = React.useState("");

  const handleCategoryChange = (event) => {
    setactiveCategoryId(event.target.value);
  };

  const handleMarginChange = (event) => {
    if (event.target.value > 50) {
      setMargin(50);
    } else {
      setMargin(event.target.value);
    }
  };

 

  const updateBusinessMargin = () => {
    var newUpdateData={
      [businessBlockName]:margin
    };
  
    console.log(activeCategoryId, newUpdateData);

     updatecategoryDetails(activeCategoryId,newUpdateData).then(data=>{
      console.log(data);
      if (data.sucess == true) {
        enqueueSnackbar( `${businessBlockName} update sucessfully`, {
          variant: "success",
          autoHideDuration: 2000,
        });
        setCategoryList([]);
        setIsUpdate(!isUpdate);
        
      } else {
        enqueueSnackbar(data.error, {
          variant: "error",
          autoHideDuration: 2000,
        });
      }
     })
  };

  return (
    <div className="manage-business-update-block">
      <h3>{`Manage ${businessBlockName}`}</h3>
      <div className="category">
        <FormControl fullWidth sx={{ mr: 20, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small">{businessBlockName}</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={activeCategoryId}
            label="Category"
            onChange={handleCategoryChange}
            sx={{ textAlign: "left",fontWeight:600 }}
            required
          >
            {categoryList.map((category, index) => {
              return (
                <MenuItem
                  onChange={handleCategoryChange}
                  key={index}
                  value={category.categoryId}
                >
                  {category.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </div>
      <div className="manage-margin">
        <h5>Set margin</h5>
        <input
          type="number"
          name="quantity"
          min="0"
          
          onInput={(e) => {
            e.target.validity.valid || (e.target.value = "");
          }}
          placeholder="margin in %"
          required
          value={margin}
          onChange={handleMarginChange}
        />
      </div>

      <Button
        variant="contained"
        sx={{ ml: 2, mr: 2 }}
        onClick={updateBusinessMargin}
        disabled={!activeCategoryId || !margin}
      >
        Update
      </Button>
    </div>
  );
}

export default ManageBusinessUpdateBlock;
