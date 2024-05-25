import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import useFetch from '../hook/useFetch'
import PokeCard from '../components/PokedexPage/PokeCard'
import SelectType from '../components/SelectType'
import '../components/PokedexPage/styles/PokedexPage.css'
import Pagination from '../components/Pagination/Pagination'
import { Link } from 'react-router-dom'

const PokedexPage = () => {
  
    /**Recibir la petición Fetch** */
  const [ pokemons, getPokemons, getTypePokemon ] = useFetch()

   
    /******** */ 
  const [typeSelected, setTypeSelected] = useState('allPokemons')

  const [searchName, setSearchName] = useState('')
  const trainer = useSelector( state => state.trainer)
  
  useEffect(() => {
    if(typeSelected === 'allPokemons'){
      // const url = `https://pokeapi.co/api/v2/pokemon?limit=${paginate}`
      const url = 'https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0'
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
  // console.log(searchName)

  const callbackFilter = poke =>{
    const filterName = poke.name.includes(searchName)
    return filterName
  }

   /**PAGINATION*/
   const [cantPokemons, setcantPokemons] = useState(20)
   const [paginate, setPaginate] = useState(1)
 
   const endIndex =  paginate * cantPokemons
   const startIndex = endIndex - cantPokemons

   const pokemonsXPage = pokemons?.results.filter(callbackFilter).slice(startIndex, endIndex)
   const totalPages = Math.ceil(pokemons?.results.length / cantPokemons)

  return (
    <div className='container_pokedex-page'>
      <header  className='dex__header'>
            <div className='dex__header-box1'></div>
            <div className='dex__header-box2' ></div>
            
            <div className='info__header-img'>
                <Link to = '/pokedex'> <img className='dex__img' src="../images/pokedex.png" alt=""/></Link>
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
      
      <div>
              <div className='dex__description' >
        <span className='dex__description-1' >Bienvenido {trainer},</span>
        <span className='dex__description-2'>   aquí podrás encontrar tu pokemon favorito:</span>
      </div>
      
      <div className='dex__search' >
      <form className='dex__form' onSubmit={handleSearch} action="">
          <input className='dex__form-input' ref={inputName} type="text" />
          <button className='dex__form-btn' >Buscar</button>
      </form>
        <div className='select__types'>
          <SelectType setTypeSelected={setTypeSelected}/>
        </div>
      </div>
      
      <div className='dex__pagination'>
        <Pagination 
          paginate={paginate}
          setPaginate={setPaginate}
          totalPages={totalPages}
        />
      </div>

      <div className='poke__container'>
        {
          pokemons && pokemons.results.filter(callbackFilter).length == 0
          ? <h2>There are not pokemon that meet the filtes</h2>
          :(
            pokemonsXPage?.map( poke => (
              <PokeCard
                key={poke.url}
                poke={poke}
              />
            ))
          )
        }
      </div>
      </div>
    </div>
  )
}

export default PokedexPage