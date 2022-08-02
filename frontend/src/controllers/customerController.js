
import axios from "axios";
import { getTokenFromLocalStorage } from "./authController";

  export const getCustomerLists=()=>{

    return  axios.get(`${process.env.REACT_APP_API_URI}/customer/lists`).then(response=>{
      console.log(response);
     return response.data.data;
  }).catch(err=>{
      console.log(err.response.data);
      return err.response.data;
  })
  }


  export const getCustomerTotalcount=()=>{

    return  axios.get(`${process.env.REACT_APP_API_URI}/customers/count`).then(response=>{
      console.log(response);
     return response.data.data;
  }).catch(err=>{
      console.log(err.response.data);
      return err.response.data;
  })
  }



  export const updateCustomerrDetails = (customerId, newCustomerData) => {
    const token = getTokenFromLocalStorage();
    console.log(token);
    return axios
      .put(
        `${process.env.REACT_APP_API_URI}/update/customer/${customerId}`,
        newCustomerData,
        {
          headers: {
            authorization: `Bearer ${token}`,
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
  };


  export const deleteCustomerByDate= (customerId) => {
    const token = getTokenFromLocalStorage();
    console.log(token);
    return axios
      .put(
        `${process.env.REACT_APP_API_URI}/delete/customer/${customerId}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
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
  };

  
 


  export const getCustomerNameAndImage = (email) => {
    const token = getTokenFromLocalStorage();
    console.log(token);
    return axios
      .put(
        `${process.env.REACT_APP_API_URI}/customer/nameandimage`,
        {
          email:email
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
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
  };
