import { Link } from 'react-router-dom'
import './styles.scss'

export function Home () {
  return (
        <div className='home'>
            <Link to="/movies">
              <section className='section'>
                <img
                  src="../images/movies.png"
                  alt="movies"
                  className="section__img"
                />
                <h2 className="section__tittle section__tittle--opacity">Movies</h2>
              </section>
            </Link>
            <Link to="/series">
              <section className='section'>
                <img
                  src="../images/series.png"
                  alt="series"
                  className="section__img"
                />
                <h2 className="section__tittle">Series</h2>
              </section>
            </Link>
        </div>
  )
}
