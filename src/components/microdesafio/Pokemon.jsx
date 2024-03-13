import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Pokemon = () => {
    const [ pokemon, setPokemon ] = useState([])

    useEffect(() => {
        const getPokemon = (name) => {

            const url = `https://pokeapi.co/api/v2/pokemon/${name}`
            axios.get(url)
                .then((res) => setPokemon(res.data.name))
                .catch((error) => console.log(error))
        }
        
        getPokemon('pikachu')

    }, [])

  return (
    <div>
        <h1>{pokemon}</h1>
    </div>
  )
}

export default Pokemon
