import { ResetTvRounded } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { getLowStockProducts, getOutOfStockProducts } from "../../controllers/alertContoller";
import "./alert.css";
import DeliveryAlert from "./deliverAlert/deliveralert";
import MyOrderAlert from "./myOrderAlert/myOrderAlert";
import OutOfStockAlert from "./outOfStockAlert/outOfStockAlert";
import {Link} from 'react-router-dom';

function Alert() {
const[outOfStockProduct,setOutOfStockProduct]=useState(null);
const[lowStockProduct,setLowStockProduct]=useState(null);

useEffect(()=>{
getOutOfStockProducts().then(data=>{
  console.log(data);
  setOutOfStockProduct(data);
});


getLowStockProducts().then(data=>{
  console.log(data);
  setLowStockProduct(data);
});


},[])

// if(!outOfStockProduct || lowStockProduct ){
//   return <div>loading</div>
// }
  return (
    <div className="alert">
      <div className="alert-bar">






{
          outOfStockProduct && outOfStockProduct.map(product=>{
            return <Link to={`/Product/${product.productId}`} key={product.productId}>
             <OutOfStockAlert productName={product.productName} />
            </Link>
          })
        }
       
       
       {
          lowStockProduct && lowStockProduct.map(product=>{
            return <Link to={`/Product/${product.productId}`} key={product.productId}>
             <MyOrderAlert productName={product.productName} productStock={product.stock} />
            </Link>
          })
        }
       
{/*        
        <DeliveryAlert
          productName={`Samsumg F22`}
          customerName={`Anupham Bhattrai`}
        />
        <MyOrderAlert productName={`Samsumg F22`} productStock={`10`} />


        <OutOfStockAlert productName={`Samsumg F22`} />
        <DeliveryAlert
          productName={`Samsumg F22`}
          customerName={`Anupham Bhattrai`}
        />
        <MyOrderAlert productName={`Samsumg F22`} productStock={`10`} />




        <OutOfStockAlert productName={`Samsumg F22`} />
        <DeliveryAlert
          productName={`Samsumg F22`}
          customerName={`Anupham Bhattrai`}
        />
        <MyOrderAlert productName={`Samsumg F22`} productStock={`10`} /> */}
      </div>
    </div>
  );
}

export default Alert;
