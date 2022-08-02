import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import Mainbar from "./components/mainbar/mainbar";
import Sidebar from "./components/sidebar/sidebar";
import ManageRouter from "./manageRouter";

import { Routes, Route } from "react-router-dom";
import Login from "./components/signUpLogin/login";
import SignUp from "./components/signUpLogin/signUp";

import { UserContext } from "./userContext";
import NotificationBar from "./components/notificationbar/notificationBar";
import { Store } from "@mui/icons-material";
import { getAllActiveCategory } from "./controllers/categoryController";
import { getAllActiveSuppliers } from "./controllers/supplierController";


function App() {
  const[isAdmin,setIsAdmin]=useState(true);
  const location = useLocation();
  const[categoryList,setCategoryList]=useState(null);
  const[supplierList,setSupplierList]=useState(null);
  const[checkLoginStatus,setCheckLoginStatus]=useState(false);


  useEffect(()=>{
const role=localStorage.getItem('tech_role')
if(role=="admin"){
  setIsAdmin(true);
}else{
  setIsAdmin(false);
}

console.log("dddddddddddddddddddddddddddddddddd");
  },[checkLoginStatus])

  useEffect(() => {
    console.log(location.pathname);
    getAllActiveCategory().then((data=>{
      console.log(data);
      setCategoryList(data);
    }))

    getAllActiveSuppliers().then(data=>{
      console.log(data);
      setSupplierList(data);
    })

  }, []);


  return (
 
      <UserContext.Provider value={{adminControl:{isAdmin,setIsAdmin},categoryList:categoryList,supplierList:supplierList,checkLogin:{checkLoginStatus,setCheckLoginStatus}}}>
        <div className="app">
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/signup" element={<SignUp />}></Route>
        <Route exact path="/*" element={<ManageRouter />}></Route>
      </Routes>
      <div></div>
    </div>
      </UserContext.Provider>
   
  );
}

export default App;
