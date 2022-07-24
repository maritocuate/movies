import { Link, useLocation } from 'react-router-dom'
import './styles.scss'

export function Header () {
  const { pathname } = useLocation()

  return (
        <nav className='header'>
            <Link to="/">
                <img
                    src="../images/logo.png"
                    alt="Dreadful Tomato"
                    className='logo'
                />
            </Link>

            {(pathname === '/movies' || pathname === '/series')
              ? (
                    <>
                        <Link
                            className={pathname === '/movies' ? 'active' : null}
                            to="/movies">
                            <div className='navbutton'>
                                <img
                                    src="../images/icon-movies.png"
                                    alt="icon movies"
                                    className="button__icon"
                                />
                                <span>Movies</span>
                            </div>
                        </Link>
                        <Link
                            className={pathname === '/series' ? 'active' : null}
                            to="/series">
                            <div className='navbutton'>
                                <img
                                    src="../images/icon-series.png"
                                    alt="icon movies"
                                    className="button__icon"
                                />
                                <span>Series</span>
                            </div>
                        </Link>
                    </>
                )
              : null}
        </nav>
  )
}
