import React, { createContext, useState } from 'react';

const FormDataContext = createContext();

export const FormDataProvider = ({ children }) => {
  const [submittedData, setSubmittedData] = useState(null);

  const submitForm = (data) => {
    setSubmittedData(data);
  };

  return (
    <FormDataContext.Provider value={{ submittedData, submitForm }}>
      {children}
    </FormDataContext.Provider>
  );
};

export default FormDataContext;