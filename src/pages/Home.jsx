import React from 'react'
import { useData } from '../context/DataContext'

const Home = () => {
    const {name, state}= useData();
    console.log(name);
    console.log(state);
  return (
    <div>Home</div>
  )
}

export default Home