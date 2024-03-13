import React, { useEffect, useState } from 'react'
import axios from 'axios'
const CountryInfo = () => {
    const [ data, setData ] = useState([])

    useEffect(()=> {
        const getData = (name) => {
            const url = `https://restcountries.com/v3.1/name/${name}`
            axios.get(url)
                .then((res) => setData(res.data[0].name.common))
                .catch((error) => console.log(error))
            
        }
        getData('Argentina')
    }, [])

  return (
    <div>
        <h1>{data}</h1>
    </div>
  )
}

export default CountryInfo
