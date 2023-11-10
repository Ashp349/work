import React, { useState } from 'react';

const CustomDropdown = () => {
  const [options, setOptions] = useState([]);

  const handleAddOption = () => {
    const newOption = <option key={Math.random()} value="custom">{}</option>;
    setOptions(prevOptions => [...prevOptions, newOption]);
  };

  return (
    <div>
      <select>
        <option value="default">Default Option</option>
        {options}
      </select>
      <button onClick={handleAddOption}>Add Custom Option</button>
    </div>
  );
};

export default CustomDropdown;