import './myOrderAlert.css';

import myOrderAlertLogo from './myorderalertlogo.png';

function MyOrderAlert(props) {
    const {productName,productStock}=props;
    return (<div className="my-order-alert">
        <div className="my-order-alert-logo">
            <img src={myOrderAlertLogo} alt="my order alert" />
        </div>
        <div className="my-order-alert-description">
          
           Time to order. Only {productStock} units of {productName} left in stock.
        </div>
    </div>  );
}

export default MyOrderAlert;