import { createContext, useContext , useEffect , useState} from "react";
import axios from "axios";


const ProductContext = createContext('');
const useProducts = () => useContext(ProductContext);


const ProductContextProvider = ({children}) => {
    let [loading , setLoading] = useState(true);
    let [data , setData] = useState([]);

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
    return (<ProductContext.Provider value={{ data:data , loading: loading , reducer }}>{children}</ProductContext.Provider>)
}

export {useProducts , ProductContextProvider};