import React, { createContext, useContext, useReducer, useState } from 'react'

import { snacks } from "../data/tableData"

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
    const [searchValue, setSearchValue] = useState("");
    const [sortColumn, setSortColumn] = useState(null);
    const [sortDirection, setSortDirection] = useState('asc');

    let searchSnack;

    searchSnack =
        searchValue.length > 0 ?
            snacks.filter(snack => snack.product_name.toLowerCase().includes(searchValue.toLowerCase()) ||
                snack.ingredients.join(', ').toLowerCase().includes(searchValue.toLowerCase())
            ) : snacks;

    const handleHeaderClick = (column) => {

        if (column === sortColumn) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortColumn(column);
            setSortDirection('asc');
        }
    };

    const sortedSnacks = [...searchSnack].sort((a, b) => {
        if (sortColumn) {
            const aValue = a[sortColumn];
            const bValue = b[sortColumn];

            if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
            if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
        }
        return 0;
    });

    return (
        <DataContext.Provider value={{
            snacks,
            searchSnack,
            searchValue, setSearchValue,
            handleHeaderClick,
            sortedSnacks
        }}>
            {children}
        </DataContext.Provider>
    )
}



export default DataProvider;

export const useData = () => useContext(DataContext)