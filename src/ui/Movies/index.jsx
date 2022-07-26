import React, { useEffect, useState } from 'react'
import Paginate from './Paginate'
import './styles.scss'

const Movies = ({ type }) => {
  const [movies, setMovies] = useState([])
  const [series, setSeries] = useState([])

  useEffect(() => {
    callApiList('https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/data.json')
  }, [])

  const callApiList = async (urlApi) => {
    if (movies.length) return
    await fetch(urlApi)
      .then(response => response.json())
      .then(data => {
        const requestedData = data.entries
        const totalMovies = requestedData.filter(item => item.programType === 'movie')
        setMovies(totalMovies)
        const totalSeries = requestedData.filter(item => item.programType === 'series')
        setSeries(totalSeries)
      })
  }

  return (
      <div className='films'>
          <Paginate items={(type === 'movies') ? movies : series}/>
      </div>
  )
}

export default Movies
