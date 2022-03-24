import React, { useReducer } from 'react';
import { useProducts } from '../../context/Product-context';
import './ProductListing.css';
  

export default function ProductListing() {
    const {data , loading , reducer} = useProducts();
    const products = data;
    
    const [state , dispatch] = useReducer(reducer , {type:'none',payload:'none'});

    const highToLowPrice = (a,b) => {
       return [b.price - a.price];
    }

const lowToHighPrice = (a,b) => {
  return [a.price - b.price];
}

//   Sorting Filter
const sortedData = () => {
    let sortData = [...products]
    if(state.payload === 'high_to_low'){
        return [...sortData.sort(highToLowPrice)]
    }
    else if(state.payload === 'low_to_high'){
      return [...sortData.sort(lowToHighPrice)]
    }
    else if(state.payload >= 10000){
        sortData = sortData.filter(product => {
           return parseInt(product.price , 10) <= parseInt(state.payload , 10)}) 
   }
return sortData;
}

  //  Ratings Filter
  const ratingFilterData = () => {
   let ratedData = sortedData();
   if(state.type === '4STAR'  && state.payload === true){
    ratedData = ratedData.filter(product => {
           return parseInt(product.rating) > 4
       })
   }else if(state.type === '3STAR'  && state.payload === true){
    ratedData = ratedData.filter(product => {
          return parseInt(product.rating) > 3
      })
  }else if(state.type === '2STAR'  && state.payload === true){
    ratedData = ratedData.filter(product => {
          return parseInt(product.rating) > 2
      })
  }else if(state.type === '1STAR'  && state.payload === true){
    ratedData = ratedData.filter(product => {
          return parseInt(product.rating) > 1
      })
  }else{
    ratedData = ratedData.filter(product => {
          return product
      })
  }

  return ratedData;
  }

  // Brands Filter
  const brandFilterData = () => {
      let brandData = ratingFilterData();
  if(state.type === 'HERCULES' && state.payload === true){
    brandData = brandData.filter(product => {
          return product.brand === 'hercules'
      })
  }else if(state.type === 'MACH CITY' && state.payload === true){
    brandData = brandData.filter(product => {
          return product.brand === 'mach city'
      })
  }else if(state.type === 'MONTRA' && state.payload === true){
    brandData = brandData.filter(product => {
          return product.brand === 'montra'
      })
  }else if(state.type === 'ROADEO' && state.payload === true){
    brandData = brandData.filter(product => {
          return product.brand === 'roadeo'
      })
  }else if(state.type === 'BSA LADYBIRD' && state.payload === true){
    brandData = brandData.filter(product => {
          return product.brand === 'BSA Ladybird'
      })
  }

  return brandData;
}

  // Bike Type Filter
  const bikeFilterData = () => {
      let bikeData = brandFilterData();
  if(state.payload === 'MOUNTAIN_BIKES'){
    bikeData = bikeData.filter(product => {
          return product.type === 'mountain'
      })
  }else if(state.payload === 'CITY_BIKES'){
    bikeData = bikeData.filter(product => {
          return product.type === 'city'
      })
  }else if(state.payload === 'KIDS_BIKES'){
    bikeData = bikeData.filter(product => {
          return product.type === 'kids'
      })
  }

  return bikeData;
}

  
  // Gender Filter
  const genderFilterData = () => {
      let genderData = bikeFilterData();
  if(state.type === 'MALE' && state.payload === true){
    genderData = genderData.filter(product => {
          return product.gender === 'male'
      })
  }else if(state.type === 'FEMALE' && state.payload === true){
    genderData = genderData.filter(product => {
          return product.gender === 'female'
      })
  }
  return genderData;
}

const resetBtns = () => {
    window.location.reload();
}


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
                onClick={() => dispatch({type:'LOW_TO_HIGH' , payload:'low_to_high'})}
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
           filteredData.map(({img , desc ,price ,id, rating}) => (
              <div className="product" key={id}>
                <a href="#wishlist">
                 <i className="product-wishlist-icon lni lni-heart"></i>
                </a>
                <img className="product-img" src={img} alt="cycle-img"/>
                <div className="product-desc">{desc}</div>
                <div className="product-price">MRP: ₹{price} <span className='product-rating'>{rating}  <i className="lni lni-star-filled"></i></span></div>
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
