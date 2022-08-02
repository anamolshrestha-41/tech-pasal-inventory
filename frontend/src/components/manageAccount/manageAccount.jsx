import { useContext, useEffect } from 'react';
import NotificationBar from '../notificationbar/notificationBar';

import './manageAccount.css';
import { UserContext } from '../../userContext';
import { render } from 'react-dom';

function ManageAccount() {

    const {adminControl}= useContext(UserContext); 
    const{isAdmin,setIsAdmin}=adminControl;
    console.log(adminControl);

    const handleClick=()=>{
     setIsAdmin(!isAdmin);
    }

    return ( <div className="manage-account">
       Coming soon
        
       
       
    </div> );
}

export default ManageAccount;