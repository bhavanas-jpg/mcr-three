import React from 'react'
import { useData } from '../context/DataContext';

const SnackTable = ({snacks}) => {
    const {handleHeaderClick} = useData();
 
  return (
    <div>
             
      {  !snacks.length  ? <p>no snacks found </p> :
         <table>
      <thead>
        <tr>
          <th   onClick={()=>{ handleHeaderClick('id')
            }}>ID</th>
          <th  onClick={()=>handleHeaderClick('product_name')}>Product Name</th>
          <th onClick={()=>handleHeaderClick('product_weight')}>Product Weight</th>
          <th  onClick={()=>handleHeaderClick('price')}>Price</th>
          <th  onClick={()=>handleHeaderClick('calories')}>Calories</th>
          <th  onClick={()=>handleHeaderClick('ingredients')}>Ingredients</th>
        </tr>
      </thead>

      
         <tbody>
      {snacks?.map((snack) => (
          <tr key={snack.id}>
            <td>{snack.id}</td>
            <td >{snack.product_name}</td>
            <td >{snack.product_weight}</td>
            <td >{snack.price}</td>
            <td >{snack.calories}</td>
            <td >{snack.ingredients.join(', ')}</td>
          </tr>
        ))}
         </tbody>
     
     
    </table>
    
}
    </div>
  )
}

export default SnackTable