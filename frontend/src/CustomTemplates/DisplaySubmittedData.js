
import React, { useState } from 'react';
import { useFormContext } from '../components/Context/FormContext';
import { useShortcut } from '@chakra-ui/react';


// const DisplaySubmittedData = () => {
//   const { state } = useFormContext();

//   return (
//     <div>
//       <h2>All Submitted Data:</h2>
//       {state.formData.map((data, index) => (
//         <div key={index}>
//           <p>Submission {index + 1}:</p>
//           <p>Project Name: {data.projectName}</p>
//           <p>Template: {data.template}</p>
//           {/* Add more fields as needed */}
//           <hr />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DisplaySubmittedData;
















const DisplaySubmittedData = (props) => {
  const { state } = useFormContext();
//   const[data,setData] = useState([]);
  
//   dummy.push({
//     name: state.projectName,
//     title:state.template.title
//   });

//   const handlePushData = () => {
//     const newData = {
//         name: state.projectName,
//         title:state.template.title
//       };
//     setData(prevData => [...prevData, newData]);
//   };
 

  console.log(props.dummy);

  return (
    <div>
      <h2>Submitted Data:</h2>
      <p>Name: {state.projectName}</p>
      <p>Name: {state.template.title}</p>
    </div>
  );
};

export default DisplaySubmittedData;
