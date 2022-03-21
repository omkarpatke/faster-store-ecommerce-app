import "./App.css";
import Home from "./pages/HomePage/Home";
import ProductListing from "./pages/ProductListingPage/ProductListing";
import Cart from './pages/Cart/Cart';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import WishList from './pages/WishList/WishList';
import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <ProductListing />
      <Cart />
      <SignIn />
      <SignUp />
      <WishList />
      <Footer />
    </div>
  );
}

export default App;
