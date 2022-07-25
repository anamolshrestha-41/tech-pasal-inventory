import "./sidebar.css";

import { Link, useLocation, useNavigate } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import InventoryIcon from "@mui/icons-material/Inventory";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import FaceIcon from "@mui/icons-material/Face";
import ShopIcon from "@mui/icons-material/Shop";
import AdUnitsIcon from "@mui/icons-material/AdUnits";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import SettingsIcon from "@mui/icons-material/Settings";
import { Button } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";

const sideBarItems1 = [
  "Home",
  "Suppliers",
  "Products",
  "Import products",
  "My orders",
  "Customers",
  "Orders",
];
function Sidebar() {
  const[activeSidebar,setActiveSidebar]=useState(null);
  const navigate = useNavigate();
  const location=useLocation();
  const handleSidebarClick = (item) => {
   setActiveSidebar(item);
  };

  useEffect(()=>{
    console.log(location.pathname);
    document.querySelectorAll(".sidebar-item").forEach(element => {
     const nameSidebar= element.querySelector(".sidebar-name");
     if(nameSidebar){
      // console.log(nameSidebar.innerHTML);
      console.log( );

     // replace space by %20 to match text
      if(location.pathname==`/${nameSidebar.innerHTML.replace(" ","%20")}`){
        element.style.backgroundColor = "#c8c3c3";
      }else{
        element.style.backgroundColor = "white";
      }
     }
     
      
 })
//  console.log("hhh");

  
  },[activeSidebar]);

  return (
    <div className="sidebar">
      {sideBarItems1.map((item, index) => {
        return (
          <Link to={`${item}`}  key={index} onClick={e=>{handleSidebarClick(item)}}>
            <div  className="sidebar-item" >
              {index === 0 ? <HomeIcon /> : ""}
              {index === 1 ? <AddBusinessIcon /> : ""}
              {index === 2 ? <AdUnitsIcon /> : ""}
              {index === 3 ? <ImportExportIcon /> : ""}
              {index === 4 ? <BusinessCenterIcon /> : ""}
              {index === 5 ? <FaceIcon /> : ""}
              {index === 6 ? <ShopIcon /> : ""}
              <div className="sidebar-name">{item}</div>
            </div>
          </Link>
        );
      })}
      <Link to={'Analytics'} onClick={e=>{handleSidebarClick('Analytics')}}>
      <div className="sidebar-item">
        <InsertChartIcon />
        <div className="sidebar-name" >Analytics</div>
      </div>
      </Link>
      <Link to={'Manage%20Business'} onClick={e=>{handleSidebarClick('Manage Business')}}>
      <div className="sidebar-item">
        <SettingsIcon />
        <div className="sidebar-name" >Manage Business</div>
      </div>
      </Link>
     
     <Link to={'Alert'} onClick={e=>{handleSidebarClick('Alert')}}>
     <div className="sidebar-item">
        <AddAlertIcon />
        <div className="sidebar-name" >Alert</div>
      </div>
     </Link>

      
    </div>
  );
}

export default Sidebar;
