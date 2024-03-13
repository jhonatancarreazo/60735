import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Acronimo = () => {
    const [ data, setData ] = useState([])

    useEffect(() => {
        const getData = (pais) => {
            const url = 'https://restcountries.com/v3.1/all'
            axios.get(url)
            .then((res) => {
                const dataFiltrada = res.data.find((country)=> country.name.common === pais)
                setData(dataFiltrada.cca3)
            })
        }
        getData('Peru')
    },[])

  return (
    <div>
        <h1>{data}</h1>
    </div>
  )
}

export default Acronimo
