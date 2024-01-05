// LinkDropdown.js
import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { ProjectDataContext, ProjectDataProvider } from '../Context/FormContext';
import { dropdownData } from '../../CustomTemplates/CreateProject';
import { useFormContext } from '../Context/FormContext';
import { useSideBar } from '../Context/SideBarContext';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
 


const LinkDropdown = (props) => {
  // const { '*': wildcardParams } = useParams();
  const { param } = useParams();

  // Use the dynamic parameters as needed
  // console.log(param1); // 1205905917693645
  // console.log(param2); // 1205905635637959
  const result = [];
  
  // const { projectData } = useContext(ProjectDataContext);
 const [options, setOptions] = useState([]);
 const { state } = useFormContext();
 const openSideBar = useSideBar();

 const[data,setData] = useState();
 


  // console.log(projectData);
  // const name=state.name;
  // const title= state.template.title;

  const handleAddOption = () => {
    // if (projectData.title && projectData.link) {
      // const newOption = {
      //   key: Math.random(),
      //   value:projectData.title,
      //   link: `/${projectData.link}/${Math.random()}`,
      // };
      // setOptions((prevOptions) => [...prevOptions, newOption]);
      // console.log(projectData);
    // }
  };

  // console.log(state.submittedData);
  const uniqueId= uuidv4();

  useEffect(() => {
    state.submittedData.link=Math.random(1000);
    state.submittedData.Id=Math.random(1000);
//   const uniqueIds = new Set();

//   function generateUniqueId() {
//      let newId;
//     do {
//       newId = uuidv4();
//     } while (uniqueIds.has(newId));

//     uniqueIds.add(newId);

//     return newId;
//   }

// // Generate a new unique ID every 5 seconds
//    setInterval(() => {
//     const newId = generateUniqueId();
//     state.submittedData.link=newId;
//      console.log(newId);
//    }, 2000);
   result.push(state.submittedData);
   console.log(result);
    // return () => {
    //   // Cleanup code here
    //   // This code runs before the component is unmounted or when its dependencies change
    // };
  }, []);
  
   
  
  


  return (
    
    <div>
      {/* {options.map((option) => (
        <span key={option.key} value={option.value}>
          <Link className={props.classes} to={option.link}>
            {option.value}
          </Link>
        </span>
      ))} */}
      {/* <Link > */}
        {/* <div className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2 ${!openSideBar && "hidden"}`}> */}
                <span className={` flex flex-col`}>
                 {/* <i class="fa-regular fa-circle-dot fa-sm"></i> */}
                 {/* <Link to="/risk">{state.projectName}</Link> */}
                 {state.submittedData.map((field) => (
                <span key={field.id}>  
                 <Link to={`/risk/${field.submittedData.link}`}>
                    <span className={props.classes}>{field.projectName}</span>
                 </Link>
                 </span>
                  ))}
                </span>
        {/* </div> */}
      {/* </Link> */}

      <Link className={props.classes} to="/projects/new">
        <i className="fa-solid fa-plus fa-sm"></i>
        <button>Add Project</button>
      </Link>
    </div>

  );
};

export default LinkDropdown;




// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import CreateProject from '../../CustomTemplates/CreateProject';


// const LinkDropdown = (props) => {
//   const [options, setOptions] = useState([]);

//   const handleAddOption = () => {
//     const newOption = <Link to={`/risk/${Math.random()}`}><option key={Math.random()} value={props.dropdownData.title}>{props.dropdownData.title}</option></Link>;
//     setOptions(prevOptions => [...prevOptions, newOption]);
//   };

//   return (
//     <div>
//       <select>
//         <option value="default">Risks</option>
//         {options}
//         <button onClick={handleAddOption}>Add Custom Option</button>
//       </select>
//     </div>
//   );
// };

// export default LinkDropdown;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import CreateProject from '../../CustomTemplates/CreateProject';
// // import SideBar from '../Navigation/SideBar';

// const LinkDropdown = (props) => {
//   const [options, setOptions] = useState([]);

//   const handleAddOption = () => {
//     if(props.projectData.title && props.projectData.link){
//      const newOption = {
//       key: Math.random(),
//       value: props.projectData.title,
//       link: `/${props.projectData.link}/${Math.random()}`
//     };
//     setOptions(prevOptions => [...prevOptions, newOption]);
//    }
//   };

//   return (
//     <div>
//       <div>
//       {/* <div className='flex flex-col'> 
//         <i></i>
//         <span>Risks</span>
//       </div>     */}
//         {options.map(option => (
//           <span key={option.key} value={option.value}>
//             <Link className={props.classes} to={option.link}>{option.value}</Link>
//           </span>
//         ))}
//       </div>
//       <Link className={props.classes} to="/projects/new">
//       <i class="fa-solid fa-plus fa-sm"></i>
//        <button>Add Project</button>
//       </Link>
//     </div>
//   );
// };

// export default LinkDropdown;