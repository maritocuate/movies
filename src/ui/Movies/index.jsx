import React, { useEffect, useState } from 'react'
import Paginate from './Paginate'
import SearchBar from './SearchBar'
import './styles.scss'

const Movies = ({ type }) => {
  const [movies, setMovies] = useState([])
  const [series, setSeries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    callApiList('https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/data.json')
    setFilter('')
  }, [type])

  const updateSearch = (name) => {
    const currentItems = type === 'movies' ? movies : series
    const result = currentItems.filter(item => {
      const postName = item.title.toLowerCase()
      return postName.includes(name.toLowerCase())
    })
    setFilter(result)
  }

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
    <>
        <SearchBar inputValue={filter} search={updateSearch} />
        <div className='films'>
            <h2>Popular {type}</h2>
            <Paginate items={(filter !== '') ? filter : ((type === 'movies') ? movies : series)}/>
        </div>
    </>
  )
}

export default Movies
