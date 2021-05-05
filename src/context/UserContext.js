import React, {createContext} from "react"


const UserContext = createContext({});


export const UserProvider = props =>{
    return(
        <UserContext.Provider value={{
            state:{
                id:"25",
                nome:"Aline"
            }
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContext