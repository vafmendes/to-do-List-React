import { createContext } from 'react';
import type { IGlobalContext, IGlobalContextProps } from '../types/types';

const GlobalContext = createContext({} as IGlobalContext);

function GlobalContextProvider({children}: IGlobalContextProps){

    return(
        <GlobalContext.Provider value={{title: "Teste"}}>
            {children}
        </GlobalContext.Provider>

    )
}

export default GlobalContextProvider;