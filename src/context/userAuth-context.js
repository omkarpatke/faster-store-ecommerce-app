import { createContext , useState , useContext, useEffect } from "react";
import { useLocation , useNavigate } from 'react-router-dom';


const UserContext = createContext('');
const useUserAuth = () => useContext(UserContext);



const UserContextProvider = ({children}) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isLogIn , setIsLogIn] = useState(false);

    useEffect(() => {
       if(localStorage.getItem('token')){
           setIsLogIn(true);
           navigate(location.pathname);
       }else{
           setIsLogIn(false);
       }
    },[window.reload])

    


    return (<UserContext.Provider value={{ isLogIn , setIsLogIn }}>{children}</UserContext.Provider>)
}

export { useUserAuth , UserContextProvider }