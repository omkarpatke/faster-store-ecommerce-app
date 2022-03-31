import React , {useState , useEffect} from 'react';
import { addToCart, removeFromWishlist } from '../../api-calls/api-calls';
import { useCartlist } from '../../context/cart-context';
import { useProducts } from '../../context/Product-context';
import { useWishlist } from '../../context/wishlist-context';
import './WishList.css';

export default function WishList() {
    let {wishlistState , wishlistDispatch} = useWishlist();
    let [wishlist , setWishlist] = useState([]);
    let {setData} = useProducts();
    const {cartDispatch} = useCartlist();

    useEffect(() => {
      if(wishlistState.type === 'ADD_TO_WISHLIST' || wishlistState.type === 'REMOVE_FROM_WISHLIST'){
        setWishlist(wishlistState.payload)
      }
    },[wishlistState])
    

    const removeItemFromWishlist = async(product) => {
      const response = await removeFromWishlist(product);
      wishlistDispatch({type: 'REMOVE_FROM_WISHLIST' , payload: response.wishlist});
      setData(prev => ([...prev].map(item => item._id === product._id ? {...item ,isAddedInWishlist:false} : item)))
    }

    const addItemToCartlist = async(product) => {
      const response = await addToCart(product);
      cartDispatch({type: 'ADD_TO_CART' , payload : response});
      setData(prev => ([...prev].map(item => item._id === product._id ? {...item ,isItemAddedInCart :true} : item)))
      removeItemFromWishlist(product);
    }




  return (
    <>
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
                        <button className="product-btn">KNOW MORE</button>
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
