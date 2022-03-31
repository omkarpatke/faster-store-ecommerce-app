import { createContext , useContext , useReducer} from "react";

const CartContext = createContext();

const useCartlist = () => useContext(CartContext);

const CartListProvider = ({children}) => {
    const cartReducer = (accu , action) => {
        switch(action.type){
            case 'ADD_TO_CART':
                return {...accu , type: action.type , payload: action.payload}
    
            case 'REMOVE_FROM_CARTLIST':
                return {...accu ,type: action.type , payload: action.payload}
    
            default : 
               return {...accu}
        }
    }

    const [cartState , cartDispatch] = useReducer(cartReducer , {type:'none' , payload:'none'})

    
    return (<CartContext.Provider value={{cartState , cartDispatch}}>{children}</CartContext.Provider>)
}

export {useCartlist , CartListProvider}