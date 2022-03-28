import React from 'react';
import { removeFromWishlist } from '../../api-calls/api-calls';
import { useWishlist } from '../../context/wishlist-context';
import './WishList.css';

export default function WishList() {
    let {wishlistState , wishlistDispatch} = useWishlist();
    let wishlist
    if(wishlistState.type === 'ADD_TO_WISHLIST' || wishlistState.type === 'REMOVE_FROM_WISHLIST'){
      wishlist = wishlistState.payload
    }

    const removeItemFromWishlist = async(product) => {
      const response = await removeFromWishlist(product);
      wishlistDispatch({type: 'REMOVE_FROM_WISHLIST' , payload: response.wishlist})
    }


  return (
    <>
    <div className="wishlist-main-container">
        <div className="wishlist-container">
            <h1 className="wishlist-heading">Wishlist</h1>
            <div className="wishlist-items">
                {wishlist && wishlist.map((product , index) => (
                    <div className="product" key={index}>
                    <p className='wishlist-remove-btn' onClick={() => removeItemFromWishlist(product)}>X</p>
                    <img className="product-img" src={product.img} alt="cycle-img"/>
                    <div className="product-desc">{product.desc}</div>
                    <div className="product-price">MRP: ₹{product.price} <span className='product-rating'>{product.rating}  <i className="lni lni-star-filled"></i></span></div>
                    <div className="product-links">
                        <button className="product-btn">KNOW MORE</button>
                        <button className="product-btn">Add To Cart</button>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    </>
  )
}
