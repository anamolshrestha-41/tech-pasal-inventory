import { useRef } from 'react';
import './supplierList.css';

import supplierLogo from './supplierLogo.png';

import {Link} from 'react-router-dom';
import { getSupplierNameAndImage } from '../../controllers/supplierController';

function SupplierList(props) {
   const {name,email,country,supplierId,state,city,street,pinCode,poBox,supplierDetails,supplierImage,contactNo}=props;
    return ( <div className="supplier-list">
      <div className="supplier-logo">
        <img src={supplierImage.image_url} alt="supplier image" />
      </div>
      <div className="supplier-description">
        <div className="supplier-name">{name}
        <div>
          <Link to={`/Supplier/${supplierId}`} style={{fontSize:"14px",color:"blue"}}>View Details</Link>
        </div>
        </div>
        <div className="supplier-country">{country}</div>
        <div className="supplier-email">{email}</div>
        <div className="supplier-address">
   <p>{state} ,{city}, {street} </p>
           
           
        </div>
        <div className="supplier-contact-number">
          <span>Contact No:</span>
          
         {contactNo}
        </div>
        <div className="supplier-pinCode">
              <span>Pin Code: {pinCode}</span>
              {" "}
              <span>P.O Box: {poBox}</span>
            </div>

        <div className="supplier-details">
           {supplierDetails}
        </div>
      </div>
    </div> );
}

export default SupplierList;