import React, { useRef } from 'react'
import { setTrainer } from '../store/slices/trainer.slice'
import { useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import '../components/HomePage/HomePage.css'


const HomePage = () => {


  const dispatch = useDispatch()

  const navigate = useNavigate()

  const inputTrainer = useRef()

  const handleSubmit = e => {

    window.scrollTo({
      top: 0,
    });

    e.preventDefault()
    dispatch(setTrainer(inputTrainer.current.value.trim()))
    navigate('/pokedex')
}


  return (
    <div> 
      <div className='home__container'>

        <img className='home__img' src="../images/pokedex.png" alt="" />
        <h1 className='home__title'>¡Hola entrenador!</h1>
        <p className='home__description'>Para poder comenzar, escribe tu nombre</p>
        <form className='home__form' onSubmit={ handleSubmit } action="">
          <input className='home__form-input' ref={inputTrainer} type="text" placeholder='Tu nombre...' />
          <button className='home__form-btn' >Comenzar</button>
        </form>
      </div>
      <footer className='home__footer'>
            <div className='home__footer-box1'></div>
            <div className='home__footer-box2' ></div>
            
           <div className='home__circle' >
            <div className="home__circle-outer">
              <div className="home__circle-inner1">
                <div className="home__circle-inner2" >
                  <div className="home__circle-inner3" ></div>
                  </div>
                </div>
            </div>
           </div>
        </footer>
    </div>
  )
}

export default HomePage