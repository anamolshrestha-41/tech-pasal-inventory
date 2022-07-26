
import {Routes,Route} from 'react-router-dom';
import Alert from './components/alert/alert';
import Analytics from './components/analytics/analytics';
import CustomerDetails from './components/customerDetails/customerDetails';
import Customers from './components/customers/customers';
import Dashboard from './components/dashboard/dashboard';
import ImportProducts from './components/importProducts/importProducts';
import ManageBusiness from './components/manageBusiness/manageBusiness';
import MyOrderDetails from './components/myOrderDetails/myOrderDetails';
import MyOrders from './components/myOrders/myOrders';
import OrderDetails from './components/orderDetails/orderDetails';
import Orders from './components/orders/orders';
import ProductDetails from './components/productDetails/productDetails';
import Products from './components/products/products';
import SupplierDetails from './components/supplierDetails/supplierDetails';

import Suppliers from './components/suppliers/suppliers';



// inside dashboard component
function MainRouter() {
    
    return ( <div>
        <Routes>
            <Route exact path='/Home' element={<Dashboard/>}></Route>
            <Route exact path='/Suppliers' element={<Suppliers/>}></Route>
            <Route exact path='/Import%20products' element={<ImportProducts/>}></Route>
            <Route exact path='/Products' element={<Products/>}></Route>
            <Route exact path='/Orders' element={<Orders/>}></Route>
            <Route exact path='/Analytics' element={<Analytics/>}></Route>
            <Route exact path='/My%20Orders' element={<MyOrders/>}></Route>
            <Route exact path='/Customers' element={<Customers/>}></Route>
            <Route exact path='/Customer/:customerId' element={<CustomerDetails/>}></Route>
            <Route exact path='/Order/:orderId' element={<OrderDetails/>}></Route>
            <Route exact path='/MYOrder/:myOrderId' element={<MyOrderDetails/>}></Route>
            <Route exact path='/Product/:productId' element={<ProductDetails/>}></Route>
            <Route exact path='/Supplier/:supplierId' element={<SupplierDetails/>}></Route>
            <Route exact path='/Manage%20Business' element={<ManageBusiness/>}></Route>
            <Route exact path='/Alert' element={<Alert/>}></Route>
            
        </Routes>
    </div> );
}

export default MainRouter;