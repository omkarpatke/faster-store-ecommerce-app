import React from 'react';
import './ProductDetail.css';
import { useParams , useNavigate } from 'react-router-dom';
import { useProducts } from '../../context/Product-context';
import { useToastContext } from '../../context/toastContext';
import { useCartlist } from '../../context/cart-context';
import { addToCart , addToWishlist , removeFromWishlist } from '../../api-calls/api-calls';
import { useWishlist } from '../../context/wishlist-context';

export default function ProductDetail() {
  const { productId } = useParams();
  const { filteredData , setData } = useProducts();
  const { cartDispatch } = useCartlist();
  const { wishlistDispatch } = useWishlist();
  const notify = useToastContext();
  const currentProduct = filteredData.filter(item => item._id === productId)[0];
  const navigate = useNavigate();
  const { img, price, desc, rating, isAddedInWishlist, isItemAddedInCart } = currentProduct;
  const addItemToCartlist = async(product) => {
        const response = await addToCart(product);
        notify('Item Added In Cart' , {type:'info'});
        cartDispatch({type: 'ADD_TO_CART' , payload : response});
        setData(prev => ([...prev].map(item => item._id === product._id ? {...item ,isItemAddedInCart :true} : item)))
    } 

    const addItemToWishlist = async(product) => {
      const response = await addToWishlist(product);
      notify('Item Added In Wishlist' , {type:'info'});
      wishlistDispatch({type: 'ADD_TO_WISHLIST' , payload : response.wishlist});
      setData(prev => ([...prev].map(item => item._id === product._id ? {...item ,isAddedInWishlist:true} : item)))    
    }

    const removeItemFromWishlist = async(product) => {
      const response = await removeFromWishlist(product);
      notify('Item Remove From Wishlist' , {type:'info'});
      wishlistDispatch({type: 'REMOVE_FROM_WISHLIST' , payload: response.wishlist})
      setData(prev => ([...prev].map(item => item._id === product._id ? {...item ,isAddedInWishlist:false} : item)))
    }
  


  return (
    <>
    <div className='product-detail-container'>
      <div className="img-setion">
      <img className='single-product-img' src={img} alt="cycle-img" />
      </div>
      <div className="product-info-section">
        <h1>{desc}</h1>
        <div className="product-price">MRP: ₹{price} <span className='product-rating'>{rating}  <i className="lni lni-star-filled"></i></span></div>
        <div className="product-detail-btns">
        {isItemAddedInCart
           ? <button className="product-btn" onClick={() => navigate('/cart')}>Go To Cart</button>
           : <button className="product-btn" onClick={() => addItemToCartlist(currentProduct)}>Add To Cart</button>
        }
        {isAddedInWishlist
           ? <button className="product-btn" onClick={() => removeItemFromWishlist(currentProduct)}> Remove From Wishlist </button>
           : <button className='product-btn' onClick={() => addItemToWishlist(currentProduct)}> Add to Wishlist </button>
        }
        
        </div>
      </div>
    </div>
    </>
  )
}
