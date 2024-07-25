import React, { createContext, useState} from "react";

export const ItemsContext = createContext()

export const ItemsProvider = ({children}) => {

    const [ limit, setLimit ] = useState(10)

    return (
        <ItemsContext.Provider value={[limit, setLimit]}>
            {children}
        </ItemsContext.Provider> 
    )
}