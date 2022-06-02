import React from 'react';
import { CarsContext } from './context/CarsContext';

const Checkboxes = () => {
  const { setFilters } = React.useContext(CarsContext);

  const handleChange = (event) => {
    if (event.target.checked) {
      setFilters({ make: [event.target.value] });
    } else {
      // Handle Unchecked Here
    }
  };

  return (
    <div>
      <input
        onChange={handleChange}
        type="checkbox"
        value="mercedes"
        name="mercedes"
        id="mercedes"
      />
      <input
        onChange={handleChange}
        type="checkbox"
        value="bmw"
        name="bmw"
        id="bmw"
      />
      <input
        onChange={handleChange}
        type="checkbox"
        value="kia"
        name="kia"
        id="kia"
      />
      <input
        onChange={handleChange}
        type="checkbox"
        value="nissan"
        name="nissan"
        id="nissan"
      />
    </div>
  );
};

export default Checkboxes;
