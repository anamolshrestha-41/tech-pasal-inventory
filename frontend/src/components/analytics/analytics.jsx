import "./analytics.css";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import PersonIcon from "@mui/icons-material/Person";
import TimelineIcon from "@mui/icons-material/Timeline";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

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

const yearList = [2018, 2019, 2020, 2021, 2022];
const monthList=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
function Analytics() {
  const [activeYear, setActiveYear] = useState(null);
  const [activeMonth, setActiveMonth] = useState(null);
  
  const handleYearChange = (e) => {
    setActiveYear(e.target.value);
  };
  const handleMonthChange = (e) => {
    setActiveMonth(e.target.value);
  };
  return (
    <div className="analytics">
      <div className="overview-analytics-bar">
        <div className="overview-analytics-bar-item">
          <h3>
            <div>
              <AccountBalanceWalletIcon />
              Revenue
            </div>
            <TimelineIcon sx={{ width: 40, height: 40 }} />
          </h3>
          <div>Nrs.4545455</div>
          <div className="analytics-bar-item-update">
            <ArrowUpwardIcon sx={{ width: 15, height: 15 }} />
            13%/Months
          </div>
        </div>
        <div className="overview-analytics-bar-item">
          <h3>
            <div>
              <ImportExportIcon />
              Imports
            </div>
            <TimelineIcon sx={{ width: 40, height: 40 }} />
          </h3>
          <div>Nrs.4545455</div>
          <div className="analytics-bar-item-update">
            <ArrowUpwardIcon sx={{ width: 15, height: 15 }} />
            13%/Months
          </div>
        </div>
        <div className="overview-analytics-bar-item">
          <h3>
            <div>
              <PersonIcon />
              Customers
            </div>
            <TimelineIcon sx={{ width: 40, height: 40 }} />
          </h3>
          <div>Nrs.4545455</div>
          <div className="analytics-bar-item-update">
            <ArrowUpwardIcon sx={{ width: 15, height: 15 }} />
            13%/Months
          </div>
        </div>
        <div className="overview-analytics-bar-item">
          <h3>
            <div>
              <MonetizationOnIcon />
              Profit
            </div>
            <TimelineIcon sx={{ width: 40, height: 40 }} />
          </h3>
          <div>Nrs.4545455</div>
          <div className="analytics-bar-item-update">
            <ArrowUpwardIcon sx={{ width: 15, height: 15 }} />
            13%/Months
          </div>
        </div>
      </div>

      <div className="analytics-bar">
        <div className="analytics-graph-bar">
          <div className="analytics-graph-bar-top">
            <h3>Statistics</h3>
            <FormControl variant="filled" sx={{ mt: 1, width: "150px" }}>
              <InputLabel id="demo-simple-select-filled-label">
                Year</InputLabel>
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
                value={activeYear}
                onChange={handleYearChange}
        
              >
               
               
                {yearList.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl variant="filled" sx={{ mt: 1, width: "150px" }}>
              <InputLabel id="demo-simple-select-filled-label">
                Month</InputLabel>
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
                value={activeMonth}
                onChange={handleMonthChange}
              >
               
                {monthList.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        
        </div>
        <div className="analytics-graph-info-bar">
            <h3>Info</h3>
            </div>
      </div>
    </div>
  );
}

export default Analytics;
