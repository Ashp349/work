import React, {useContext,useState} from "react";
const DisplayContext = React.createContext();
const DisplayUpdateContext= React.createContext();

export function useDisplay(){
    return useContext(DisplayContext);
}

export function useDisplayUpdate(){
    return useContext(DisplayUpdateContext);
}


export function DisplayInfoProvider({children}){
    const [open,setOpen] = useState(true);
     
    function toggleMenu() {
        setOpen(s=> !s)
    }
  return(
     <DisplayContext.Provider value={open}>
          <DisplayUpdateContext.Provider value={toggleMenu}>
            {children}
          </DisplayUpdateContext.Provider>  
     </DisplayContext.Provider>
  )

}