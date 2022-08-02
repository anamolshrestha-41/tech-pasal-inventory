import axios from "axios";



export const getOutOfStockProducts=()=>{

    return  axios.get(`${process.env.REACT_APP_API_URI}/products/outofstock`).then(response=>{
      console.log(response);
     return response.data.data;
  }).catch(err=>{
      console.log(err.response.data);
      return err.response.data;
  })
  }



  
export const getLowStockProducts=()=>{

    return  axios.get(`${process.env.REACT_APP_API_URI}/products/lowstock`).then(response=>{
      console.log(response);
     return response.data.data;
  }).catch(err=>{
      console.log(err.response.data);
      return err.response.data;
  })
  }