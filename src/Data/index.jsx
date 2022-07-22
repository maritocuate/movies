import { useEffect, useState } from 'react'

function Data () {
  const [movies, setMovies] = useState([])
  const [series, setSeries] = useState([])

  useEffect(() => {
    async function getMovies () {
      await fetch('https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/data.json')
        .then(response => response.json())
        .then(data => {
          const requestedData = data.entries

          function groupBy (list, keyGetter) {
            const map = new Map()
            console.log(map)
            list.forEach((item) => {
              const key = keyGetter(item)
              // console.log(key)
              if (!map.has(key)) {
                map.set(key, [item])
              } else {
                map.get(key).push(item)
              }
            })
            console.log(map)
            return map
          }

          const groupedByMovies = groupBy(
            requestedData,
            (movieData) => movieData.programType
          )

          const groupedBySeries = groupBy(
            requestedData,
            (serieData) => serieData.programType
          )

          setMovies(groupedByMovies.get('movie'))
          setSeries(groupedBySeries.get('series'))
        })
    }

    getMovies()
  }, [])

  return {
    movies,
    series
  }
}

export default Data
