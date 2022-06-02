import React, { createContext } from 'react';

export const CarsContext = createContext({});

const addFilter = (filters, filterToAdd) => {
  //   console.log(filterToAdd);
  //   const res = filterToAdd;
  //   const arr = [...filters.map((filter) => filter), filterToAdd];
  //   arr.push(filterToAdd);
  //   return [arr];
};

const clearItem = (filters, filterToRemove) => {
  return filters.filter((filter) => filter.make !== filterToRemove);
};

export const CarsProvider = ({ children }) => {
  const [filters, setFilters] = React.useState({});

  React.useEffect(() => {
    const getCars = async () => {
      console.log(filters);
    };

    getCars();
  }, [filters]);

  //   const addItemToFilters = (filterToAdd: ) => {
  //     setFilters(addFilter(filters, filterToAdd));
  //   };
  //   const clearItemFromFilters = (filterToRemove: any) => {
  //     setFilters(clearItem(filters, filterToRemove));
  //   };

  const value = {
    setFilters,
    filters,
  };
  return <CarsContext.Provider value={value}>{children}</CarsContext.Provider>;
};
