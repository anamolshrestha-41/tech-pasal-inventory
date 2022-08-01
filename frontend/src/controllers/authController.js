import axios from 'axios';


export const registerCustomer=(registerData)=>{

    return axios
    .post(
      `${process.env.REACT_APP_API_URI}/createnewcustomer`,
      registerData,
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




  export const login=(loginData)=>{
    console.log(loginData);

    return axios
    .post(
      `${process.env.REACT_APP_API_URI}/customer/login`,
      loginData,
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


  export const getTokenFromLocalStorage=()=>{

   const token= localStorage.getItem('token');
  
    return token;
  }


  export const convertSqlDateToJSDate=async(sqlDate)=>{
    
      return await new Date(Date.parse(sqlDate.replace(/-/g, '/')));
 
  }

  