import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Store from "./clientComponents/store/store";
import Body from "./components/body/body";
import Header from "./components/header/header";

import ManagaAccount from "./components/manageAccount/manageAccount";

import MainRouter from "./mainRouter";
import { UserContext } from "./userContext";

// outside  dashboard component
function ManageRouter() {
  const value = useContext(UserContext);
  const { isAdmin } = value.adminControl;

  return (
    <div>
      <Header />

      <Routes>
        <Route exact path="/Store" element={<Store />}></Route>
        {isAdmin && <Route exact path="/*" element={<Body />}></Route>}

        <Route
          exact
          path="/Manage%20Account"
          element={<ManagaAccount />}
        ></Route>
      </Routes>
    </div>
  );
}

export default ManageRouter;
