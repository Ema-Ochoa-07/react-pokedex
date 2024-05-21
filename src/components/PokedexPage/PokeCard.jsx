import React, { useEffect } from 'react'
import useFetch from '../../hook/useFetch'
import { useNavigate } from 'react-router-dom'
import './styles/PokeCard.css'

const PokeCard = ( {poke} ) => {

  const [pokemon, getPokemon ] = useFetch()
  
  useEffect(() => {
    getPokemon(poke.url)  

  }, [])
  // console.log(pokemon)

  const navigate = useNavigate()

  const handleNavigate = ()  => {
    navigate(`/pokemon/${pokemon.name}`)
  }

  return (
    <div>
      <article className={`poke border__${pokemon?.types[0].type.name}`} onClick={handleNavigate}>
        <header className={`poke__header bg__${pokemon?.types[0].type.name}`}>
          <img className='poke__img' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        </header>

        <section className='poke__body'>
          <h3 className={`poke__name text__${pokemon?.types[0].type.name}`}>{pokemon?.name}</h3>
          <ul className='poke__types'> {
              pokemon?.types.map(typeInfo => (
              <li className='poke__types-item' key={typeInfo.type.url}> {typeInfo.type.name} </li>
            ))} 
          </ul>
            <hr className='poke__hr'/>            
          <ul className='poke__stats'>
            {
              pokemon?.stats.map(statInfo => (
                <li className='poke__item-stats' key={statInfo.stat.url} >
                  <span className='poke__stats-label' > {statInfo.stat.name} </span>
                  <span className='poke__stats-value' > {statInfo.base_stat} </span>
                </li>
              ))
            }
          </ul>
        </section>
      </article>
    </div>
  )
}

export default PokeCard