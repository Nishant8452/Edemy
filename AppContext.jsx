import { createContext } from "react";

export const AppContext=createContext();

export const AppContextProvider=(props)=>{
    const data={

        
    }
          return(
            <AppContext.Provider value={data}>
               {props.children}
            </AppContext.Provider>
          )
}