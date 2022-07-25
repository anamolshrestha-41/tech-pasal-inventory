import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import productImageLogo from "../../demo/productImage.jpg";

export default function ProductItemCard() {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="250"
        image={productImageLogo}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Samsung F22
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Brand:Samsung
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price:Nrs.10000
        </Typography>
      </CardContent>
    </Card>
  );
}
