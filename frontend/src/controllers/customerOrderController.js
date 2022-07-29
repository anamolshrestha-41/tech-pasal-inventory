import { getTokenFromLocalStorage } from "./authController";

import axios from "axios";

export const createNewCustomerOrder=(customerOrderData)=>{
const token =getTokenFromLocalStorage();
console.log(token);
    return axios
    .post(
      `${process.env.REACT_APP_API_URI}/createnewcustomerorder`,
      customerOrderData,
      {
        headers: {
            'authorization': `Bearer ${token}` ,
          contentType: "application/json",
        },
        withCredentials: true,
      }
    )
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((err) => {
      console.log(err.response.data);
      return err.response.data;
    });
  }