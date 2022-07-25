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
import DeleteConfirmationDialogModal from "../deleteConfirmationDialogModal/deleteConfirmationDialogModal";
import OrderStatusChangeConfirmationDialog from "../statusChangeConfirmation/orderStatusChangeConfirmationDialog";

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
  customerId,
  productId,
  productImage,
  productName,
  productVariant,
  deliveryAddress,
  quantity,
  status,
  payment,
  total
) {
  return {
    orderId,
    customerId,
    productId,
    productImage,
    productName,
    productVariant,
    deliveryAddress,
    quantity,
    status,
    payment,
    total,
  };
}

const rows = [
  createData(
    1,
    1,
    1,
    productImage,
    "Samsung F-22",
    "black",
    "Sankhu",
    2,
    "processing",
    "unpaid",
    40000
  ),
  createData(
    2,
    1,
    1,
    productImage,
    "Samsung F-22",
    "black",
    "Sankhu",
    2,
    "processing",
    "unpaid",
    40000
  ),
  createData(
    3,
    1,
    1,
    productImage,
    "Samsung F-22",
    "black",
    "Sankhu",
    2,
    "processing",
    "unpaid",
    40000
  ),
  createData(
    4,
    1,
    1,
    productImage,
    "Samsung F-22",
    "black",
    "Sankhu",
    2,
    "processing",
    "unpaid",
    40000
  ),
  createData(
    1,
    1,
    1,
    productImage,
    "Samsung F-22",
    "black",
    "Sankhu",
    2,
    "processing",
    "unpaid",
    40000
  ),
  createData(
    1,
    1,
    1,
    productImage,
    "Samsung F-22",
    "black",
    "Sankhu",
    2,
    "processing",
    "unpaid",
    40000
  ),
  createData(
    1,
    1,
    1,
    productImage,
    "Samsung F-22",
    "black",
    "Sankhu",
    2,
    "processing",
    "unpaid",
    40000
  ),
  createData(
    1,
    1,
    1,
    productImage,
    "Samsung F-22",
    "black",
    "Sankhu",
    2,
    "processing",
    "unpaid",
    40000
  ),
 
];

export default function CustomerOrderTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const[orderToDeleteId,setOrderToDeleteId]=React.useState(null);
  const[statusToChangeId,setStatusToChangeId]=React.useState(null);

  const [deleteConfirmationDialogOpen, setDeleteConfirmationDialogOpen] =
  React.useState(false);
  const [statusChangeConfirmationDialogOpen,setStatusChangeConfirmationDialogOpen]=
  React.useState(false);

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
  const handleOnEditOrder = (e,orderId) => {
    e.preventDefault();
    setStatusToChangeId(orderId);
    setStatusChangeConfirmationDialogOpen(true);
  };

  const changeStatus=(orderId,orderStatus)=>{
    console.log(orderId,orderStatus);
  }



  
  const handleOnDeleteOrder = (e,orderId) => {
    // change state of dialog modal
    e.preventDefault();
    setOrderToDeleteId(orderId)
    setDeleteConfirmationDialogOpen(true);
  };

  const deleteOrder=(orderId)=>{
    console.log(" order",orderId,"deleted");
  }


  return (
    <div>
       <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 500 }}
        size="small"
        aria-label="custom pagination table"
      >
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Product</TableCell>
            <TableCell>Variant</TableCell>
         
            <TableCell>Qty</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Payment</TableCell>
            <TableCell>Total</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow
              key={row.productId}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              component={Link}
              to={`/Order/123`}
            >
              <TableCell sx={{width:5}}>{row.orderId}</TableCell>
              <TableCell>
                <Typography
                  component={Stack}
                  direction="row"
                  alignItems="center"
                  color="black"
                  fontSize={15}
                >
                  <Avatar
                    sx={{ width: 40, height: 40 }}
                    src={row.productImage}
                  />
                  {row.productName}
                </Typography>
              </TableCell>
              <TableCell >
                {row.productVariant}
              </TableCell>
              
              <TableCell>{row.quantity}</TableCell>
              <TableCell>{row.deliveryAddress}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>{row.payment}</TableCell>
              <TableCell>{row.total}</TableCell>
              <TableCell>
              <Typography
                  component={Stack}
                  direction="row"
                  alignItems="center"
                  color="black"
                  fontSize={15}
                >
                  <IconButton
                  aria-label="edit"
                  size="medium"
                  onClick={(e) => {
                    handleOnEditOrder(e,row.orderId);
                  }}
                >
                  <ModeEditOutlineOutlinedIcon fontSize="small" />
                </IconButton>

                <IconButton
                  aria-label="delete"
                  size="medium"
                  onClick={(e) => {
                    handleOnDeleteOrder(e,row.orderId);
                  }}
                >
                  <DeleteOutlineOutlinedIcon fontSize="small" />
                </IconButton>
                </Typography>
               
              </TableCell>
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

    <div>
        {/* order status change conformation */}

        <OrderStatusChangeConfirmationDialog
          statusChangeId={statusToChangeId}
          orderStatus={`Processing`}
          statusChangeConfirmationDialogOpen={
            statusChangeConfirmationDialogOpen
          }
          setStatusChangeConfirmationDialogOpen={
            setStatusChangeConfirmationDialogOpen
          }
          statusChange={changeStatus}
          dialogTitle={`Order Status`}
        />
      </div>
    
    <div >
      {/* dialog for deleteconfirmaton */}
        <DeleteConfirmationDialogModal
         deletionId={orderToDeleteId}
          deleteConfirmationDialogOpen={deleteConfirmationDialogOpen}
          setDeleteConfirmationDialogOpen={setDeleteConfirmationDialogOpen}
          deleteConfirmed={deleteOrder}
          deleteConfirmationTitle={`Do you want to Delete this import order?`}
          deleteConfirmationText={`Are you sure! If you delete this import.It will be permanently removed and this cannot be undone`}
        />
      </div>
    </div>
   
  );
}
