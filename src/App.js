import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/Navigation/Navigation';
import HomePage from './customer/pages/HomePage/HomePage';
import Footer from './customer/components/Footer/Footer';
import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/components/Checkout/Checkout';
import DeliveryAddressForm from './customer/components/Checkout/DeliveryAddressForm';
import OrderSummary from './customer/components/Checkout/OrderSummary';
import CartItem from './customer/components/Cart/CartItem';
import AddressCard from './customer/components/AddressCard/AddressCard';
import Order from './customer/components/Order/Order';
import OrderDetails from './customer/components/Order/OrderDetails';
import { Route, Routes } from 'react-router-dom';
import CustomerRouters from './customer/Routers/CustomerRouters';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/*' element={<CustomerRouters/>}></Route>
      </Routes>

      <div>
        <OrderDetails/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
