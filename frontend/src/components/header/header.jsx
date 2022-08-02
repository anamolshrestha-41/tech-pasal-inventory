import "./header.css";
import techLogo from "./techlogo.png";


import SearchIcon from "@mui/icons-material/Search";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import StoreIcon from '@mui/icons-material/Store';
import LogoutIcon from '@mui/icons-material/Logout';
import ClickAwayListener from '@mui/material/ClickAwayListener';

import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { Avatar } from "@mui/material";
import React from "react";
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';
import { useContext } from "react";
import { UserContext } from "../../userContext";
import { useEffect } from "react";
import { getCustomerNameAndImage } from "../../controllers/customerController";
import { useState } from "react";

function Header() {
  const value=useContext(UserContext);
  const{isAdmin} = value.adminControl;
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const navigate=useNavigate();
  const[user,setUser]=useState(null);
  const[userImage,setUserImage]=useState(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
  
    //console.log(event.currentTarget.getAttribute("name"));
     navigate(`/${event.currentTarget.getAttribute("name")}`)  
    }
    setOpen(false);
  };

  const logOut=()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('tech_role');
    localStorage.removeItem("tech_user_email");
    navigate('/');
  }
 
  useEffect(()=>{
const email=localStorage.getItem("tech_user_email");
console.log(email);
getCustomerNameAndImage(email).then(data=>{
  console.log(data);
  setUser(data.data[0].name);
  setUserImage(data.data[0].profileImage.image_url);
  
},[])
  })

  return (
    <div className="header">
       <Link to={`/`}>
       <div className="header-left">
       
       <div className="site-logo">
         <img src={techLogo} alt="logo" />
       </div>
       <div className="site-name">Tech-inventory</div>
     </div>
       </Link>
     
      <div className="header-middle">
        <div id="search">
          <input type="text" placeholder="search" />

          <div className="search-icon">
            <SearchIcon />
          </div>
        </div>
      </div>
      <div className="header-right" ref={anchorRef}>
        <Button
        
          id="composition-button"
          aria-controls={open ? "composition-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          sx={{backgroundColor:"#e2e2e2"}}
        >
          <div className="profile">
            <Avatar sx={{ backgroundColor: "pink", color: "black" }} src={userImage}>J</Avatar>
            <div className="profile-name">{user}</div>
          </div>
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom-start" ? "left top" : "left bottom",
              }}
            >
              <Paper sx={{margin:"5px"}}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                   
                  >
                    {
                      isAdmin &&  <MenuItem name="Dashboard" className="profile-menu-item">
                      <AccountBoxIcon/>
                    <Link to={`/Home`}> Dashboard</Link>
                     
                      </MenuItem>
                    }
                    
                    <MenuItem name="Manage Account" onClick={handleClose} className="profile-menu-item">
                      <AccountBoxIcon/>
                      Manage Account
                      </MenuItem>
                    <MenuItem name="Store" onClick={handleClose} className="profile-menu-item">
                      <StoreIcon/>
                      Store</MenuItem>
                    <MenuItem name="LogOut" onClick={logOut} className="profile-menu-item">
                      <LogoutIcon/>
                      Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}

export default Header;
