import React from 'react';
import { useProducts } from '../../context/index';
import { Link } from 'react-router-dom';
import './WishList.css';
import { useSelector , useDispatch } from 'react-redux';
import { removeProductFromWishlist } from '../../store/wishlistSlice';
import { addProductToCart } from '../../store/cartSlice';
import { Navbar } from '../../components';

export function WishList() {
    let { setData } = useProducts();
    const dispatch = useDispatch();
    const  { wishlist }  = useSelector(state => state);
  
    

    const removeItemFromWishlist = (product) => {
      dispatch(removeProductFromWishlist(product._id));
      setData(prev => ([...prev].map(item => item._id === product._id ? {...item ,isAddedInWishlist:false} : item)))
    }

    const addItemToCartlist = (product) => {
      dispatch(addProductToCart(product));
      dispatch(removeProductFromWishlist(product._id));
      setData(prev => ([...prev].map(item => item._id === product._id ? {...item ,isItemAddedInCart :true} : item)));
    }




  return (
    <>
    <Navbar showSearchBar={false}/>
    <div className="wishlist-main-container">
        <div className="wishlist-container">
            <h1 className="wishlist-heading">Wishlist ({wishlist.length})</h1>
            <div className="wishlist-items">
                {wishlist && wishlist.map((product , index) => (
                    <div className="product" key={index}>
                    <p className='wishlist-remove-btn' onClick={() => removeItemFromWishlist(product)}>X</p>
                    <img className="product-img" src={product.img} alt="cycle-img"/>
                    <div className="product-desc">{product.desc}</div>
                    <div className="product-price">MRP: ₹{product.price} <span className='product-rating'>{product.rating}  <i className="lni lni-star-filled"></i></span></div>
                    <div className="product-links">
                        <Link className="product-btn" to={`/products/${product._id}`}>KNOW MORE</Link>
                        <button className="product-btn" onClick={() => addItemToCartlist(product)}>Add To Cart</button>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    </>
  )
}
