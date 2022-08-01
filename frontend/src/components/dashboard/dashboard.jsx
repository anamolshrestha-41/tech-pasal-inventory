import "./dashboard.css";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect } from "react";
import { getProductTotalcount } from "../../controllers/productController";
import { getImportTotalcount, getTopImports } from "../../controllers/importOrderController";
import { getCustomerTotalcount } from "../../controllers/customerController";
import { getCustomerOrderTotalcount, getTopSales, getTotalRevenue } from "../../controllers/customerOrderController";
import { Avatar, Stack, Typography } from "@mui/material";
import { convertSqlDateToJSDate } from "../../controllers/authController";

function createImportData(
  myOrderId,
  name,
  orderedDate,
  expectedArrivalDate,
  qty,
  status,
  payment,
  total
) {
  return {
    myOrderId,
    name,
    orderedDate,
    expectedArrivalDate,
    qty,
    status,
    payment,
    total,
  };
}

function createSalesData(
    orderId,
    product,
    customerName,
    customerEmail,
    orderedDate,
    qty,
    status,
    payment,
    total
  ) {
    return {
        orderId,
        product,
        customerName,
        customerEmail,
        orderedDate,
        qty,
        status,
        payment,
        total
    };
  }

const importRow = [
  createImportData(
    1,
    "gaming console",
    "2022-6-30",
    "2022-7-30",
    500,
    "processing",
    "unpaid",
    500000
  ),
  createImportData(
    2,
    "samsung f22",
    "2022-6-30",
    "2022-7-30",
    50,
    "shipped",
    "unpaid",
    545000
  ),
  createImportData(
    3,
    "Laptop xlp",
    "2022-6-30",
    "2022-7-30",
    100,
    "processing",
    "unpaid",
    66000
  ),
  createImportData(
    4,
    "Headphone st5",
    "2022-6-30",
    "2022-7-30",
    20,
    "delivered",
    "paid",
    5600
  ),
];

const salesRow=[
    createSalesData(1,"laptopxp","jagadish","jagadish.sta@gmail.com","2022-06-30",20,"processing","unpaid",500000),
    createSalesData(2,"mobile 54","henty","jafkndfclh.sta@gmail.com","2022-06-30",200,"shipping","unpaid",455120),
    createSalesData(3,"gaming console","dragon","javlmldflh.sta@gmail.com","2022-06-30",45,"deliveted","unpaid",5645000),
    createSalesData(4,"headset st","luffy","jdfjgjgagadish.sta@gmail.com","2022-06-30",88,"processing","unpaid",65800),
    
    
]



function Dashboard() {
  const[productCount,setProductCount]=useState(null);
  const[salesCount,setSalesCount]=useState(null);
  const[importCount,setImportCount]=useState(null);
  const[customerCount,setCustomerCount]=useState(null);
  const[revenue,setRevenue]=useState(null);
  const[salesRows,setSalesRows]=useState(null);
  const[importRows,setImportRows]=useState(null);

  React.useEffect(()=>{
    getProductTotalcount().then(data=>{
      console.log(data)
      setProductCount(data[0].productCount);
    });

    getImportTotalcount().then(data=>{
      console.log(data);
      setImportCount(data[0].importCount);
    });

    getCustomerTotalcount().then(data=>{
      console.log(data);
      setCustomerCount(data[0].customerCount);
    });

    getCustomerOrderTotalcount().then(data=>{
      console.log(data);
      setSalesCount(data[0].salesCount);
    })

 
    getTotalRevenue().then(data=>{
      console.log(data);
      setRevenue(data[0].revenue)
      
    });

    
    },[])

    useEffect(()=>{
getTopSales().then(data=>{
  console.log(data);
  setSalesRows(data);
});

getTopImports().then(data=>{
  console.log(data);
  setImportRows(data);
})

    },[])

    if(!salesRows || !importRows){
      return <div>loading</div>
    }

    // if(!!salesRow || !importRows){
    //   return <div>loading</div>
    // }

    console.log(importRows,"mmmmmmmmmmmm");

  return (
    <div className="dashboard">
      <h3>Overview dashboard</h3>
      <div className="dashboard-details">
        <div>
          <p>Total Revenue</p>
          <p>{revenue}</p>
        </div>
        <div>
          <p>Total Imports </p>
          <p>{importCount}</p>
        </div>
        <div>
          <p>Total Products</p>
          <p>{productCount}</p>
        </div>
        <div>
          <p>Total Sales</p>
          <p>{salesCount}</p>
        </div>
        <div>
          <p>Total Customers</p>
          <p>{customerCount}</p>
        </div>
      </div>

      <div className="short-table-heading">
        <h3>
          Top imports
          <p>
       
            {" "}
            <Link to={`/Analytics`} className="view-details">View All</Link>
          </p>
        </h3>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Product</TableCell>
                <TableCell>Order Date</TableCell>
                <TableCell>Ordered Date</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {importRows.map((row) => (
                <TableRow
                  key={row.myOrderId}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{row.myOrderId}</TableCell>
                  <TableCell>
                    
                    <Typography
                      component={Stack}
                      direction="row"
                      alignItems="center"
                      color="black"
                      fontSize={15}
                    >
                      <Avatar
                        sx={{ width: 30, height: 30 }}
                        src={row.productImage.image_url}
                      />
                      {row.productName}
                    </Typography>
                      </TableCell>
                      <TableCell>
                    
                    <Typography
                      component={Stack}
                      direction="row"
                      alignItems="center"
                      color="black"
                      fontSize={15}
                    >
                      <Avatar
                        sx={{ width: 30, height: 30 }}
                        src={row.supplierImage.image_url}
                      />
                      {row.supplierName}
                    </Typography>
                      </TableCell>
                  <TableCell>{row.orderedDate.slice(0,10)}</TableCell>
                 
                  <TableCell>{row.quantity}</TableCell>
                  <TableCell>{row.myOrderStatus}</TableCell>
                 
                  <TableCell>{parseInt(row.totalPrice)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <div className="short-table-heading">
        <h3>
          Top sales
          <p>
       
            {" "}
            <Link to={`/Analytics`} className="view-details">View All</Link>
          </p>
        </h3>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Product</TableCell>
                <TableCell>Customer</TableCell>
                <TableCell>Customer Email</TableCell>
                <TableCell>Order Date</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {salesRows.map((row) => (
                <TableRow
                  key={row.orderId}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{row.orderId}</TableCell>
                  <TableCell>
                    
                  <Typography
                    component={Stack}
                    direction="row"
                    alignItems="center"
                    color="black"
                    fontSize={15}
                  >
                    <Avatar
                      sx={{ width: 30, height: 30 }}
                      src={row.productImage.image_url}
                    />
                    {row.productName}
                  </Typography>
                    </TableCell>
                    <TableCell>
                    
                  <Typography
                    component={Stack}
                    direction="row"
                    alignItems="center"
                    color="black"
                    fontSize={15}
                  >
                    <Avatar
                      sx={{ width: 30, height: 30 }}
                      src={row.customerImage.image_url}
                    />
                    {row.customerName}
                  </Typography>
                    </TableCell>
                  <TableCell>{row.customerEmail}</TableCell>
                  <TableCell>{ row.orderedDate.slice(0,10)}</TableCell>
                  <TableCell>{row.quantity}</TableCell>
                  <TableCell>{row.orderStatus}</TableCell>
                 
                  <TableCell>{parseInt(row.totalPrice)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default Dashboard;
