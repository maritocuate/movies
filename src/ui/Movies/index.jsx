import React from 'react'
import { useObserver } from 'mobx-react'
import './styles.scss'

import { StoreContext } from '../../Store'
import { Cover } from '../Cover'

export function Movies () {
  const store = React.useContext(StoreContext)

  return useObserver(() => (
        <div className='series-page'>
            {
              store.movies.map(({ images, title, description }, i) => (
                <Cover
                  key={i}
                  image={images['Poster Art'].url}
                  title={title}
                  description={description}
                />
              ))
            }
        </div>
  ))
}
