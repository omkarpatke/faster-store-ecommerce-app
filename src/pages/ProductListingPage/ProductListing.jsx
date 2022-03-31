import { addToCart, addToWishlist, getCartlist, getWishlist ,removeFromWishlist} from '../../api-calls/api-calls';
import { useProducts } from '../../context/Product-context';
import { useWishlist } from '../../context/wishlist-context';
import {useEffect , useState} from 'react'
import './ProductListing.css';
import { useCartlist } from '../../context/cart-context';
import { useNavigate } from 'react-router-dom';


export default function ProductListing() {
  const [fourStar , setFourstar] = useState();
  const [threeStar , setThreestar] = useState();
  const [twoStar , setTwostar] = useState();
  const [oneStar , setOnestar] = useState();
  const [hurculesInput , setHurculesInput] = useState();
  const [montraInput , setMontraInput] = useState();
  const [machCityInput , setMachCityInput] = useState();
  const [roadeoInput , setRoadeoInput] = useState();
  const [bsaInput , setBsaInput] = useState();
  const [maleInput , setMaleInput] = useState();
  const [femaleInput , setFemaleInput] = useState();
  const [lowToHighInput , setLowToHighInput] = useState();
  const [highToLowInput , setHighToLowInput] = useState();
  const [cityBikeInput , setCityBikeInput] = useState();
  const [mountainBikeInput , setMountainBikeInput] = useState();
  const [kidBikeInput , setKidBikeInput] = useState();
  const [rangeInput , setRangeInput] = useState(8000);
  

  const {wishlistDispatch} = useWishlist();
  const {cartDispatch} = useCartlist();
  const {loading ,dispatch ,filteredData , setData} = useProducts();
  
  const navigate = useNavigate();

const resetBtns = () => {
    dispatch({type:'4STAR' , payload: false })
    setFourstar(false);
    setThreestar(false);
    setTwostar(false);
    setOnestar(false);
    setHurculesInput(false);
    setMachCityInput(false);
    setMontraInput(false);
    setRoadeoInput(false);
    setBsaInput(false);
    setMaleInput(false);
    setFemaleInput(false);
    setLowToHighInput(false);
    setHighToLowInput(false);
    setKidBikeInput(false);
    setMountainBikeInput(false);
    setCityBikeInput(false);
    setRangeInput(0);
}


const addItemToWishlist = async(product) => {
    const response = await addToWishlist(product);
    wishlistDispatch({type: 'ADD_TO_WISHLIST' , payload : response.wishlist});
    setData(prev => ([...prev].map(item => item._id === product._id ? {...item ,isAddedInWishlist:true} : item)))
}

 const removeItemFromWishlist = async(product) => {
    const response = await removeFromWishlist(product);
    wishlistDispatch({type: 'REMOVE_FROM_WISHLIST' , payload: response.wishlist})
    setData(prev => ([...prev].map(item => item._id === product._id ? {...item ,isAddedInWishlist:false} : item)))
  }


const addItemToCartlist = async(product) => {
    const response = await addToCart(product);
    cartDispatch({type: 'ADD_TO_CART' , payload : response});
    setData(prev => ([...prev].map(item => item._id === product._id ? {...item ,isItemAddedInCart :true} : item)))
}


useEffect(() => {
  const response = getWishlist();
  wishlistDispatch({type: 'WISHLIST' , payload: response.wishlist});
},[wishlistDispatch])


useEffect(() => {
    const response = getCartlist();
    cartDispatch({type: 'CARTLIST' , payload: response});
},[cartDispatch])


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
                value={rangeInput}
                onChange={(e) => {
                    dispatch({type:'RANGE' , payload:e.target.value})
                    setRangeInput(e.target.value)
                }}
                
                />
           </div>
           

           <div className="filter sort-filter">
               <h3>Sort</h3>
               <div className="radio-input">
                <input 
                id='low_to_high'
                type="radio"
                name="sort"
                checked={lowToHighInput}
                onClick={(e) => {
                    dispatch({type:'LOW_TO_HIGH' , payload:'low_to_high' , value: e.target.checked})
                    setLowToHighInput(true);
                    setHighToLowInput(false);
                }}
                  />
                <label htmlFor="low_to_high">low-to-high</label>
               </div>

               <div className="radio-input">
                <input 
                id='high_to_low'
                type="radio" 
                name="sort"
                checked={highToLowInput}
                onClick={() => {dispatch({type:'HIGH_TO_LOW' , payload:'high_to_low'})
                setLowToHighInput(false);
                setHighToLowInput(true);
            }}
                />
                <label htmlFor="high_to_low">high-to-low</label>
               </div>
           </div>
           
           <div className="filter rating-filter">
               <h3>Ratings</h3>
               <div className="check-box-input">
                <input 
                id='4STAR'
                type="radio"
                name='rating'
                checked={fourStar}
                onChange={(e) => {
                    dispatch({type:'4STAR' , payload:e.target.checked})
                    setFourstar(prev => !prev);
                    setThreestar(false);
                     setTwostar(false);
                     setOnestar(false);
                    }
                }
                />
                <label htmlFor="4STAR"> 4 Star &Above</label>
               </div>

               <div className="check-box-input">
                <input 
                id='3STAR'
                type="radio"
                name='rating'
                checked={threeStar}
                onClick={(e) =>{
                     dispatch({type:'3STAR' , payload:e.target.checked})
                     setThreestar(prev => !prev);
                     setFourstar(false);
                     setTwostar(false);
                     setOnestar(false);
                    }}
                />
                <label htmlFor="3STAR"> 3 Star &Above</label>
               </div>

               <div className="check-box-input">
                <input
                id='2STAR' 
                type="radio"
                name='rating'
                checked={twoStar}
                onClick={(e) => {
                    dispatch({type:'2STAR' , payload:e.target.checked})
                    setTwostar(prev => !prev);
                    setFourstar(false);
                     setThreestar(false);
                     setOnestar(false);
                }}
                />
                <label htmlFor="2STAR"> 2 Star &Above</label>
               </div>

               <div className="check-box-input">
                <input 
                id='1STAR'
                type="radio"
                name='rating'
                checked={oneStar}
                onClick={(e) => {
                    dispatch({type:'1STAR' , payload:e.target.checked})
                    setOnestar(prev => !prev);
                    setFourstar(false);
                     setTwostar(false);
                     setThreestar(false);
                }}
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
                checked={hurculesInput}
                onChange={(e) => {
                    dispatch({type:'HERCULES' , payload:e.target.checked})
                    setHurculesInput(prev => !prev);
                }}
                />
                <label htmlFor="HERCULES">Hercules</label>
            </div>
            <div className="check-box-input">
                <input 
                id='MACH CITY'
                type="checkbox"
                checked={machCityInput}
                onChange={(e) => {
                    dispatch({type:'MACH CITY' , payload:e.target.checked})
                    setMachCityInput(prev => !prev);
                }}
                />
                <label htmlFor="MACH CITY">Mach City</label>
            </div>
            <div className="check-box-input">
                <input
                id='MONTRA' 
                type="checkbox"
                checked={montraInput}
                onChange={(e) => {
                    dispatch({type:'MONTRA' , payload:e.target.checked})
                    setMontraInput(prev => !prev);
                }}
                />
                <label htmlFor="MONTRA">Montra</label>
            </div>
            <div className="check-box-input">
                <input 
                id='ROADEO'
                type="checkbox"
                checked={roadeoInput}
                onChange={(e) => {
                    dispatch({type:'ROADEO' , payload:e.target.checked})
                    setRoadeoInput(prev => !prev)
                }}
                />
                <label htmlFor="ROADEO">Roadeo</label>
            </div>
            <div className="check-box-input">
                <input 
                id='BSA LADYBIRD'
                type="checkbox"
                checked={bsaInput}
                onChange={(e) => {dispatch({type:'BSA LADYBIRD' , payload:e.target.checked})
                setBsaInput(prev => !prev);
            }}
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
                checked={cityBikeInput}
                onClick={() => {
                    dispatch({type: 'CITY_BIKES' ,payload : 'CITY_BIKES'})
                    setCityBikeInput(true);
                    setMountainBikeInput(false);
                    setKidBikeInput(false);
                }}
                />
                <label htmlFor="CITY_BIKES">City Bikes</label>
            </div>

            <div className="radio-input">
                <input
                id='KIDS_BIKES' 
                type="radio" 
                name="bike-type"
                checked={kidBikeInput}
                onClick={() => {
                    dispatch({type: 'KIDS_BIKES',payload : 'KIDS_BIKES'})
                    setCityBikeInput(false);
                    setMountainBikeInput(false);
                    setKidBikeInput(true);
                }}
                />
                <label htmlFor="KIDS_BIKES">Kids Bikes</label>
            </div>

            <div className="radio-input">
                <input 
                id='MOUNTAIN_BIKES'
                type="radio" 
                name="bike-type"
                checked={mountainBikeInput}
                onClick={() => {
                    dispatch({type:'MOUNTAIN_BIKES',payload : 'MOUNTAIN_BIKES'})
                    setCityBikeInput(false);
                    setMountainBikeInput(true);
                    setKidBikeInput(false);
                }}
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
                checked={maleInput}
                onChange={(e) => {
                        dispatch({type:'MALE', payload : e.target.checked})
                        setMaleInput(prev => !prev);
                    }}
                />
                <label htmlFor="MALE">Male</label>
            </div>

            <div className="gender-checkbox-input">
                <input 
                id='FEMALE'
                type="checkbox" 
                name="gender"
                checked={femaleInput}
                onChange={(e) => {
                    dispatch({type:'FEMALE', payload : e.target.checked})
                    setFemaleInput(prev => !prev);
                }}
                />
                <label htmlFor="FEMALE">Female</label>
            </div>
           </div>
   
          </div>
        </div>

       <div className="products-container">
           {loading ? 'Loading...' :
           filteredData && filteredData.map((product) => (
              <div className="product" key={product._id}>
                {product.isAddedInWishlist 
                 ?<i className='lni lni-heart-filled' id="product-wishlist-icon" onClick={() => removeItemFromWishlist(product)}></i>
                  :<i className='lni lni-heart' id="product-wishlist-icon" onClick={() => addItemToWishlist(product)}></i>
                }
                <img className="product-img" src={product.img} alt="cycle-img"/>
                <div className="product-desc">{product.desc}</div>
                <div className="product-price">MRP: ₹{product.price} <span className='product-rating'>{product.rating}  <i className="lni lni-star-filled"></i></span></div>
                <div className="product-links">
                    <button className="product-btn">KNOW MORE</button>
                    {product.isItemAddedInCart
                    ? <button className="product-btn" onClick={() => navigate('/cart')}>Go To Cart</button>
                    : <button className="product-btn" onClick={() => addItemToCartlist(product)}>Add To Cart</button>
                    }
                </div>
              </div>
            ))} 
       </div>
    </div>
    </>
    // <i className={product.isAddedInWishlist ? 'lni lni-heart-filled' : 'lni lni-heart'} id="product-wishlist-icon" onClick={() => addItemToWishlist(product)}></i>
  )}
