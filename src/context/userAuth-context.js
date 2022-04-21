import { createContext , useState , useContext } from "react";


const UserContext = createContext('');

const useUserAuth = () => useContext(UserContext);

const UserContextProvider = ({children}) => {
    const [isLogIn , setIsLogIn] = useState(false);

    


    return (<UserContext.Provider value={{ isLogIn , setIsLogIn }}>{children}</UserContext.Provider>)
}

export { useUserAuth , UserContextProvider }