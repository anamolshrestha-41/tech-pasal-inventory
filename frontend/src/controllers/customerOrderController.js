import { getTokenFromLocalStorage } from "./authController";

import axios from "axios";

export const createNewCustomerOrder = (customerOrderData) => {
  const token = getTokenFromLocalStorage();
  console.log(token);
  return axios
    .post(
      `${process.env.REACT_APP_API_URI}/createnewcustomerorder`,
      customerOrderData,
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

export const getShippedOrProcessingCustomerOrdersList = () => {
  return axios
    .get(
      `${process.env.REACT_APP_API_URI}/shippedorprocessingcustomerorderlist`
    )
    .then((response) => {
      console.log(response);
      return response.data.data;
    })
    .catch((err) => {
      console.log(err.response.data);
      return err.response.data;
    });
};

export const getCustomerOrderByFilterStatus = (orderStatus) => {
  return axios
    .get(
      `${process.env.REACT_APP_API_URI}/customerorders/filter/?orderstatus=${orderStatus}`
    )
    .then((response) => {
      console.log(response);
      return response.data.data;
    })
    .catch((err) => {
      console.log(err.response.data);
      return err.response.data;
    });
};

export const updateCustomerOrderStatus = (orderId, orderStatus) => {
  const token = getTokenFromLocalStorage();
  console.log(token);
  return axios
    .put(
      `${process.env.REACT_APP_API_URI}/update/customerorder/${orderId}`,
      {
        orderStatus: orderStatus,
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

export const cancelCustomerOrder = (orderId) => {
  const token = getTokenFromLocalStorage();
  console.log(token);
  return axios
    .put(
      `${process.env.REACT_APP_API_URI}/cancel/customerorder/${orderId}`,

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

export const getCustomerOrderTotalcount = () => {
  return axios
    .get(`${process.env.REACT_APP_API_URI}/customerorders/count`)
    .then((response) => {
      console.log(response);
      return response.data.data;
    })
    .catch((err) => {
      console.log(err.response.data);
      return err.response.data;
    });
};

export const getTotalRevenue = () => {
  return axios
    .get(`${process.env.REACT_APP_API_URI}/revenue`)
    .then((response) => {
      console.log(response);
      return response.data.data;
    })
    .catch((err) => {
      console.log(err.response.data);
      return err.response.data;
    });
};

export const getTopSales = () => {
  return axios
    .get(`${process.env.REACT_APP_API_URI}/topsales`)
    .then((response) => {
      console.log(response);
      return response.data.data;
    })
    .catch((err) => {
      console.log(err.response.data);
      return err.response.data;
    });
};



export const getCustomerOrderCompleteDetails= (orderId) => {
  return axios
    .get(`${process.env.REACT_APP_API_URI}/customerorder/details/${orderId}`)
    .then((response) => {
      console.log(response);
      return response.data.data;
    })
    .catch((err) => {
      console.log(err.response.data);
      return err.response.data;
    });
};




export const updateCustomerOrderDetails = (orderId, newOrderData) => {
  const token = getTokenFromLocalStorage();
  console.log(token);
  return axios
    .put(
      `${process.env.REACT_APP_API_URI}/update/customerorder/${orderId}`,
      newOrderData,
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