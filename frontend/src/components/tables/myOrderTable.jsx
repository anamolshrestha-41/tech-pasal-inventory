import * as React from "react";
import productImage from "../../demo/productImage.jpg";
import supplierImage from "../../demo/supplierLogo.png";

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
import { Link } from "react-router-dom";
import DeleteConfirmationDialogModal from "../deleteConfirmationDialogModal/deleteConfirmationDialogModal";
import OrderStatusChangeConfirmationDialog from "../statusChangeConfirmation/orderStatusChangeConfirmationDialog";
import { useEffect } from "react";

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
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
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
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
  myOrderId,
  supplierId,
  productId,
  productImage,
  productName,
  supplierImage,
  supplierName,
  orderedDate,
  quantity,
  status,
  payment,
  total
) {
  return {
    myOrderId,
    supplierId,
    productId,
    productImage,
    productName,
    supplierImage,
    supplierName,
    orderedDate,
    quantity,
    status,
    payment,
    total,
  };
}

const row = [
  createData(
    1,
    10,
    2,
    productImage,
    "Samsung F-22",
    "black",
    supplierImage,
    "Autocad Technology pvt ltd",
    "2022-3-55",
    12,
    "processing",
    "unpaid",
    40000
  ),
  createData(
    1,
    10,
    2,
    productImage,
    "Samsung F-22",
    "black",
    supplierImage,
    "Autocad Technology pvt ltd",
    "2022-3-55",
    12,
    "processing",
    "unpaid",
    40000
  ),
  createData(
    1,
    10,
    2,
    productImage,
    "Samsung F-22",
    "black",
    supplierImage,
    "Autocad Technology pvt ltd",
    "2022-3-55",
    12,
    "processing",
    "unpaid",
    40000
  ),
  createData(
    1,
    10,
    2,
    productImage,
    "Samsung F-22",
    "black",
    supplierImage,
    "Autocad Technology pvt ltd",
    "2022-3-55",
    12,
    "processing",
    "unpaid",
    40000
  ),
];

export default function MyOrdersTable(props) {
  const { myOrderList } = props;
  const[rows,setRows]=React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [myOrderToDeleteId, setMyOrderToDeleteId] = React.useState(null);
  const [statusToChangeId, setStatusToChangeId] = React.useState(null);
  const [deleteConfirmationDialogOpen, setDeleteConfirmationDialogOpen] =
    React.useState(false);
  const [
    statusChangeConfirmationDialogOpen,
    setStatusChangeConfirmationDialogOpen,
  ] = React.useState(false);

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

  const handleOnEditMyOrder = (e, myOrderId) => {
    e.preventDefault();
    setStatusToChangeId(myOrderId);
    setStatusChangeConfirmationDialogOpen(true);
  };

  const changeStatus = (myOrderId, myOrderStatus) => {
    console.log(myOrderId, myOrderStatus);
  };

  const handleOnDeleteMyOrder = (e, myOrderId) => {
    // change state of dialog modal
    e.preventDefault();
    setMyOrderToDeleteId(myOrderId);
    setDeleteConfirmationDialogOpen(true);
  };

  const deleteMyOrder = (myOrderId) => {
    console.log("My order", myOrderId, "deleted");
  };

  useEffect(() => {
    console.log(myOrderList);
    if(rows.length==0){
 myOrderList.map((myOrder) => {
      rows.push(
        createData(
          myOrder.myOrderId,
          myOrder.supplierId,
          myOrder.productId,
          myOrder.productImage.image_url,
          myOrder.productName,
          myOrder.supplierImage.image_url,
          myOrder.supplierName,
          myOrder.orderedDate,
          myOrder.quantity,
          myOrder.myOrderStatus,
          myOrder.paymentStatus,
          myOrder.totalPrice
        )
      );
    });
    }
   

    console.log(rows);
  }, []);

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
              <TableCell>Supplier</TableCell>
              <TableCell>Qty</TableCell>
              <TableCell>Ordered Date</TableCell>
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
                key={row.myOrderId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                component={Link}
                to={`/MyOrder/123`}
              >
                <TableCell sx={{ width: 5 }}>{row.myOrderId}</TableCell>
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
                      src={row.supplierImage}
                    />
                    {row.supplierName}
                  </Typography>
                </TableCell>
                <TableCell>{row.quantity}</TableCell>
                <TableCell>{row.orderedDate}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>{row.payment}</TableCell>
                <TableCell>{parseInt(row.total)}</TableCell>
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
                        handleOnEditMyOrder(e, row.myOrderId);
                      }}
                    >
                      <ModeEditOutlineOutlinedIcon fontSize="small" />
                    </IconButton>

                    <IconButton
                      aria-label="delete"
                      size="medium"
                      onClick={(e) => {
                        handleOnDeleteMyOrder(e, row.myOrderId);
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
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={7}
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
          dialogTitle={`My Order Status`}
        />
      </div>

      <div>
        {/* dialog for deleteconfirmaton */}
        <DeleteConfirmationDialogModal
          deletionId={myOrderToDeleteId}
          deleteConfirmationDialogOpen={deleteConfirmationDialogOpen}
          setDeleteConfirmationDialogOpen={setDeleteConfirmationDialogOpen}
          deleteConfirmed={deleteMyOrder}
          deleteConfirmationTitle={`Do you want to Delete this import order?`}
          deleteConfirmationText={`Are you sure! If you delete this import.It will be permanently removed and this cannot be undone`}
        />
      </div>
    </div>
  );
}
