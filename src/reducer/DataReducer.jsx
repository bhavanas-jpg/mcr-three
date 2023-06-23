import React from 'react'

const DataReducer = () => {
    
 const initialState={
    data: ["bhavana S"]
 }
 const dataReducer = (state,action)=>{
    switch(action.type){
        default:
        return state;
    }
 }


 return {initialState, dataReducer}
}

export default DataReducer