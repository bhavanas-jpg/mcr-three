import React, { createContext, useContext, useReducer } from 'react'
import DataReducer from '../reducer/DataReducer';

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {

    const {initialState, dataReducer} = DataReducer();
    const [state,dispatch]= useReducer(dataReducer, initialState)
    const name = "Bhavana";




    return (
        <DataContext.Provider value={{ 
            state,
            dispatch,
            name }}>
            {children}
        </DataContext.Provider>
    )
}



export default DataProvider;

export const useData = () => useContext(DataContext)