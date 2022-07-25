import "./customerList.css";
import customerImage from "../../demo/customerImage.jpg";

import * as React from "react";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Avatar, Stack, Typography } from "@mui/material";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

function CustomerList() {
  return (
    <div className="customer-list">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width:"99%",
        minWidth:"680px",
       
          height: "100%",
          justifyContent:"space-between",

          border: (theme) => `1px solid ${theme.palette.divider}`,
          borderRadius: 1,
          bgcolor: "background.paper",
          color: "text.secondary",
          "& svg": {
            m: 1.5,
          },
          "& hr": {
            mx: 0.5,
          },
        }}
      >
        <Typography
          component={Stack}
          direction="column"
          alignItems="center"
          color="black"
          fontSize={16}
          padding={5}
          maxWidth={100}
          gap={2}
        >
          <Avatar sx={{ width: 100, height: 100 }} src={customerImage} />
          Jagadish Shrestha
        </Typography>

        <Divider orientation="vertical" variant="middle" flexItem />

        <Typography
          component={Stack}
          direction="column"
           alignSelf="center"
          color="black"
          fontSize={20}
          padding={0}
          maxWidth={200}
          justifyContent="center"
         
        >
          <Typography  variant="subtitle1" gutterBottom component="div" >
            Contact Information
          </Typography>
          <Typography variant="subtitle2" gutterBottom component="div">
            jagadish.sta@gmail.com
          </Typography>
          <Typography variant="subtitle2" gutterBottom component="div">
           +977 9869194591
          </Typography>
        </Typography>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Typography
          component={Stack}
          direction="column"
           alignSelf="center"
          color="black"
          fontSize={20}
          padding={0}
          maxWidth={200}
          justifyContent="center"
         
        >
          <Typography  variant="subtitle1" gutterBottom component="div" >
            Shipping Address
          </Typography>
          <Typography variant="subtitle2" gutterBottom component="div">
            sankhu,kathmandu,Bagmati
          </Typography>
          <Typography variant="subtitle2" gutterBottom component="div">
          Pan No:2354 5687 5797
          </Typography>
        </Typography>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Typography
          component={Stack}
          direction="column"
           alignSelf="center"
          color="black"
          fontSize={20}
          padding={2}
          maxWidth={200}
          justifyContent="center"
          paddingRight={3}
         
        >
          <Typography  variant="subtitle1" gutterBottom component="div" >
            Account Status
          </Typography>
          <Typography variant="subtitle2" gutterBottom component="div"sx={{display:"flex"}} alignItems="center">
           <VerifiedUserIcon sx={{width:15,height:15,}}/> verified
          </Typography>
          <Typography color="green" variant="subtitle2" gutterBottom component="div">
   active
          </Typography>
        </Typography>
      </Box>
    </div>
  );
}

export default CustomerList;
