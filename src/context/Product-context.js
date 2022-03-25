import { createContext, useContext , useEffect , useState ,useReducer} from "react";
import axios from "axios";



const ProductContext = createContext('');
const useProducts = () => useContext(ProductContext);


const ProductContextProvider = ({children}) => {
    let [loading , setLoading] = useState(true);
    let [data , setData] = useState([]);
    

    const highToLowPrice = (a,b) => {
       return [b.price - a.price];
    }

const lowToHighPrice = (a,b) => {
  return [a.price - b.price];
}

//   Sorting Filter
const sortedData = () => {
    let sortData = [...data]
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


    const reducer =(accu, action) => {
        switch (action.type) {
            case 'HIGH_TO_LOW':
                return { ...accu, payload: action.payload };

            case 'LOW_TO_HIGH':
                return { ...accu, payload: action.payload };

            case 'RANGE':
                return { ...accu, payload: action.payload };
            // Ratings
            case '4STAR':
                return { ...accu, payload: action.payload, type: action.type };

            case '3STAR':
                return { ...accu, payload: action.payload, type: action.type };

            case '2STAR':
                return { ...accu, payload: action.payload, type: action.type };

            case '1STAR':
                return { ...accu, payload: action.payload, type: action.type };

            // Brands
            case 'MACH CITY':
                return { ...accu, payload: action.payload, type: action.type };

            case 'ROADEO':
                return { ...accu, payload: action.payload, type: action.type };

            case 'HERCULES':
                return { ...accu, payload: action.payload, type: action.type };

            case 'MONTRA':
                return { ...accu, payload: action.payload, type: action.type };

            case 'BSA LADYBIRD':
                return { ...accu, payload: action.payload, type: action.type };
            // Bike Types
            case 'CITY_BIKES':
                return { ...accu, payload: action.payload };

            case 'MOUNTAIN_BIKES':
                return { ...accu, payload: action.payload };

            case 'KIDS_BIKES':
                return { ...accu, payload: action.payload };

            // Gender
            case 'MALE':
                return { ...accu, payload: action.payload, type: action.type };

            case 'FEMALE':
                return { ...accu, payload: action.payload, type: action.type };

            default:
                return accu;
        }
    }
    const [state , dispatch] = useReducer(reducer , {type:'none',payload:'none'});
    
    useEffect(() => {
        let fetchData = async () => {
             try {
                let res = await axios.get('/api/products');
                if(res.status === 200){
                    setData(res.data.products);
                    setLoading(false);
                }
             } catch (err) {
                console.log(err);
                setLoading(true);
             }
        }
        fetchData();
    },[])
    return (<ProductContext.Provider value={{ data:data , loading: loading , reducer , dispatch , genderFilterData }}>{children}</ProductContext.Provider>)
}

export {useProducts , ProductContextProvider};