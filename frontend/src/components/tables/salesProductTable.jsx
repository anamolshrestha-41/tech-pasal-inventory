import * as React from "react";
import productImage from "../../demo/productImage.jpg";
import customerImage from "../../demo/customerImage.jpg";

import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import {
  Avatar,
  Button,
  InputLabel,
  TableHead,
  Typography,
} from "@mui/material";

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

 

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

 

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
    
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
     
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(
  orderId,
  deliveredDate,
  orderedDate,
  quantity,
  customerImage,
  customerName,
  address,
  paymentMode,
  total
) {
  return {
    orderId,
    deliveredDate,
    orderedDate,
    quantity,
    customerImage,
    customerName,
    address,
    paymentMode,
    total
   
  };
}

const rows=[
    createData(1,"2022-4-30","2022-4-10",10,customerImage,"jagadish","sankhu","Cash On Delivery",100000),
    createData(2,"2022-4-30","2022-4-10",10,customerImage,"jagadish","sankhu","Cash On Delivery",100000),
    createData(3,"2022-4-30","2022-4-10",10,customerImage,"jagadish","sankhu","Cash On Delivery",100000),
    createData(4,"2022-4-30","2022-4-10",10,customerImage,"jagadish","sankhu","Cash On Delivery",100000),
    createData(5,"2022-4-30","2022-4-10",10,customerImage,"jagadish","sankhu","Cash On Delivery",100000),
    createData(6,"2022-4-30","2022-4-10",10,customerImage,"jagadish","sankhu","Cash On Delivery",100000),
    createData(5,"2022-4-30","2022-4-10",10,customerImage,"jagadish","sankhu","Cash On Delivery",100000), createData(1,"2022-4-30","2022-4-10",10,customerImage,"jagadish","sankhu","Cash On Delivery",100000),

]

export default function SalesProductTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleOnEditProduct = (productId) => {};

  const handleOnDeleteProduct = (productId) => {};

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 500 }}
        size="small"
        aria-label="custom pagination table"
      >
        <TableHead>
          <TableRow>
            <TableCell>Order Id</TableCell>
            <TableCell>Delivered Date</TableCell>
            <TableCell>Ordered Date</TableCell>
            <TableCell>Qty</TableCell>
            <TableCell>Customer
            </TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Payment Mode</TableCell>
           
            <TableCell>Total</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow
              key={row.orderId}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              component={Link}
              to={`/Order/123`}
            >
              <TableCell >{row.orderId}</TableCell>
              <TableCell >
                {row.deliveredDate}
              </TableCell>
              <TableCell >
                {row.orderedDate}
              </TableCell>
              <TableCell >
                {row.quantity}
              </TableCell>

              <TableCell>
                <Typography
                  component={Stack}
                  direction="row"
                  alignItems="center"
                  color="black"
                  fontSize={15}
                  gap
                >
                  <Avatar
                    sx={{ width: 40, height: 40 }}
                    src={row.customerImage}
                  />
                  {row.customerName}
                </Typography>
              </TableCell>
              <TableCell >
                {row.address}
              </TableCell>
              
              <TableCell>{row.paymentMode}</TableCell>
              <TableCell>{row.total}</TableCell>
              
            
               
             
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter >
          <TableRow >
            <TablePagination
              rowsPerPageOptions={5}
              colSpan={5}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
