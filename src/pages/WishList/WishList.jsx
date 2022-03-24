import React from 'react';
import './WishList.css';

export default function WishList() {
  return (
    <>
    <div className="wishlist-main-container">
        <div className="wishlist-container">
            <h1 className="wishlist-heading">Wishlist</h1>
            <div className="wishlist-items">
                <div className="product">
                    
                        <i className="lni lni-heart-filled wishlist-icon"></i>
                    
                    <img className="product-img" src="https://www.trackandtrail.in/sites/default/files/styles/listing_image/public/romer3_0.png?itok=tePICCz7" alt="cycle-img"/>
                    <div className="product-desc">DSA Roamer 20T Magic Blue</div>
                    <div className="product-price">MRP: ₹4,149</div>
                    <div className="product-links">
                        <button className="product-btn">KNOW MORE</button>
                        <button className="product-btn">Add To Cart</button>
                    </div>
                </div>

                <div className="product">
                    
                        <i className="lni lni-heart-filled wishlist-icon"></i>
                    
                    <img className="product-img" src="https://www.trackandtrail.in/sites/default/files/styles/listing_image/public/romer3_0.png?itok=tePICCz7" alt="cycle-img"/>
                    <div className="product-desc">DSA Roamer 20T Magic Blue</div>
                    <div className="product-price">MRP: ₹4,149</div>
                    <div className="product-links">
                        <button className="product-btn">KNOW MORE</button>
                        <button className="product-btn">Add To Cart</button>
                    </div>
                </div>


            </div>
        </div>
    </div>
    </>
  )
}
