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

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CreateProject from '../../CustomTemplates/CreateProject';

const LinkDropdown = (props) => {
  const [options, setOptions] = useState([]);

  const handleAddOption = () => {
    if(props.dropdownData.title && props.dropdownData.link){
     const newOption = {
      key: Math.random(),
      value: props.dropdownData.title,
      link: `/${props.dropdownData.link}/${Math.random()}`
    };
    setOptions(prevOptions => [...prevOptions, newOption]);
   }
  };

  return (
    <div>
      <div>
      {/* <div className='flex flex-col'> 
        <i></i>
        <span>Risks</span>
      </div>     */}
        {options.map(option => (
          <span key={option.key} value={option.value}>
            <Link to={option.link}>{option.value}</Link>
          </span>
        ))}
      </div>
      <Link to="/projects/new">
       <button >Add Custom Option</button>
      </Link>
    </div>
  );
};

export default LinkDropdown;