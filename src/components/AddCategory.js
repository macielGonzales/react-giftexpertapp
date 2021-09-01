import React, { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');

  const hanldleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories((cats) => [ inputValue, ...cats,]);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <h2>{inputValue}</h2> */}
      <input type="text" value={inputValue} onChange={hanldleInputChange} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}
