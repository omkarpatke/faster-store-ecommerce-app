import React from 'react';
import './ProductDetail.css';
import { useParams , useNavigate } from 'react-router-dom';
import { useProducts, useToastContext } from '../../context/index';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../../store/cartSlice';
import { addProductToWishlist, removeProductFromWishlist } from '../../store/wishlistSlice';
import { Navbar } from '../../components';

export function ProductDetail() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { filteredData , setData } = useProducts();
  const notify = useToastContext();
  const currentProduct = filteredData.filter(item => item._id === productId)[0];
  const navigate = useNavigate();
  const { img, price, desc, rating, isAddedInWishlist, isItemAddedInCart } = currentProduct;

  const addItemToCartlist = (product) => {
        dispatch(addProductToCart(product));
        notify('Item Added In Cart' , {type:'success'});
        setData(prev => ([...prev].map(item => item._id === product._id ? {...item ,isItemAddedInCart :true} : item)))
    } 

    const addItemToWishlist = (product) => {
      dispatch(addProductToWishlist(product));
      notify('Item Added In Wishlist' , {type:'success'});
      setData(prev => ([...prev].map(item => item._id === product._id ? {...item ,isAddedInWishlist:true} : item)))    
    }

    const removeItemFromWishlist = (product) => {
      dispatch(removeProductFromWishlist(product._id));
      notify('Item Remove From Wishlist' , {type:'success'});
      setData(prev => ([...prev].map(item => item._id === product._id ? {...item ,isAddedInWishlist:false} : item)))
    }
  


  return (
    <>
    <Navbar showSearchBar={false} />
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
