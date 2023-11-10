import React,{useState} from "react";
import Button from "../ContentBody/Button";
import RiskLayout from "../../pages/RiskLayout";


const templates=[
//    {    
//      component:<RiskLayout/>,
//      link:"/risk",
//    }
   <RiskLayout/>
]

export default function CreateProject(){
    // const [formData, setFormData] = useState({
    //     title:"",
    // });
     const[projectName,setProject] = useState("");
     const[template,setTemplate] = useState("");

     const handleProjectChange = (e) =>{
         setProject(e.target.value);
     }  

     const handleTemplateSelect = (templateName) =>{
         setTemplate(templateName);
     }

     const createProject = () =>{
        if(projectName && template){
            setProject("");
            setTemplate("");
        }
     }


     return(
       <>
        <div className="flex flex-row">
        <input
            className="w-full"
            type="text"
            value={projectName}
            onChange={handleProjectChange}
            placeholder="Enter Project Name" 
        />
        <ul className="flex flex-col">
            {templates.length>0 && templates.map((template,index)=>{
                <li className="w-16 h-16" key={index} onClick={() => handleTemplateSelect(template)}>
                   {template}
                </li>
            })
            }
        </ul>
        <Link to="/">
          <button onClick={createProject} disabled={!projectName || !template}>
            Create Project
          </button>
        </Link>
        </div>
       </>
    )
}