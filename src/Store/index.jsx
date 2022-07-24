import React, { useEffect } from 'react'
import { useLocalStore } from 'mobx-react'

export const StoreContext = React.createContext()

export const StoreProvider = ({ children }) => {
  useEffect(() => {
    async function getMovies () {
      await fetch('https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/data.json')
        .then(response => response.json())
        .then(data => {
          const requestedData = data.entries
          const totalMovies = requestedData.filter(item => item.programType === 'movies')
          store.setMovies(totalMovies)
          const totalSeries = requestedData.filter(item => item.programType === 'series')
          store.setSeries(totalSeries)
        })
    }

    getMovies()
  }, [])

  const store = useLocalStore(() => ({
    movies: [],
    series: [],
    setMovies: (movies) => {
      store.movies = movies
    },
    setSeries: (series) => {
      store.series = series
    }
  }))

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  )
}
