import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import useFetch from '../hook/useFetch'
import '../components/PokeInfoPage/PokeInfoPage.css'

const PokeInfoPage = () => {

  const { name } = useParams()

  const [pokemon, getPokemon] = useFetch()

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`
    getPokemon(url)

  }, [name])
  
console.log(pokemon)

// líneas de carga
let loader1 = (pokemon?.stats[0].base_stat) + ""+ "%"
let loader2 = (pokemon?.stats[1].base_stat) + ""+ "%"
let loader3 = (pokemon?.stats[2].base_stat) + ""+ "%"
let loader4 = (pokemon?.stats[3].base_stat) + ""+ "%"
let loader5 = (pokemon?.stats[4].base_stat) + ""+ "%"
let loader6 = (pokemon?.stats[5].base_stat) + ""+ "%"



  return (
  <div>
      <article className='head' >
        
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
      </article>
        
      <article className='info__container' >
  
        <article className='info'>
          <section className={`info__img bg__${pokemon?.types[0].type.name}`}>
            <img  className='info__img-poke' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
          </section>
  
          <section>
            <h2 className='info__id' >  <span># </span> {pokemon?.id} </h2>
            
            <div className='info__title'>
              <h2 className='info__title-name'>{pokemon?.name}</h2>
            </div>
  
            <ul className='info__dimensions' >
              <li className='info__dimension-weight'>
                 <span>Peso</span> {pokemon?.weight}
              </li>
  
              <li className='info__dimension-height'>
                 <span>Altura</span> {pokemon?.height}
              </li>
            </ul>
  
            <ul className='info__characteristic'>
              <li className='info__characteristic-types'>
                Tipo
  
                <div className='info__characteristic-item1'>
                {pokemon?.types.map(type  => (
                    <h3 className='info__type' key={type.type.url} > {type.type.name} </h3>
                  ))}
                </div>
              </li>
              <li className='info__characteristic-skills'>
              Habilidades
                <div className='info__characteristic-item2' >
                  {pokemon?.abilities.map(skill  => (
                      <h3 className='info__skill' key={skill.ability.url} > {skill.ability.name} </h3>
                    ))} 
                </div>
              </li>
            </ul>
  
          </section>
        </article>
  
        <article className='stats'>
          <section>
                <h2>Estadísticas</h2>
                <ul className='info__stats'>
                  <div  className='info__stats-list' >
                    <h3>Hp</h3>
                    <h3>{pokemon?.stats[0].base_stat}</h3>
                  </div>
                  <div className='loaders'>
                  <li className='info__stats-item' style={{ width: loader1 }}></li>
                  </div>
                  
    
                  <div className='info__stats-list' >
                    <h3>Ataque</h3>
                    <h3>{pokemon?.stats[1].base_stat}</h3>
                  </div>
                  <div className='loaders'>
                  <li className='info__stats-item' style={{ width: loader2 }}></li>
                  </div>
    
                  <div className='info__stats-list' >
                    <h3>Defensa</h3>
                    <h3>{pokemon?.stats[2].base_stat}</h3>
                  </div>
                  <div className='loaders'>
                  <li className='info__stats-item' style={{ width: loader3 }}></li>
                  </div>
    
                  <div className='info__stats-list' >
                    <h3>Velocidad</h3>
                    <h3>{pokemon?.stats[3].base_stat}</h3>
                  </div>
                  <div className='loaders'>
                  <li className='info__stats-item' style={{ width: loader4 }}></li>
                  </div>
    
                  <div className='info__stats-list' >
                    <h3>At.Especial</h3>
                    <h3>{pokemon?.stats[4].base_stat}</h3>
                  </div>
                  <div className='loaders'>
                  <li className='info__stats-item' style={{ width: loader5 }}></li>
                  </div>
    
                  <div className='info__stats-list' >
                    <h3>Def.Especial</h3>
                    <h3>{pokemon?.stats[5].base_stat}</h3>
                  </div>
                  <div className='loaders'>
                  <li className='info__stats-item' style={{ width: loader6 }}></li>
                  </div>
                </ul>
          </section> 
        </article>   
        
      </article>

      <article className= 'movements'>
      <h2 className='movements__name'>Movimientos</h2>
        <section className='info__movements'>
          <ul className='info__moves'>
            {pokemon?.moves.map(moveElm => (
             <li className='info__mov-item'
              key={moveElm.move.url}
             >{moveElm.move.name}</li>
            ))}
          </ul>
        </section>
      </article>
  </div>

  )
}

export default PokeInfoPage