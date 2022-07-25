import { Link } from 'react-router-dom';
import './outOfStock.css';
import outOfStockLogo from './outofstock.jpg';

function OutOfStockAlert(props) {
    const {productName}=props;
    return (<div className="out-of-stock-alert">
        <div className="alert-logo">
            <img src={outOfStockLogo} alt="out of stock" />
        </div>
        <div className="out-of-stock-alert-description">
          
            {productName} has been sold out completely
        </div>
    </div>  );
}

export default OutOfStockAlert;


