import * as React from "react";
import productImage from "../../demo/productImage.jpg";
import supplierImage from "../../demo/supplierLogo.png";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
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
import { Avatar, Button, Stack, TableHead, Typography } from "@mui/material";
import DeleteConfirmationDialogModal from "../deleteConfirmationDialogModal/deleteConfirmationDialogModal";
import ProductStatusChangeConfirmationDialog from "../statusChangeConfirmation/productStatusChangeConfirmationDialog";
import {
  deleteProductByStatus,
  getProductByFilterStatus,
  getPublishedOrUnpublishedProductList,
  updateProductStatus,
} from "../../controllers/productController";
import { useSnackbar } from "notistack";
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
  productId,
  productImage,
  productName,
  category,
  supplierName,
  supplierImage,
  stock,
  price,
  productStatus
) {
  return {
    productId,
    productImage,
    productName,
    category,
    supplierName,
    supplierImage,
    stock,
    price,
    productStatus,
  };
}

const row = [
  createData(
    0,
    productImage,
    "samsung F-22",
    "mobile",
    "Autocad Technology Pvt Ltd",
    supplierImage,
    10
  ),
  createData(
    1,
    productImage,
    "samsung F-22",
    "mobile",
    "Autocad Technology Pvt Ltd",
    supplierImage,
    10
  ),
  createData(
    2,
    productImage,
    "samsung F-22",
    "mobile",
    "Autocad Technology Pvt Ltd",
    supplierImage,
    10
  ),
  createData(
    3,
    productImage,
    "samsung F-22",
    "mobile",
    "Autocad Technology Pvt Ltd",
    supplierImage,
    10
  ),
  createData(
    4,
    productImage,
    "samsung F-22",
    "mobile",
    "Autocad Technology Pvt Ltd",
    supplierImage,
    10
  ),
  createData(
    5,
    productImage,
    "samsung F-22",
    "mobile",
    "Autocad Technology Pvt Ltd",
    supplierImage,
    10
  ),
  createData(
    6,
    productImage,
    "samsung F-22",
    "mobile",
    "Autocad Technology Pvt Ltd",
    supplierImage,
    10
  ),
  createData(
    7,
    productImage,
    "samsung F-22",
    "mobile",
    "Autocad Technology Pvt Ltd",
    supplierImage,
    10
  ),
  createData(
    8,
    productImage,
    "samsung F-22",
    "mobile",
    "Autocad Technology Pvt Ltd",
    supplierImage,
    10
  ),
];

export default function ProductsTable(props) {
  const { activeProductListMenu } = props;
  const { enqueueSnackbar } = useSnackbar();
  const [rows, setRows] = React.useState([]);
  var myOrderList = [];
  const [isChangeSucessfull, setIsChangeSucessfull] = React.useState(false);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [productToDeleteId, setProductToDeleteId] = React.useState(null);
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

  const handleOnEditProduct = (e, productId) => {
    e.preventDefault();
    setStatusToChangeId(productId);
    setStatusChangeConfirmationDialogOpen(true);
  };

  const changeStatus = (productId, productStatus) => {
    console.log(productId, productStatus);
    updateProductStatus(productId, productStatus).then((data) => {
      console.log(data);
      if (data.sucess == true) {
        setIsChangeSucessfull(!isChangeSucessfull);
        setRows([]);

        enqueueSnackbar(data.message, {
          variant: "success",
          autoHideDuration: 2000,
        });
      } else {
        enqueueSnackbar(data.error, {
          variant: "error",
          autoHideDuration: 2000,
        });
      }
    });
  };

  const handleOnDeleteProduct = (e, productId) => {
    // change state of dialog modal
    e.preventDefault();
    setProductToDeleteId(productId);
    setDeleteConfirmationDialogOpen(true);
  };

  const deleteProduct = (productId) => {
    console.log("Product", productId, "deleted");
    deleteProductByStatus(productId).then((data) => {
      console.log(data);
      if (data.sucess == true) {
        setIsChangeSucessfull(!isChangeSucessfull);

        enqueueSnackbar(data.message, {
          variant: "success",
          autoHideDuration: 2000,
        });
      } else {
        enqueueSnackbar(data.error, {
          variant: "error",
          autoHideDuration: 2000,
        });
      }
    });
  };



  React.useEffect(() => {
    console.log(activeProductListMenu);
    if (activeProductListMenu === "All Products") {
      getPublishedOrUnpublishedProductList().then((data) => {
        console.log(data);
        console.log("done");

        if (data.length != myOrderList.length) {
          data.map((product) => {
            myOrderList.push(
              createData(
                product.productId,
                product.productImage.image_url,
                product.productName,
                product.category,
                product.supplierName,
                product.supplierImage.image_url,
                product.stock,
                product.price,
                product.productStatus
              )
            );
          });
        }

        setRows(myOrderList);
      });
    } else {
      getProductByFilterStatus(activeProductListMenu).then((data) => {
        console.log(data);
        console.log("done");

       
        data.map((product) => {
          myOrderList.push(
            createData(
              product.productId,
              product.productImage.image_url,
              product.productName,
              product.category,
              product.supplierName,
              product.supplierImage.image_url,
              product.stock,
              product.price,
              product.productStatus
            )
          );
        });
        

        setRows(myOrderList);
      
      });
    }
    console.log("llll");
  }, [ isChangeSucessfull, activeProductListMenu]);

 

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
              <TableCell>Image</TableCell>
              <TableCell>Product</TableCell>

              <TableCell>Supplier</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Stock</TableCell>
              <TableCell>Product Status</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row) => (
              <TableRow
                component={Link}
                to={`/Product/${row.productId}`}
                key={row.productId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                  <Avatar
                    sx={{ width: 40, height: 40 }}
                    src={row.productImage}
                  />
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.productName}
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
                <TableCell>{row.category}</TableCell>
                <TableCell>{row.stock}</TableCell>
                <TableCell>{row.productStatus}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>
                  <IconButton
                    aria-label="edit"
                    size="medium"
                    onClick={(e) => {
                      handleOnEditProduct(e, row.productId);
                    }}
                  >
                    <ModeEditOutlineOutlinedIcon fontSize="small" />
                  </IconButton>

                  <IconButton
                    aria-label="delete"
                    size="medium"
                    onClick={(e) => {
                      handleOnDeleteProduct(e, row.productId);
                    }}
                  >
                    <DeleteOutlineOutlinedIcon fontSize="small" />
                  </IconButton>
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
                colSpan={4}
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
        {/* product status change conformation */}

        <ProductStatusChangeConfirmationDialog
          statusChangeId={statusToChangeId}
          orderStatus={`Published`}
          statusChangeConfirmationDialogOpen={
            statusChangeConfirmationDialogOpen
          }
          setStatusChangeConfirmationDialogOpen={
            setStatusChangeConfirmationDialogOpen
          }
          statusChange={changeStatus}
          dialogTitle={`Product Status`}
        />
      </div>

      <div>
        {/* dialog for deleteconfirmaton */}
        <DeleteConfirmationDialogModal
          deletionId={productToDeleteId}
          deleteConfirmationDialogOpen={deleteConfirmationDialogOpen}
          setDeleteConfirmationDialogOpen={setDeleteConfirmationDialogOpen}
          deleteConfirmed={deleteProduct}
          deleteConfirmationTitle={`Do you want to Delete this Product?`}
          deleteConfirmationText={`Are you sure! If you delete this Product.It will be permanently removed and this cannot be undone`}
        />
      </div>
    </div>
  );
}
