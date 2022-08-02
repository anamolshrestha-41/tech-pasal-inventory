import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { getCompleteCategoriesDetails } from '../../controllers/categoryController';
import CreateNewCategoryForm from '../category/createCategotyForm';
import CategoryTable from '../tables/categoryTable';
import './manageBusiness.css';
import ManageBusinessUpdateBlock from './manageBusinessUpdateBlock/manageBusinessUpdateBlock';


function ManageBusiness() {
 
    const[categoryList,setCategoryList]=useState(null);
    const[createConfirmationDialogOpen,setCreateConfirmationDialogOpen]=useState(false);
    const[isUpdate,setIsUpdate]=useState(false);
  

    const handleOnCreateConfirmatonClick = () => {
        setCreateConfirmationDialogOpen(true);
       };



    useEffect(()=>{
    getCompleteCategoriesDetails().then(data=>{
        console.log(data);
        setCategoryList(data);
    });
    console.log("repeated");
    },[isUpdate])

    if(!categoryList){
        return <div>loading</div>
    }


    return ( <div className="manageBusiness">
        <div className="manage-business-bar">
            <div className="manage-business-bar-item">
               <CategoryTable categoryList={categoryList}/>
            </div>
            <div className="manage-business-bar-item">
            <ManageBusinessUpdateBlock businessBlockName="VAT" currentBlockMargin="10" categoryList={categoryList} setCategoryList={setCategoryList} isUpdate={isUpdate} setIsUpdate={setIsUpdate} />
            </div>
         
        </div>

        <div><Button variant='contained' color='primary' onClick={handleOnCreateConfirmatonClick}>create category</Button></div>
        <div className="manage-business-bar" >
            <div className="manage-business-bar-item" >
            <ManageBusinessUpdateBlock businessBlockName="CustomDuty" currentBlockMargin="10" categoryList={categoryList} setCategoryList={setCategoryList} isUpdate={isUpdate} setIsUpdate={setIsUpdate}/>
            </div>
            <div className="manage-business-bar-item">
            <ManageBusinessUpdateBlock businessBlockName="Profit" currentBlockMargin="10" categoryList={categoryList} setCategoryList={setCategoryList} isUpdate={isUpdate} setIsUpdate={setIsUpdate}/>
            </div>
        </div>






        <div>
  {/* update product form */}
  <CreateNewCategoryForm
  createConfirmationDialogOpen={createConfirmationDialogOpen}
  setCreateConfirmationDialogOpen={setCreateConfirmationDialogOpen}
  isUpdate={isUpdate}
  setIsUpdate={setIsUpdate}
  setCategoryList={setCategoryList}

  />
</div>



    </div> );
}

export default ManageBusiness;