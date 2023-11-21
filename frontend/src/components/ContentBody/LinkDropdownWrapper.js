import React from "react"
import { ProjectDataProvider } from "../Context/FormDataContext"
import LinkDropdown from "./LinkDropdown"


export default function LinkDropdownWrapper(props){
    return(
        <ProjectDataProvider>
            <LinkDropdown classes={props.classes}/>
        </ProjectDataProvider>
    )
}