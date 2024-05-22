import axios from 'axios'
import React, { useState } from 'react'

const useFetch = () => {
    const [response, setResponse] = useState()
    
    const getApi = (url) => {
        axios.get(url)
        .then(res => setResponse(res.data))
        .catch(err => console.log(err))
    }

    const getTypeApi = (url) => {
        axios.get(url)
        .then(res =>{
            const obj = { 
                results: res.data.pokemon.map(elem => elem.pokemon)
            }
            setResponse(obj)
        })
        .catch(err => console.log(err))
    }
    
    return [response, getApi, getTypeApi]
}

export default useFetch