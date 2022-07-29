import axios from 'axios';


 export const getAllActiveCategory=()=>{

    return  axios.get(`${process.env.REACT_APP_API_URI}/allcategories`).then(response=>{
      console.log(response);
     return response.data.data;
  }).catch(err=>{
      console.log(err.response.data);
      return err.response.data;
  })
  }