import "./alert.css";
import DeliveryAlert from "./deliverAlert/deliveralert";
import MyOrderAlert from "./myOrderAlert/myOrderAlert";
import OutOfStockAlert from "./outOfStockAlert/outOfStockAlert";

function Alert() {
  return (
    <div className="alert">
      <div className="alert-bar">
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
        <MyOrderAlert productName={`Samsumg F22`} productStock={`10`} />




        <OutOfStockAlert productName={`Samsumg F22`} />
        <DeliveryAlert
          productName={`Samsumg F22`}
          customerName={`Anupham Bhattrai`}
        />
        <MyOrderAlert productName={`Samsumg F22`} productStock={`10`} />
      </div>
    </div>
  );
}

export default Alert;
