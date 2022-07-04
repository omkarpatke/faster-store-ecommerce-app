import { useProducts, useToastContext } from '../../context/index';
import { useState } from 'react'
import './ProductListing.css';
import { useNavigate , Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProductToWishlist, removeProductFromWishlist } from '../../store/wishlistSlice';
import { addProductToCart } from '../../store/cartSlice';
import { Navbar } from '../../components';


export function ProductListing() {
    const dispatch = useDispatch();
  const [fourStar , setFourstar] = useState();
  const [threeStar , setThreestar] = useState();
  const [twoStar , setTwostar] = useState();
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
  
  const { loading ,filteredData , setData , productDispatch } = useProducts();
  const navigate = useNavigate();
  const notify = useToastContext();

const resetBtns = () => {
    productDispatch({type:'4STAR' , payload: false })
    setFourstar(false);
    setThreestar(false);
    setTwostar(false);
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


const addItemToWishlist = (product) => {
    dispatch(addProductToWishlist(product));
    notify('Item Added In Wishlist' , {type:'success'});
    setData(prev => ([...prev].map(item => item._id === product._id ? {...item ,isAddedInWishlist:true} : item)));
}

 const removeItemFromWishlist = (product) => {
    dispatch(removeProductFromWishlist(product._id));
    notify('Item Remove From Wishlist' , {type:'success'});
    setData(prev => ([...prev].map(item => item._id === product._id ? {...item ,isAddedInWishlist:false} : item)))
  }


  const addItemToCartlist = (product) => {    
        dispatch(addProductToCart(product));
        notify('Item Added In Cart' , {type:'success'});
        setData(prev => ([...prev].map(item => item._id === product._id ? {...item ,isItemAddedInCart :true} : item)))
    }
    

  return (
    <>
    <Navbar showSearchBar={true}/>
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
                    productDispatch({type:'RANGE' , payload:e.target.value})
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
                    productDispatch({type:'LOW_TO_HIGH' , payload:'low_to_high' , value: e.target.checked})
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
                onClick={() => {productDispatch({type:'HIGH_TO_LOW' , payload:'high_to_low'})
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
                    productDispatch({type:'4STAR' , payload:e.target.checked})
                    setFourstar(prev => !prev);
                    setThreestar(false);
                     setTwostar(false);
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
                    productDispatch({type:'3STAR' , payload:e.target.checked})
                     setThreestar(prev => !prev);
                     setFourstar(false);
                     setTwostar(false);
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
                    productDispatch({type:'2STAR' , payload:e.target.checked})
                    setTwostar(prev => !prev);
                    setFourstar(false);
                     setThreestar(false);
                }}
                />
                <label htmlFor="2STAR"> 2 Star &Above</label>
               </div>
           </div>

           <div className="filter bike-type-filter">
            <h3>Category</h3>
            <div className="radio-input">
                <input 
                id='CITY_BIKES'
                type="radio" 
                name="bike-type"
                checked={cityBikeInput}
                onClick={() => {
                    productDispatch({type: 'CITY_BIKES' ,payload : 'CITY_BIKES'})
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
                    productDispatch({type: 'KIDS_BIKES',payload : 'KIDS_BIKES'})
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
                    productDispatch({type:'MOUNTAIN_BIKES',payload : 'MOUNTAIN_BIKES'})
                    setCityBikeInput(false);
                    setMountainBikeInput(true);
                    setKidBikeInput(false);
                }}
                />
                <label htmlFor="MOUNTAIN_BIKES">Mountian Bikes</label>
            </div>
           </div>

           <div className="filter brands-filter-input">
            <h3>Brands</h3>
            <div className="check-box-input">
                <input 
                id='HERCULES'
                type="radio"
                checked={hurculesInput}
                onChange={(e) => {
                    productDispatch({type:'HERCULES' , payload:e.target.checked})
                    setHurculesInput(prev => !prev);
                    setMachCityInput(false)
                    setBsaInput(false)
                    setHurculesInput(true)
                    setMontraInput(false)
                    setRoadeoInput(false)
                }}
                />
                <label htmlFor="HERCULES">Hercules</label>
            </div>
            <div className="check-box-input">
                <input 
                id='MACH CITY'
                type="radio"
                checked={machCityInput}
                onChange={(e) => {
                    productDispatch({type:'MACH CITY' , payload:e.target.checked})
                    setMachCityInput(prev => !prev);
                    setMachCityInput(true)
                    setBsaInput(false)
                    setHurculesInput(false)
                    setMontraInput(false)
                    setRoadeoInput(false)
                }}
                />
                <label htmlFor="MACH CITY">Mach City</label>
            </div>
            <div className="check-box-input">
                <input
                id='MONTRA' 
                type="radio"
                checked={montraInput}
                onChange={(e) => {
                    productDispatch({type:'MONTRA' , payload:e.target.checked})
                    setMontraInput(prev => !prev);
                    setMachCityInput(false)
                    setBsaInput(false)
                    setHurculesInput(false)
                    setMontraInput(true)
                    setRoadeoInput(false)
                }}
                />
                <label htmlFor="MONTRA">Montra</label>
            </div>
            <div className="check-box-input">
                <input 
                id='ROADEO'
                type="radio"
                checked={roadeoInput}
                onChange={(e) => {
                    productDispatch({type:'ROADEO' , payload:e.target.checked})
                    setRoadeoInput(prev => !prev)
                    setMachCityInput(false)
                    setBsaInput(false)
                    setHurculesInput(false)
                    setMontraInput(false)
                    setRoadeoInput(true)
                }}
                />
                <label htmlFor="ROADEO">Roadeo</label>
            </div>
            <div className="check-box-input">
                <input 
                id='BSA LADYBIRD'
                type="radio"
                checked={bsaInput}
                onChange={(e) => {productDispatch({type:'BSA LADYBIRD' , payload:e.target.checked})
                setBsaInput(prev => !prev);
                setMachCityInput(false)
                setBsaInput(true)
                setHurculesInput(false)
                setMontraInput(false)
                setRoadeoInput(false)
            }}
                />
                <label htmlFor="BSA LADYBIRD">BSA Ladybird</label>
            </div>
           </div>
          

           <div className="filter gender-filter">
            <h3>Gender</h3>
            <div className="gender-radio-input">
                <input
                id='MALE' 
                type="radio" 
                name="gender"
                checked={maleInput}
                onChange={(e) => {
                    productDispatch({type:'MALE', payload : e.target.checked})
                        setMaleInput(prev => !prev);
                    }}
                />
                <label htmlFor="MALE">Male</label>
            </div>

            <div className="gender-radio-input">
                <input 
                id='FEMALE'
                type="radio" 
                name="gender"
                checked={femaleInput}
                onChange={(e) => {
                    productDispatch({type:'FEMALE', payload : e.target.checked})
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
                <Link to={`/products/${product._id}`}><img className="product-img" src={product.img} alt="cycle-img"/></Link>
                <div className="product-desc">{product.desc}</div>
                <div className="product-price">MRP: ₹{product.price} <span className='product-rating'>{product.rating}  <i className="lni lni-star-filled"></i></span></div>
                <div className="product-links">
                    <Link className="product-btn" to={`/products/${product._id}`}>KNOW MORE</Link>
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
  )}
