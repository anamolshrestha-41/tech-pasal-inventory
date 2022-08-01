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

    return  axios.get(`${process.env.REACT_APP_API_URI}/shippedorprocessingimportorderlist`).then(response=>{
      console.log(response);
     return response.data.data;
  }).catch(err=>{
      console.log(err.response.data);
      return err.response.data;
  })
  }

  export const getImportOrderByFilterStatus=(myOrderStatus)=>{

    return  axios.get(`${process.env.REACT_APP_API_URI}/imports/filter/?myorderstatus=${myOrderStatus}`).then(response=>{
      console.log(response);
     return response.data.data;
  }).catch(err=>{
      console.log(err.response.data);
      return err.response.data;
  })
  }



  export const updateImportOrderStatus=(myOrderId,myOrderStatus)=>{
    const token =getTokenFromLocalStorage();
    console.log(token);
        return axios
        .put(
          `${process.env.REACT_APP_API_URI}/update/import/${myOrderId}`,
          {
            myOrderStatus:myOrderStatus
          },
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


      export const updateImportOrderDetails=(myOrderId,newOrderDetails)=>{
        const token =getTokenFromLocalStorage();
        console.log(token);
            return axios
            .put(
              `${process.env.REACT_APP_API_URI}/update/import/${myOrderId}`,
              newOrderDetails,
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
    


      export const cancelImportOrder=(myOrderId)=>{
        const token =getTokenFromLocalStorage();
        console.log(token);
            return axios
            .put(
              `${process.env.REACT_APP_API_URI}/cancel/import/${myOrderId}`,
              
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


                    
  export const getImportTotalcount=()=>{

    return  axios.get(`${process.env.REACT_APP_API_URI}/imports/count`).then(response=>{
      console.log(response);
     return response.data.data;
  }).catch(err=>{
      console.log(err.response.data);
      return err.response.data;
  })
  }



  export const getTopImports=()=>{

    return  axios.get(`${process.env.REACT_APP_API_URI}/topimports`).then(response=>{
      console.log(response);
     return response.data.data;
  }).catch(err=>{
      console.log(err.response.data);
      return err.response.data;
  })
  }



  export const getCompleteImportOrderDetails=(myOrderId)=>{

    return  axios.get(`${process.env.REACT_APP_API_URI}/myorder/details/${myOrderId}`).then(response=>{
      console.log(response);
     return response.data.data;
  }).catch(err=>{
      console.log(err.response.data);
      return err.response.data;
  })
  }