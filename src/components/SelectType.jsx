import React, { useEffect, useState } from 'react'
import useFetch from '../hook/useFetch'
import './PokedexPage/styles/SelectType.css'

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
    <select className='select__type' onChange={handleChange} >
      <option value="allPokemons" aria-placeholder='sadsadsadsa' >Todos los Tipos:</option>
      {
        types?.results.map(typInfo => (
          <option className='select__type-option' key={typInfo.url} value={typInfo.url}>{typInfo.name}</option>
        ))
      }
    </select>
  )
}

export default SelectType