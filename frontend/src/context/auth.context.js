import { useState, useEffect, createContext } from 'react';
import { API_URL } from '../constants';
import axios from 'axios';



const AuthContext = createContext();


 function AuthProviderWrapper(props) {
     // store user information and auth state
     const [isLoggedin, setIsLoggedin] = useState(false);
     const [isLoading, setIsLoading] = useState(true);
     const [user, setUser] = useState(null);

     // Store Token, authenticate user, logout user

     const storeToken = (token) => {
         localStorage.setItem ('authToken', token);
     };
    
     // Get stored Token from localStorage
     const authenticateUser = async () => {
         const storedToken = localStorage.getItem ('authToken');
         if (storedToken) {
             console.log ('Here',storedToken);
             try {
                 const response = await axios.get(`${API_URL}/auth/verify`, {
                     headers: { Authorization: `Bearer ${storedToken}` },
                 });
                 //jwt Token is valid
                 const user =response.data;
                 setIsLoggedin(true);
                 setIsLoading(false);
                 setUser(user);
             } catch (error){
                 console.log (error.message);
                 // if Token is error token is invalid, update states varianles
                 setIsLoggedin(false);
                 setIsLoading(false);
                 setUser(null)}

        } else {
                 // if Token not available
                 setIsLoggedin(false);
                 setIsLoading(false);
                 setUser(null);}
    };

    // if user Logged out remove token from local storage
    const removeToken = () => {
        localStorage.removeItem('authToken');
    }

    //Check if user is logged out, remove token from local storage
    
    const logOutUser = () => {
        removeToken()
    };
    useEffect(() =>{
        authenticateUser();
    },[]);

    return (
        <AuthContext.Provider
            value={{
                isLoggedin,
                isLoading,
                user,
                storeToken,
                authenticateUser,
                logOutUser

            }}
            >
                {props.children}
            </AuthContext.Provider>
    );
     

}


export { AuthProviderWrapper, AuthContext};