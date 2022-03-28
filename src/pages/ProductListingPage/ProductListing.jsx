import { addToWishlist, getWishlist } from '../../api-calls/api-calls';
import { useProducts } from '../../context/Product-context';
import { useWishlist } from '../../context/wishlist-context';
import {useEffect  , useState} from 'react'
import './ProductListing.css';


export default function ProductListing() {
    const {loading ,dispatch , genderFilterData} = useProducts();
    const {wishlistDispatch} = useWishlist();
    const [wishlist , setWishlist] = useState([]);
    const [color , setColor] = useState('');

const resetBtns = () => {
    window.location.reload();
}

const addItemToWishlist = async(product) => {
    const response = await addToWishlist(product);
    wishlistDispatch({type: 'ADD_TO_WISHLIST' , payload : response.wishlist});
    setWishlist(product);
    filteredData = filteredData.map(item => item.id === product.id ? setColor('red') : setColor(''))
}

useEffect(() => {
  const response = getWishlist();
  wishlistDispatch({type: 'WISHLIST' , payload: response.wishlist});
},[wishlist])



  let filteredData = genderFilterData();
    
  return (
    <>
    <div className="cycles-main-container">
       <div className="filter-container">
           <h2 className="filter-name">FILTER <span><button className='clear-button' onClick={resetBtns}>Clear</button></span></h2>
           <div className="filters">

           <div className="filter range">
               <h2>Price Range</h2>
                <input type="range"
                name="cycle-range"
                id="cycle-range"
                min='8000'
                max='30000'
                onClick={(e) => dispatch({type:'RANGE' , payload:e.target.value})}
                />
           </div>
           

           <div className="filter sort-filter">
               <h3>Sort</h3>
               <div className="radio-input">
                <input 
                id='low_to_high'
                type="radio"
                name="sort"
                onClick={(e) => dispatch({type:'LOW_TO_HIGH' , payload:'low_to_high' , value: e.target.checked})}
                  />
                <label htmlFor="low_to_high">low-to-high</label>
               </div>

               <div className="radio-input">
                <input 
                id='high_to_low'
                type="radio" 
                name="sort"
                onClick={() => dispatch({type:'HIGH_TO_LOW' , payload:'high_to_low'})}
                />
                <label htmlFor="high_to_low">high-to-low</label>
               </div>
           </div>
           
           <div className="filter rating-filter">
               <h3>Ratings</h3>
               <div className="check-box-input">
                <input 
                id='4STAR'
                type="checkbox"
                onClick={(e) => dispatch({type:'4STAR' , payload:e.target.checked})}
                />
                <label htmlFor="4STAR"> 4 Star &Above</label>
               </div>

               <div className="check-box-input">
                <input 
                id='3STAR'
                type="checkbox"
                onClick={(e) => dispatch({type:'3STAR' , payload:e.target.checked})}
                />
                <label htmlFor="3STAR"> 3 Star &Above</label>
               </div>

               <div className="check-box-input">
                <input
                id='2STAR' 
                type="checkbox"
                onClick={(e) => dispatch({type:'2STAR' , payload:e.target.checked})}
                />
                <label htmlFor="2STAR"> 2 Star &Above</label>
               </div>

               <div className="check-box-input">
                <input 
                id='1STAR'
                type="checkbox"
                onClick={(e) => dispatch({type:'1STAR' , payload:e.target.checked})}
                />
                <label htmlFor="1STAR"> 1 Star &Above</label>
               </div>
           </div>

           <div className="filter brands-filter-input">
            <h3>Brands</h3>
            <div className="check-box-input">
                <input 
                id='HERCULES'
                type="checkbox"
                onClick={(e) => dispatch({type:'HERCULES' , payload:e.target.checked})}
                />
                <label htmlFor="HERCULES">Hercules</label>
            </div>
            <div className="check-box-input">
                <input 
                id='MACH CITY'
                type="checkbox"
                onClick={(e) => dispatch({type:'MACH CITY' , payload:e.target.checked})}
                />
                <label htmlFor="MACH CITY">Mach City</label>
            </div>
            <div className="check-box-input">
                <input
                id='MONTRA' 
                type="checkbox"
                onClick={(e) => dispatch({type:'MONTRA' , payload:e.target.checked})}
                />
                <label htmlFor="MONTRA">Montra</label>
            </div>
            <div className="check-box-input">
                <input 
                id='ROADEO'
                type="checkbox"
                onClick={(e) => dispatch({type:'ROADEO' , payload:e.target.checked})}
                />
                <label htmlFor="ROADEO">Roadeo</label>
            </div>
            <div className="check-box-input">
                <input 
                id='BSA LADYBIRD'
                type="checkbox"
                onClick={(e) => dispatch({type:'BSA LADYBIRD' , payload:e.target.checked})}
                />
                <label htmlFor="BSA LADYBIRD">BSA Ladybird</label>
            </div>
           </div>
          

           <div className="filter bike-type-filter">
            <h3>Bike Type</h3>
            <div className="radio-input">
                <input 
                id='CITY_BIKES'
                type="radio" 
                name="bike-type"
                onClick={() => dispatch({type: 'CITY_BIKES' ,payload : 'CITY_BIKES'})}
                />
                <label htmlFor="CITY_BIKES">City Bikes</label>
            </div>

            <div className="radio-input">
                <input
                id='KIDS_BIKES' 
                type="radio" 
                name="bike-type"
                onClick={() => dispatch({type: 'KIDS_BIKES',payload : 'KIDS_BIKES'})}
                />
                <label htmlFor="KIDS_BIKES">Kids Bikes</label>
            </div>

            <div className="radio-input">
                <input 
                id='MOUNTAIN_BIKES'
                type="radio" 
                name="bike-type"
                onClick={() => dispatch({type:'MOUNTAIN_BIKES',payload : 'MOUNTAIN_BIKES'})}
                />
                <label htmlFor="MOUNTAIN_BIKES">Mountian Bikes</label>
            </div>
           </div>
          

           <div className="filter gender-filter">
            <h3>Gender</h3>
            <div className="gender-checkbox-input">
                <input
                id='MALE' 
                type="checkbox" 
                name="gender"
                onClick={(e) => dispatch({type:'MALE', payload : e.target.checked})}
                />
                <label htmlFor="MALE">Male</label>
            </div>

            <div className="gender-checkbox-input">
                <input 
                id='FEMALE'
                type="checkbox" 
                name="gender"
                onClick={(e) => dispatch({type:'FEMALE', payload : e.target.checked})}
                />
                <label htmlFor="FEMALE">Female</label>
            </div>
           </div>
   
          </div>
        </div>

       <div className="products-container">
           {loading ? 'Loading...' :
           filteredData.map((product) => (
              <div className="product" key={product.id}>
                 <i className='lni lni-heart' id="product-wishlist-icon" onClick={() => addItemToWishlist(product)} style={{backgroundColor:color}}></i>
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
    </>
  )
}
