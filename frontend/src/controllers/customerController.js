
import axios from "axios";

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



  
 