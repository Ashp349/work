import React,{useState} from "react";
import Button from "../components/ContentBody/Button";
import RiskLayout from "../pages/RiskLayout";
import { Link } from "react-router-dom";


// const templates=[
//    {    
//      component:<RiskLayout projectName={projectName}/>,
//      link:"/risk",
//    }
// ]

const data={
    title:"",
    component:""
}

const dropdownData=[];

const iconClasses1="fa-regular fa-arrow-left";
const iconClasses2="fa-regular fa-xmark";



export default function CreateProject(){
    
    // const templates=[
    //     {    
    //       component:<RiskLayout projectName={projectName}/>,
    //       link:"/risk",
    //     }
    //  ]


     const [formData, setFormData] = useState(data);
     
     const[projectName,setProject] = useState("");
     const[template,setTemplate] = useState("");


     const templates=[
        { 
          name:"Risk Template",    
          component:<RiskLayout projectName={projectName}/>,
          link:"/risk",
        }
     ]
    

     const handleProjectChange = (e) =>{
         setProject(e.target.value);
     }  

     const handleTemplateSelect = (templateName) =>{
         setTemplate(templateName);
     }

     const createProject = (e) =>{
        e.preventDefault();
        setFormData({
            title:projectName,
            component:template
        });
        dropdownData.push(formData);
        // if(projectName && template){
            setProject("");
            setTemplate("");
        // }
     }


     return(
       <>
       <div className="flex flex-col">
       <div className="flex flex-row justify-between m-3">
       <button><i class="fa-solid fa-arrow-left"></i></button>
       <button><i class="fa-solid fa-xmark"></i></button>
       </div>
       {/* <div className="flex flex-row items-center h-screen justify-between m-3">
          <button><i class="fa-solid fa-arrow-left"></i></button>
           <button><i class="fa-solid fa-xmark"></i></button> */}
       <form className="flex flex-col justify-center items-center mt-[6.5rem]" onSubmit={createProject}>      
       <h2 className="text-3xl flex justify-center items-center mb-[2.1rem] font-thin">Create a new Project</h2>
        <div className="flex flex-col justify-center items-center">
        <input
            className="w-[18rem] mb-[1.25rem] p-3"
            type="text"
            value={projectName}
            onChange={handleProjectChange}
            placeholder="Enter Project Name" 
        />
        <ul className="flex flex-row justify-center">
            <li className="bg-slate-500 w-[8.3rem] h-[8.4rem] text-center pt-[3.2rem] pl-2 pr-2 ml-2 mt-4 rounded-md">Risk</li>
            <li className="bg-slate-500 w-[8.3rem] h-[8.4rem] text-center pt-[3.2rem] pl-2 pr-2 ml-9 mt-4 rounded-md">Risk</li>
            {templates.length > 0 &&
              templates.map((template, index) => (
                <li
                  className="bg-slate-500 w-[8.3rem] h-[8.4rem] text-center pt-[3.2rem] pl-2 pr-2 ml-9 mt-4 rounded-md"
                  key={index}
                  onClick={() => handleTemplateSelect(template)}
                >
                  {template.name}
                </li>
              ))}
          </ul>
        <Link to="/">
          <button className="mt-10 cursor-pointer font-semibold" onClick={createProject} >
            Create Project
          </button>
        </Link>
        </div>
      </form>
    </div>
      {/* </div> */}
       </>
    )
}