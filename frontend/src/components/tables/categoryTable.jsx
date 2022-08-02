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
import { useState } from "react";
import { useEffect } from "react";
import { getCompleteCategoriesDetails } from "../../controllers/categoryController";



export default function CategoryTable(props) {

    const {categoryList}=props;







  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth:200 }}
        size="small"
        aria-label="custom pagination table"
      >
        <TableHead>
          <TableRow>
            <TableCell>Category</TableCell>
            <TableCell>VAT%</TableCell>
            <TableCell>Profit%</TableCell>
            <TableCell>Custom Duty%</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
            {
                      categoryList.map((row) => (
            <TableRow
              key={row.categoryId}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell >{row.name}</TableCell>
              <TableCell >
                {row.vat}
              </TableCell>
              <TableCell >
                {row.profit}
              </TableCell>
              <TableCell >
                {row.customDuty}
              </TableCell>

             
            </TableRow>
          ))}

        
        </TableBody>
      </Table>
    </TableContainer>
  );
}
