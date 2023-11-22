// // FormContext.js
// import React, { createContext, useReducer, useContext } from 'react';

// const FormContext = createContext();

// const formReducer = (state, action) => {
//   switch (action.type) {
//     case 'UPDATE_FIELD':
//       return { ...state, [action.field]: action.value };
//     case 'RESET_FORM':
//       return action.initialState;
//     case 'SUBMIT_FORM':
//       // Accumulate submitted data in an array
//       const newData = { ...state, timestamp: new Date() }; // Add timestamp for reference
//       return { ...state, formData: [...(state.formData || []), newData] };
//     default:
//       return state;
//   }
// };

// export const FormProvider = ({ children, initialState }) => {
//   const [state, dispatch] = useReducer(formReducer, initialState);

//   return (
//     <FormContext.Provider value={{ state, dispatch }}>
//       {children}
//     </FormContext.Provider>
//   );
// };

// export const useFormContext = () => {
//   const context = useContext(FormContext);
//   if (!context) {
//     throw new Error('useFormContext must be used within a FormProvider');
//   }
//   return context;
// };







import React, { createContext, useReducer, useContext } from 'react';

const FormContext = createContext();

const formReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.field]: action.value };
    case 'RESET_FORM':
      return action.initialState;
    case 'SUBMIT_FORM':
      // You can handle the submitted data here or send it to a server
      console.log('Form submitted with data:', state);
      return state;
    default:
      return state;
  }
};

export const FormProvider = ({ children, initialState }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};













// // ProjectDataContext.js
// import React, { createContext, useState } from 'react';
// import CreateProject from '../../CustomTemplates/CreateProject';

// const ProjectDataContext = createContext();

// const ProjectDataProvider = ({ children }) => {
//   // const [projectData, setProjectData] = useState({ title: '', link: '' });

//   // const updateProjectData = (data) => {
//   //   setProjectData(data);
//   // };

//   return (
//     <ProjectDataContext.Provider>
//       {children}
//     </ProjectDataContext.Provider>
//   );
// };

// export { ProjectDataContext, ProjectDataProvider };









// import React, { createContext, useState } from 'react';

// const FormDataContext = createContext({});

// export const FormDataProvider = ({ children }) => {
//   const [submittedData, setSubmittedData] = useState(null);

//   const submitForm = (data) => {
//     setSubmittedData(data);
//   };

//   const obj = {
//     submitForm,
//     submittedData,
//   }
//   return (
//     <FormDataContext.Provider value={ obj }>
//       {children}
//     </FormDataContext.Provider>
//   );
// };

// export default FormDataContext;

// import React, { createContext, useState } from "react";

// const FormDataContext = createContext();

// const FormDataProvider = ({ children }) => {
//   const [formData, setFormData] = useState({
//     title: "",
//     component: "",
//   });

//   const submitForm = (data) => {
//     // Handle form submission logic here
//     console.log("Form submitted:", data);
//   };

//   const updateFormData = (newData) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       ...newData,
//     }));
//   };

//   const value = {
//     formData,
//     submitForm,
//     updateFormData,
//   };

//   return (
//     <FormDataContext.Provider value={value}>
//       {children}
//     </FormDataContext.Provider>
//   );
// };

// export { FormDataContext, FormDataProvider };