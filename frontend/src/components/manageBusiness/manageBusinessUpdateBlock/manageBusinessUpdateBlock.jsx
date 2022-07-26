import "./manageBusinessUpdateBlock.css";

import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { margin } from "@mui/system";
import { Button } from "@mui/material";

const categoryList = [
  "mobile",
  "laptop",
  "gaming console",
  "headphone",
  "webcam",
];

function ManageBusinessUpdateBlock(props) {
  const { businessBlockName,currentBlockMargin } = props;
  const [activeCategory, setActiveCategory] = React.useState("");
  const [margin, setMargin] = React.useState(null);

  const handleCategoryChange = (event) => {
    setActiveCategory(event.target.value);
  };

  const handleMarginChange = (event) => {
    if (event.target.value > 50) {
      setMargin(50);
    } else {
      setMargin(event.target.value);
    }
  };

  const updateBusinessMargin = () => {
    console.log(activeCategory, margin);
  };

  return (
    <div className="manage-business-update-block">
      <h3>{`Manage ${businessBlockName} (${currentBlockMargin}%)`}</h3>
      <div className="category">
        <FormControl fullWidth sx={{ mr: 20, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small">Age</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={activeCategory}
            label="Category"
            onChange={handleCategoryChange}
            sx={{ textAlign: "left",fontWeight:600 }}
            required
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
        disabled={!activeCategory || !margin}
      >
        Update
      </Button>
    </div>
  );
}

export default ManageBusinessUpdateBlock;
