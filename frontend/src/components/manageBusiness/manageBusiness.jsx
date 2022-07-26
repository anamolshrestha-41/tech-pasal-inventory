import './manageBusiness.css';
import ManageBusinessUpdateBlock from './manageBusinessUpdateBlock/manageBusinessUpdateBlock';


function ManageBusiness() {
    return ( <div className="manageBusiness">
        <div className="manage-business-bar">
            <div className="manage-business-bar-item">
                <ManageBusinessUpdateBlock businessBlockName="Profit" currentBlockMargin="10"/>
            </div>
            <div className="manage-business-bar-item">
            <ManageBusinessUpdateBlock businessBlockName="VAT" currentBlockMargin="10"/>
            </div>
        </div>
        <div className="manage-business-bar" >
            <div className="manage-business-bar-item" >
            <ManageBusinessUpdateBlock businessBlockName="Custom Duty" currentBlockMargin="10"/>
            </div>
            <div className="manage-business-bar-item">
            <ManageBusinessUpdateBlock businessBlockName="Discount" currentBlockMargin="10"/>
            </div>
        </div>
    </div> );
}

export default ManageBusiness;