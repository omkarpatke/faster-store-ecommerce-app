import React , {useState , useEffect} from 'react';
import { useCartlist, useProducts } from '../../context/index';
import { Link, useNavigate } from 'react-router-dom';
import './Cart.css';
import { useDispatch , useSelector } from 'react-redux';
import { addProductQuantity, reduceProductQuantity, removeProductFromCart } from '../../store/cartSlice';
import { addProductToWishlist } from '../../store/wishlistSlice';
import { Navbar } from '../../components';


export function Cart() {
    let { cartDispatch} = useCartlist();
    const dispatch = useDispatch();
    const { cart } = useSelector(state => state);
    let [totalItemPrice , setTotalItemsPrice] = useState(0);
    let [totalDiscountPrice , setTotalDiscountPrice] = useState(0);
    let [deliveryCharges , setDeliveryCharges] = useState(0);
    let [totalAmount , setTotalAmount] = useState(0);
    let [totalItemsQuantity , setTotalItemsQuantity] = useState(0);
    let {setData} = useProducts();
    let navigate = useNavigate();



    const increment = (id) => {
        dispatch(addProductQuantity(id));
     }
 
    const decrement = (id) => {
        dispatch(reduceProductQuantity(id));
    }

    useEffect(() => {
        const getAllItemsPrice = () => {
            const result = [...cart].reduce((accu , current) => {
                return  accu + current.price * current.quantity
            },0)
        setTotalItemsPrice(result);    
        }
        getAllItemsPrice();

        const getAllItemsQuantity = () => {
            const result = [...cart].reduce((accu , current) => {
                return  accu + current.quantity
            },0)
        setTotalItemsQuantity(result);    
        }
        getAllItemsQuantity();



        const getAllDiscountPrice = () => {
            const result = [...cart].reduce((accu , current) => {
                return  accu +  current.quantity * 500
            },0)
            setTotalDiscountPrice(result);    
        }
        getAllDiscountPrice();

        const getDeliveryCharges = () => {
            const result = [...cart].reduce((accu , current) => {
                return  accu + current.quantity * 100
            },0)
            setDeliveryCharges(result);    
        }
        getDeliveryCharges();

        const getTotalAmount = () => {
            setTotalAmount(totalItemPrice - totalDiscountPrice + deliveryCharges)
        }
        getTotalAmount();
        cartDispatch({type:'CHECKOUT_DETAILS' ,payload: [cart ,deliveryCharges ,totalDiscountPrice , totalItemsQuantity, totalItemPrice, totalItemPrice - totalDiscountPrice + deliveryCharges]});
    },[cart ,deliveryCharges ,totalDiscountPrice , totalItemPrice , cartDispatch ,totalItemsQuantity]);

    
    const removeItemFromCartlist = (product) => {
        dispatch(removeProductFromCart(product._id));
        setData(prev => ([...prev].map(item => item._id === product._id ? {...item ,isItemAddedInCart:false} : item)));
      }

      const addItemToWishlist = (product) => {
        dispatch(addProductToWishlist(product));
        setData(prev => ([...prev].map(item => item._id === product._id ? {...item ,isAddedInWishlist:true} : item)))
        dispatch(removeProductFromCart(product._id));
    }
    
  return (
    <>
    <Navbar showSearchBar={false} />
    <div className="main-container">
        <div className="cart-container">
            <div className="selected-items-container">
            <h2 className='cart-container-heading'>Shopping Cart ({cart.length})</h2>
              <div className="products">
              {cart && cart.map((item , index) => (
                  <div className="product" key={index}>
                  <i className='lni lni-heart' id="product-wishlist-icon" onClick={() => addItemToWishlist(item)}></i>
                  <img className="product-img" src={item.img} alt="cycle-img"/>
                  <div className="product-details">
                     <div className="product-desc">{item.desc}</div>
                     <div className="product-price">MRP: ₹{item.price} <span className='product-rating'>{item.rating}  <i className="lni lni-star-filled"></i></span></div>
                      <div className="item-quantity">
                         <button onClick={() => increment(item._id)}> + </button>
                         <div className="quantity">{item.quantity}</div>
                         <button onClick={() => item.quantity < 2 ? '' : decrement(item._id)}> - </button>
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
                        <p className="price">Price ({totalItemsQuantity} items) </p>
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
                    <button className="proceed-to-checkout-btn" onClick={() => navigate('/checkout')}>Proceed To Checkout</button>
                </div>
        </div>
    
            </div>

            </div>
    </>
  )
}
