import axios from "axios";
import { getTokenFromLocalStorage } from "./authController";

export const createNewProduct=(productData)=>{

    return axios
    .post(
      `${process.env.REACT_APP_API_URI}/createnewproduct`,
      productData,
      {
        header: {
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



  export const getAllProductsForImport=()=>{

    return  axios.get(`${process.env.REACT_APP_API_URI}/import/products`).then(response=>{
      console.log(response);
     return response.data.data;
  }).catch(err=>{
      console.log(err.response.data);
      return err.response.data;
  })
  }



  export const getProductNameAndImage=(productId)=>{

    return  axios.get(`${process.env.REACT_APP_API_URI}/productnameandimage/${productId}`).then(response=>{
      console.log(response);
     return response.data.data;
  }).catch(err=>{
      console.log(err.response.data);
      return err.response.data;
  })
  }

  export const getPublishedOrUnpublishedProductList=()=>{

    return  axios.get(`${process.env.REACT_APP_API_URI}/publishedorunbublishedproductlist`).then(response=>{
      console.log(response);
     return response.data.data;
  }).catch(err=>{
      console.log(err.response.data);
      return err.response.data;
  })
  }


  export const getProductByFilterStatus=(productStatus)=>{

    return  axios.get(`${process.env.REACT_APP_API_URI}/products/filter/?productstatus=${productStatus}`).then(response=>{
      console.log(response);
     return response.data.data;
  }).catch(err=>{
      console.log(err.response.data);
      return err.response.data;
  })
  }



  export const updateProductStatus=(productId,productStatus)=>{
    const token =getTokenFromLocalStorage();
    console.log(token);
        return axios
        .put(
          `${process.env.REACT_APP_API_URI}/update/product/${productId}`,
          {
            productStatus:productStatus
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
    

      export const deleteProductByStatus=(productId)=>{
        const token =getTokenFromLocalStorage();
        console.log(token);
            return axios
            .put(
              `${process.env.REACT_APP_API_URI}/delete/product/${productId}`,
              
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


          
  export const getProductTotalcount=()=>{

    return  axios.get(`${process.env.REACT_APP_API_URI}/products/count`).then(response=>{
      console.log(response);
     return response.data.data;
  }).catch(err=>{
      console.log(err.response.data);
      return err.response.data;
  })
  }



  export const getCompleteProductDetails=(productId)=>{

    return  axios.get(`${process.env.REACT_APP_API_URI}/product/details/${productId}`).then(response=>{
      console.log(response);
     return response.data.data;
  }).catch(err=>{
      console.log(err.response.data);
      return err.response.data;
  })
  }



  export const updateProductDetails=(productId,newProductData)=>{
    const token =getTokenFromLocalStorage();
    console.log(token);
        return axios
        .put(
          `${process.env.REACT_APP_API_URI}/update/product/${productId}`,
         newProductData,
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