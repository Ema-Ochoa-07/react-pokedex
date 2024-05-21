import React, { useEffect, useState } from 'react'
import useFetch from '../hook/useFetch'

const SelectType = ( {setTypeSelected} ) => {

  const [ types, getTypes ] = useFetch()

  useEffect(() => {
    const url = 'https://pokeapi.co/api/v2/type?offset=0&limit=100'
    getTypes(url)
  }, [])
  // console.log(types)

  const handleChange = e => {

    setTypeSelected(e.target.value)    
  }
  
  return (
    <select onChange={handleChange} >
      <option value="allPokemons">All Pokemons</option>
      {
        types?.results.map(typInfo => (
          <option key={typInfo.url} value={typInfo.url}>{typInfo.name}</option>
        ))
      }
    </select>
  )
}

export default SelectType