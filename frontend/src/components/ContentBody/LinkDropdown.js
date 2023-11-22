// LinkDropdown.js
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
// import { ProjectDataContext, ProjectDataProvider } from '../Context/FormContext';
import { dropdownData } from '../../CustomTemplates/CreateProject';
// import { useFormContext } from '../Context/FormContext';


const LinkDropdown = (props) => {
  // const { projectData } = useContext(ProjectDataContext);
  const [options, setOptions] = useState([]);
//  const {state} = useFormContext;

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

  return (
    
    <div>
      {options.map((option) => (
        <span key={option.key} value={option.value}>
          <Link className={props.classes} to={option.link}>
            {option.value}
          </Link>
        </span>
      ))}
      {/* <Link>
        <span>
           {props.name}
        </span>
      </Link> */}

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