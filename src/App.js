import "./App.css";
import Home from "./pages/HomePage/Home";
import ProductListing from "./pages/ProductListingPage/ProductListing";
import Cart from './pages/Cart/Cart';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import WishList from './pages/WishList/WishList';
import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/products' exact element={<ProductListing />} />
        <Route path='/wishlist' exact element={<WishList />} />
        <Route path='/sign-in' exact element={<SignIn />} />
        <Route path='/sign-up' exact element={<SignUp />} />
        <Route path='/cart' exact element={<Cart />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
