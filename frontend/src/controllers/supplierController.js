import axios from 'axios';


export const addSupplier=(supplierData)=>{

    return axios
    .post(
      `${process.env.REACT_APP_API_URI}/createnewsupplier`,
      supplierData,
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



  export const getAllActiveSuppliers=()=>{

    return  axios.get(`${process.env.REACT_APP_API_URI}/allsuppliers`).then(response=>{
      console.log(response);
     return response.data.data;
  }).catch(err=>{
      console.log(err.response.data);
      return err.response.data;
  })
  }


  export const getSupplierNameAndImage=(supplierId)=>{

    return  axios.get(`${process.env.REACT_APP_API_URI}/suppliernameandimage/${supplierId}`).then(response=>{
      console.log(response);
     return response.data.data;
  }).catch(err=>{
      console.log(err.response.data);
      return err.response.data;
  })
  }



  export const getSupplierLists=()=>{

    return  axios.get(`${process.env.REACT_APP_API_URI}/supplier/lists`).then(response=>{
      console.log(response);
     return response.data.data;
  }).catch(err=>{
      console.log(err.response.data);
      return err.response.data;
  })
  }