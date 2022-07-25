import { useRef } from 'react';
import './supplierList.css';

import supplierLogo from './supplierLogo.png';

import {Link} from 'react-router-dom';

function SupplierList() {
   
    return ( <div className="supplier-list">
      <div className="supplier-logo">
        <img src={supplierLogo} alt="supplier image" />
      </div>
      <div className="supplier-description">
        <div className="supplier-name">AutoCad technology pvt .ltd 
        <div>
          <Link to={`/Supplier/123`} style={{fontSize:"14px",color:"blue"}}>View Details</Link>
        </div>
        </div>
        <div className="supplier-country">India</div>
        <div className="supplier-email">autocad@gmail.com</div>
        <div className="supplier-address">
   <p>uttaranchal , New Delhi, solte street</p>
           
           
        </div>
        <div className="supplier-contact-number">
          <span>Contact No:</span>
          
          9869194591
        </div>
        <div className="supplier-pinCode">
              <span>Pin Code: 44600</span>
              {" "}
              <span>P.O Box: 458215</span>
            </div>

        <div className="supplier-details">
            we have been electronics goods including webcam ,drone, processor
            since 2000.We have branches in 25 countries across Asia
        </div>
      </div>
    </div> );
}

export default SupplierList;