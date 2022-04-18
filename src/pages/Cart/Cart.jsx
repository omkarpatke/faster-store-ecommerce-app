import React , {useState , useEffect} from 'react';
import { addToWishlist, removeFromCartlist } from '../../api-calls/api-calls';
import { useCartlist } from '../../context/cart-context';
import { useProducts } from '../../context/Product-context';
import { useWishlist } from '../../context/wishlist-context';
import { Link } from 'react-router-dom';
import './Cart.css';


export default function Cart() {
    let {cartState , cartDispatch} = useCartlist();
    let [cartData , setCartData] = useState([]);
    let [totalItemPrice , setTotalItemsPrice] = useState(0);
    let [totalDiscountPrice , setTotalDiscountPrice] = useState(0);
    let [deliveryCharges , setDeliveryCharges] = useState(0);
    let [totalAmount , setTotalAmount] = useState(0);
    let {setData} = useProducts();
    const {wishlistDispatch} = useWishlist();

    
    useEffect(() => {
        if(cartState.type === 'ADD_TO_CART'){
            setCartData(cartState.payload.cartlist)
        }else if(cartState.type === 'REMOVE_FROM_CARTLIST'){
            setCartData(cartState.payload)
        }
    },[cartState])


    const increment = (id) => {
        let newData = cartData.map((item) => 
         item.id === id ? {...item , quantity: item.quantity + 1 }: item
        )
        setCartData(newData) 
     }
 
    const decrement = (id) => {
     let newData = cartData.map((item) => 
         item.id === id ? {...item , quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity }: item
        )
        setCartData(newData) 
    }

    useEffect(() => {
        const getAllItemsPrice = () => {
            const result = [...cartData].reduce((accu , current) => {
                return  accu + current.price * current.quantity
            },0)
        setTotalItemsPrice(result);    
        }
        getAllItemsPrice();


        const getAllDiscountPrice = () => {
            const result = [...cartData].reduce((accu , current) => {
                return  accu +  current.quantity * 500
            },0)
            setTotalDiscountPrice(result);    
        }
        getAllDiscountPrice();

        const getDeliveryCharges = () => {
            const result = [...cartData].reduce((accu , current) => {
                return  accu + current.quantity * 100
            },0)
            setDeliveryCharges(result);    
        }
        getDeliveryCharges();

        const getTotalAmount = () => {
            setTotalAmount(totalItemPrice - totalDiscountPrice + deliveryCharges)
        }
        getTotalAmount();
    },[cartData ,deliveryCharges ,totalDiscountPrice , totalItemPrice]);

    
    const removeItemFromCartlist = async(product) => {
        const response = await removeFromCartlist(product);
        cartDispatch({type:'REMOVE_FROM_CARTLIST' , payload:response.cartlist.data.cart})
      }

      const addItemToWishlist = async(product) => {
        const response = await addToWishlist(product);
        wishlistDispatch({type: 'ADD_TO_WISHLIST' , payload : response.wishlist});
        setData(prev => ([...prev].map(item => item._id === product._id ? {...item ,isAddedInWishlist:true} : item)))
        removeItemFromCartlist(product)
    }
    
  return (
    <>
    <div className="main-container">
        <div className="cart-container">
            <div className="selected-items-container">
            <h2 className='cart-container-heading'>Shopping Cart ({cartData.length})</h2>
              <div className="products">
              {cartData && cartData.map((item , index) => (
                  <div className="product" key={index}>
                  <i className='lni lni-heart' id="product-wishlist-icon" onClick={() => addItemToWishlist(item)}></i>
                  <img className="product-img" src={item.img} alt="cycle-img"/>
                  <div className="product-details">
                     <div className="product-desc">{item.desc}</div>
                     <div className="product-price">MRP: ₹{item.price} <span className='product-rating'>{item.rating}  <i className="lni lni-star-filled"></i></span></div>
                      <div className="item-quantity">
                         <button onClick={() => increment(item.id)}> + </button>
                         <div className="quantity">{item.quantity}</div>
                         <button onClick={() => decrement(item.id)}> - </button>
                      </div>
                  </div>
                  <div className="product-links">
                     <Link className="product-btn" to={`/products/${item._id}`}>KNOW MORE</Link>
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
                        <p className="price">Price ({cartData.length} items) </p>
                        <div className="value">₹ {totalItemPrice}</div>
                    </div>
                    <div className="summary-items">
                        <p className="price">Discount</p>
                        <div className="value">₹ {totalDiscountPrice}</div>
                    </div>
                    <div className="summary-items">
                        <p className="price">Delivery Charges</p>
                        <div className="value">₹ {deliveryCharges}</div>
                    </div>
                   
                    <div className="total-amount">
                        <p>Total Amount</p>
                        <div>₹ {totalAmount}</div>
                    </div>
                    <button className="proceed-to-checkout-btn">Proceed To Checkout</button>
                </div>
        </div>
    
            </div>

            </div>
    </>
  )
}
