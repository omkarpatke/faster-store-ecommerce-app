import { createContext , useState , useContext, useEffect } from "react";



const UserContext = createContext('');
const useUserAuth = () => useContext(UserContext);



const UserContextProvider = ({children}) => {
    const [isLogIn , setIsLogIn] = useState(false);
    const [userData , setUserData] = useState([]);


    useEffect(() => {
       if(localStorage.getItem('token')){
           setIsLogIn(true);
           setUserData({name:'guest' , lastName:'guestLastName' , email:'guest1234@gmail.com'});
       }else{
           setIsLogIn(false);
       }
    },[])

    


    return (<UserContext.Provider value={{ isLogIn , setIsLogIn, setUserData , userData }}>{children}</UserContext.Provider>)
}

export { useUserAuth , UserContextProvider }