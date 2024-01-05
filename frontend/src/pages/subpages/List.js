import React from "react";
// import ListContainer from "../components/List/ListContainer"
import ListContainer from "../../components/List/ListContainer"
import { DisplayInfoContext, DisplayInfoProvider } from "../../components/Context/DisplayInfoContext"



export default function List(){
    return(
      <DisplayInfoProvider>
      <div className="ml-7 mt-32">
        <ListContainer/>
      </div>
      </DisplayInfoProvider>
    )
}