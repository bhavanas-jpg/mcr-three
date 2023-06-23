import React, { useState } from 'react'
import { useData } from '../context/DataContext'
import SnackTable from './SnackTable';

const Home = () => {
  const { setSearchValue,sortedSnacks } = useData();

  return (
    <div>

      <h1>Snack Table</h1>
      <div>
        <input
          onChange={(e) => setSearchValue(e.target.value)}
          type="search"
          placeholder="Search with Products or ingredients"
        />
        <SnackTable snacks={sortedSnacks} />
      </div>
    </div>
  )
}

export default Home