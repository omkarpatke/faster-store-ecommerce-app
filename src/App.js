import "./App.css";
import Home from "./pages/HomePage/Home";
import ProductListing from "./pages/ProductListingPage/ProductListing";
import Cart from './pages/Cart/Cart';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import WishList from './pages/WishList/WishList';
import ProductDetail from './pages/ProductDetailPage/ProductDetail';
import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';
import { Routes, Route } from "react-router-dom";
import Mockman from 'mockman-js';
import { RequiresAuth } from "./components/RequiresAuth";
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
      <Footer />

      <ToastContainer 
      position="top-right"
      autoClose='1200'
      theme="colored"
      />
    </div>
  );
}

export default App;
