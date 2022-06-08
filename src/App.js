import "./App.css";
import { ProductDetail, WishList, SignUp, SignIn, Cart, ProductListing, Home } from './pages/index';
import {Navbar, Footer, RequiresAuth } from './components/index';
import { Routes, Route } from "react-router-dom";
import Mockman from 'mockman-js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/products' exact element={<RequiresAuth><ProductListing /></RequiresAuth>} />
        <Route path='/products/:productId' exact element={<ProductDetail /> }/>
        <Route path='/wishlist' exact element={<RequiresAuth><WishList /></RequiresAuth>} />
        <Route path='/sign-in' exact element={<SignIn />} />
        <Route path='/sign-up' exact element={<SignUp />} />
        <Route path='/cart' exact element={<RequiresAuth><Cart /></RequiresAuth>} />
        <Route path='/mock' exact element={<Mockman />} />
      </Routes>
      <ToastContainer 
      position="top-right"
      autoClose='1200'
      theme="light"
      />
      <Footer />

      <ToastContainer 
      position="top-right"
      autoClose='1200'
      theme="light"
      />
    </div>
  );
}

export default App;
