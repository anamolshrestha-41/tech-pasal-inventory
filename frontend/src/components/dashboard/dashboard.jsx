import "./dashboard.css";

import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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

const importRows = [
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

const salesRows=[
    createSalesData(1,"laptopxp","jagadish","jagadish.sta@gmail.com","2022-06-30",20,"processing","unpaid",500000),
    createSalesData(2,"mobile 54","henty","jafkndfclh.sta@gmail.com","2022-06-30",200,"shipping","unpaid",455120),
    createSalesData(3,"gaming console","dragon","javlmldflh.sta@gmail.com","2022-06-30",45,"deliveted","unpaid",5645000),
    createSalesData(4,"headset st","luffy","jdfjgjgagadish.sta@gmail.com","2022-06-30",88,"processing","unpaid",65800),
    
    
]

function Dashboard() {
  return (
    <div className="dashboard">
      <h3>Overview dashboard</h3>
      <div className="dashboard-details">
        <div>
          <p>Total Revenue</p>
          <p>10000</p>
        </div>
        <div>
          <p>Total Imports </p>
          <p>5000000</p>
        </div>
        <div>
          <p>Total Sales</p>
          <p>90000</p>
        </div>
        <div>
          <p>Total Customers</p>
          <p>900</p>
        </div>
      </div>

      <div className="short-table-heading">
        <h3>
          Top imports
          <p>
       
            {" "}
            <Link to={`/Analytics/imports`} className="view-details">View All</Link>
          </p>
        </h3>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Order Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Order Date</TableCell>
                <TableCell>Expected Delivery Date</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Payment</TableCell>
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
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell>{row.orderedDate}</TableCell>
                  <TableCell>{row.expectedArrivalDate}</TableCell>
                  <TableCell>{row.qty}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>{row.payment}</TableCell>
                  <TableCell>{row.total}</TableCell>
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
            <Link to={`/Analytics/sales`} className="view-details">View All</Link>
          </p>
        </h3>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Order Id</TableCell>
                <TableCell>Product</TableCell>
                <TableCell>Customer Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Order Date</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Payment</TableCell>
                <TableCell>Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {salesRows.map((row) => (
                <TableRow
                  key={row.orderId}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{row.OrderId}</TableCell>
                  <TableCell>{row.product}</TableCell>
                  <TableCell component="th" scope="row">
                    {row.customerName}
                  </TableCell>
                  <TableCell>{row.customerEmail}</TableCell>
                  <TableCell>{row.orderedDate}</TableCell>
                  <TableCell>{row.qty}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>{row.payment}</TableCell>
                  <TableCell>{row.total}</TableCell>
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
