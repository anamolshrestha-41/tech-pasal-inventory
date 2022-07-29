import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import productImageLogo from "../../demo/productImage.jpg";

export default function ProductItemCard(props) {
  const {image,name,brand,price}=props;
  return (
    <Card sx={{ maxWidth: 250,height:"400px" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="250px"
      
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Brand:{brand}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price:Nrs.{price}
        </Typography>
      </CardContent>
    </Card>
  );
}


