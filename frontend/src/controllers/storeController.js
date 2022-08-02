import axios from 'axios';


export const getProductsForStore=()=>{

    return  axios.get(`${process.env.REACT_APP_API_URI}/store/products`).then(response=>{
      console.log(response);
     return response.data.data;
  }).catch(err=>{
      console.log(err.response.data);
      return err.response.data;
  })
  }



  export const getProductFullDetailsForStoreOrder=(productId)=>{

    return  axios.get(`${process.env.REACT_APP_API_URI}/store/product/${productId}`).then(response=>{
      console.log(response);
     return response.data.data;
  }).catch(err=>{
      console.log(err.response.data);
      return err.response.data;
  })
  }


  export const getProfitForStoreByProductId=(productId)=>{

    return  axios.get(`${process.env.REACT_APP_API_URI}/profit/product/${productId}`).then(response=>{
      console.log(response);
     return response.data;
  }).catch(err=>{
      console.log(err.response.data);
      return err.response.data;
  })
  }