import { createContext , useContext , useReducer} from "react";

const WishlistContext = createContext();

const useWishlist = () => useContext(WishlistContext);

const WishlistProvider = ({children}) => {
    const wishlistReducer = (accu , action) => {
        switch(action.type){
            case 'ADD_TO_WISHLIST':
                return {...accu , type: action.type , payload: action.payload}
    
            case 'REMOVE_FROM_WISHLIST':
                return {...accu ,type: action.type , payload: action.payload}
    
            default : 
               return {...accu}
        }
    }

    const [wishlistState , wishlistDispatch] = useReducer(wishlistReducer , {type:'none' , payload:'none'})

    
    return (<WishlistContext.Provider value={{wishlistState , wishlistDispatch}}>{children}</WishlistContext.Provider>)
}

export {useWishlist , WishlistProvider}