import React, { useEffect, useState } from 'react'
import './styles.scss'

import { Cover } from '../Cover'

const Movies = ({ type }) => {
  const [movies, setMovies] = useState([])
  const [series, setSeries] = useState([])
  const films = type === 'movies' ? movies : series

  useEffect(() => {
    callApiList('https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/data.json')
  }, [])

  const callApiList = async (urlApi) => {
    if (movies.length) return
    console.log('call api')
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
        <div className='films-page'>
            {
                films.map(({ images, title, description }, i) => (
                    <Cover
                        key={title}
                        image={images['Poster Art'].url}
                        title={title}
                        description={description}
                    />
                ))
            }
        </div>
  )
}

export default Movies
