import React , {useState} from 'react';
import { removeFromCartlist } from '../../api-calls/api-calls';
import { useCartlist } from '../../context/cart-context';
import './Cart.css';

export default function Cart() {
    let {cartState , cartDispatch} = useCartlist([]);
    let cartlist;
    console.log(cartlist)
    if(cartState.type === 'ADD_TO_CART'){
        cartlist = cartState.payload.cartlist
    }else if(cartState.type === 'REMOVE_FROM_CARTLIST'){
        cartlist = cartState.payload
    }

    const removeItemFromCartlist = async(product) => {
        const response = await removeFromCartlist(product);
        cartDispatch({type:'REMOVE_FROM_CARTLIST' , payload:response.cartlist.data.cart})
    }
    
  return (
    <>
    <div className="main-container">
        <div className="cart-container">
            <div className="selected-items-container">
            <h2 className='cart-container-heading'>Shopping Cart</h2>
              <div className="products">
              {cartlist && cartlist.map((item , index) => (
                  <div className="product" key={index}>
                  <i className="wishlist-icon lni lni-heart"></i>
                  <img className="product-img" src="https://www.trackandtrail.in/sites/default/files/styles/listing_image/public/romer3_0.png?itok=tePICCz7" alt="cycle-img"/>
                  <div className="product-details">
                     <div className="product-desc">DSA Roamer 20T Magic Blue</div>
                     <div className="product-price">MRP: ₹4,149 <span className='product-rating'>{item.rating}  <i className="lni lni-star-filled"></i></span></div>
                      <div className="item-quantity">
                         <button> + </button>
                         <div className="quantity"> 1 </div>
                         <button> - </button>
                      </div>
                  </div>
                  <div className="product-links">
                     <button className="product-btn">Know More</button>
                     <button className="product-btn" onClick={() => removeItemFromCartlist(item)}>Remove Item</button>
                  </div>
              </div> 
              ))}
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
