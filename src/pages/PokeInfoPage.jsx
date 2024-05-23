import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
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
      <article className='prueba' >
        
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

      <article className='info'>
        <section className='info__img'>
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
 
          <section>
            <h2>Stats</h2>
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



        </section>
      </article>
      

      </article>
  )
}

export default PokeInfoPage