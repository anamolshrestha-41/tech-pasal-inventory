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


  
 export const getCompleteCategoriesDetails=()=>{

  return  axios.get(`${process.env.REACT_APP_API_URI}/categories/details`).then(response=>{
    console.log(response);
   return response.data.data;
}).catch(err=>{
    console.log(err.response.data);
    return err.response.data;
})
}



export const createNewCategory=(newCategoryData)=>{

  return axios
  .post(
    `${process.env.REACT_APP_API_URI}/createnewcategory`,
    newCategoryData,
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



export const updatecategoryDetails=(categoryId,newCategoryData)=>{

  return axios.put(
    `${process.env.REACT_APP_API_URI}/update/category/${categoryId}`,
    newCategoryData,
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