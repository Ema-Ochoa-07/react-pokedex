import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import useFetch from '../hook/useFetch'
import PokeCard from '../components/PokedexPage/PokeCard'
import SelectType from '../components/SelectType'
import '../components/PokedexPage/styles/PokedexPage.css'

const PokedexPage = () => {

  const [typeSelected, setTypeSelected] = useState('allPokemons')

  const [searchName, setSearchName] = useState('')
  const trainer = useSelector( state => state.trainer)

  const [ pokemons, getPokemons, getTypePokemon ] = useFetch()

  useEffect(() => {
    if(typeSelected === 'allPokemons'){
      //hacemos la petición de todos los pokemons
      const url = 'https://pokeapi.co/api/v2/pokemon?limit=50&offset=0'
      getPokemons(url) 
    } else {
      //petición por todos los tipos
      getTypePokemon(typeSelected)
    } 
  }, [typeSelected])

  const inputName = useRef()
  const handleSearch = e => {
    e.preventDefault()
    setSearchName(inputName.current.value.trim().toLowerCase())
  }
  
  console.log(searchName)

  const callbackFilter = poke =>{
    const filterName = poke.name.includes(searchName)
    return filterName
  }

  return (
    <div>
      <header  className='dex__header'>
            <div className='dex__header-box1'></div>
            <div className='dex__header-box2' ></div>
            
            <div className='dex__header-img'>
              <img className='dex__img' src="../public/images/pokedex.png" alt="" />
            </div>

           <div className='dex__circle' >
              <div className="dex__circle-outer">
                <div className="dex__circle-inner1">
                  <div className="dex__circle-inner2" >
                  <div className="dex__circle-inner3" ></div>
                </div>
              </div>
            </div>
           </div>
      </header>
      <p className='dex__description'>Welcome {trainer}, here you will find your favorite pokemon</p>
      <form className='dex__form' onSubmit={handleSearch} action="">
        <input className='dex__form-input' ref={inputName} type="text" />
        <button className='dex__form-btn' >Buscar</button>
      </form>
      <div className='select__type'>
        <SelectType setTypeSelected={setTypeSelected}/>
      </div>

      <div className='poke__container'>
        {
          pokemons && pokemons.results.filter(callbackFilter).length == 0
          ? <h2>There are not pokemon that meet the filtes</h2>
          :(
            pokemons?.results.filter(callbackFilter).map( poke => (
              <PokeCard
                key={poke.url}
                poke={poke}
              />
            ))
          )
        }
      </div>
    </div>
  )
}

export default PokedexPage