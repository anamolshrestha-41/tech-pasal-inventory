import { Link } from 'react-router-dom';
import './deliverAlert.css';
import deliverAlertLogo from './deliveralertlogo.png';

function DeliveryAlert(props) {
    const {productName,customerName}=props;
    return (<div className="deliver-alert">
        <div className="deliver-alert-logo">
            <img src={deliverAlertLogo} alt="deliver alert" />
        </div>
        <div className="deliver-alert-description">
          
           Did you deliver? The delivery deadline of {productName} to {customerName} is due today.
        </div>
    </div>  );
}

export default DeliveryAlert;


