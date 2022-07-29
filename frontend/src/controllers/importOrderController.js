import { getTokenFromLocalStorage } from "./authController";

import axios from "axios";

export const createNewImportOrder=(importOrderData)=>{
const token =getTokenFromLocalStorage();
console.log(token);
    return axios
    .post(
      `${process.env.REACT_APP_API_URI}/importnewproduct`,
      importOrderData,
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


  export const getShippedOrProcessingImportOrdersList=()=>{

    return  axios.get(`${process.env.REACT_APP_API_URI}/shippedordeliveredimportorderlist`).then(response=>{
      console.log(response);
     return response.data.data;
  }).catch(err=>{
      console.log(err.response.data);
      return err.response.data;
  })
  }