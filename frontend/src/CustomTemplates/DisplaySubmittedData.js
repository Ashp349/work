
import React, { useState } from 'react';
import { useFormContext } from '../components/Context/FormContext';
import { useShortcut } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';


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
const navigate = useNavigate();
const goBack = () => {
  navigate(-1);
};

  console.log(props.dummy);

  return (
    <>
    <div className="flex flex-row justify-between m-3">
              <button onClick={goBack}>
                <i className="fa-solid fa-arrow-left"></i>
              </button>
              <button onClick={goBack}>
                <button>
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </button>
            </div>   
    <div>
      <h2>Submitted Data:</h2>
      <p>Name: {state.projectName}</p>
      <p>Name: {state.template.title}</p>
    </div>
   </> 
  );
};

export default DisplaySubmittedData;
