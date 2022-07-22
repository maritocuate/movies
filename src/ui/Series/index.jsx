import './styles.scss'

import Data from '../../Data'
import { Cover } from '../Cover'

export function Series () {
  const { movies } = Data()

  return (
        <div className='series-page'>
            {
              movies.map(({ images, title, description }, i) => (
                <Cover
                  key={i}
                  image={images['Poster Art'].url}
                  title={title}
                  description={description}
                />
              ))
            }
        </div>
  )
}
