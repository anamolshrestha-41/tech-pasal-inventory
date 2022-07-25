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

function App() {
  const[isAdmin,setIsAdmin]=useState(true);
  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, []);
  return (
 
      <UserContext.Provider value={{adminControl:{isAdmin,setIsAdmin}}}>
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
