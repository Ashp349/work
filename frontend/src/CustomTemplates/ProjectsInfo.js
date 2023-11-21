import React,{useState} from "react";


export default function ProjectsInfo(props){
   return(
    <>
       <div>
        Data:
          {props.dropdownData.map((dropdown)=>{
              <p>{dropdown.title}</p> 
          })}      
        </div> 
    </>
   )
}

