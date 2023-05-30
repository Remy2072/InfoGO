import React, {createContext, useContext, useState} from "react";

const INITIAL_STATE = {
    loggedIn: false,
    setLoggedIn: () => {
    },
}

// Context initialization
export const UserContext = createContext(INITIAL_STATE);

export const UserProvider = ({children}) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const loginSetter = () => setLoggedIn(true);

    return (
        <UserContext.Provider value={{loggedIn, setLoggedIn: loginSetter}}>
            {children}
        </UserContext.Provider>
    )
};

export const useUserContext = () => {
    const context = useContext(UserContext);

    return context;
};
