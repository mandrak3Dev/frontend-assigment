import React, { useState } from "react";

const useHandleChange = initialState => {
  const [value, setValue] = useState(initialState);

  const handleChange = e => {
    setValue(e.target.value);
  };


  return {
    value,
    setValue,
    handleChange,
  };
};

export default useHandleChange;
