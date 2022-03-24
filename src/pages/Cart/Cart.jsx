import React from 'react';
import './Cart.css';

export default function Cart() {
  return (
    <>
    <div className="main-container">
        <div className="cart-container">
            <div className="selected-items-container">
                <h2>Shopping Cart</h2>
                <div className="products">
                <div className="product">
                    
                    <i className="wishlist-icon lni lni-heart"></i>
                   
                   <img className="product-img" src="https://www.trackandtrail.in/sites/default/files/styles/listing_image/public/romer3_0.png?itok=tePICCz7" alt="cycle-img"/>
                   <div className="product-details">
                   <div className="product-desc">DSA Roamer 20T Magic Blue</div>
                   <div className="product-price">MRP: ₹4,149</div>
                   <div className="item-quantity">
                       <button> + </button>
                       <div className="quantity"> 1 </div>
                       <button> - </button>
                   </div>
                   <div className="product-links">
                       <button className="product-btn">Know More</button>
                       <button className="product-btn">Remove From Cart</button>
                   </div>
                   </div>
               </div>

               <div className="product">
                   
                    <i className="wishlist-icon lni lni-heart"></i>
                   
                   <img className="product-img" src="https://www.trackandtrail.in/sites/default/files/styles/listing_image/public/romer3_0.png?itok=tePICCz7" alt="cycle-img"/>
                   <div className="product-details">
                   <div className="product-desc">DSA Roamer 20T Magic Blue</div>
                   <div className="product-price">MRP: ₹4,149</div>
                   <div className="item-quantity">
                       <button> + </button>
                       <div className="quantity"> 1 </div>
                       <button> - </button>
                   </div>
                   <div className="product-links">
                   <button className="product-btn">Know More</button>
                       <button className="product-btn">Remove From Cart</button>
                   </div>
                   </div>
               </div>

               <div className="product">
                   
                    <i className="wishlist-icon lni lni-heart"></i>
                  
                   <img className="product-img" src="https://www.trackandtrail.in/sites/default/files/styles/listing_image/public/romer3_0.png?itok=tePICCz7" alt="cycle-img"/>
                   <div className="product-details">
                   <div className="product-desc">DSA Roamer 20T Magic Blue</div>
                   <div className="product-price">MRP: ₹4,149</div>
                   <div className="item-quantity">
                       <button> + </button>
                       <div className="quantity"> 1 </div>
                       <button> - </button>
                   </div>
                   <div className="product-links">
                   <button className="product-btn">Know More</button>
                   <button className="product-btn">Remove From Cart</button>
                   </div>
                   </div>
               </div>
                </div>
            </div>
     
            <div className="order-summary">
                <div className="summary-card">
                    <div className="summary-heading">Price Details</div>
                    
                    <div className="summary-items">
                        <p className="price">Price (3 items) </p>
                        <div className="value">₹ 12347</div>
                    </div>
                    <div className="summary-items">
                        <p className="price">Discount</p>
                        <div className="value">₹ 300</div>
                    </div>
                    <div className="summary-items">
                        <p className="price">Delivery Charges</p>
                        <div className="value">₹ 100</div>
                    </div>
                   
                    <div className="total-amount">
                        <p>Total Amount</p>
                        <div>₹ 12147</div>
                    </div>
                    <button className="proceed-to-checkout-btn">Proceed To Checkout</button>
                </div>
            </div>
        </div>
       
    </div>
    </>
  )
}
