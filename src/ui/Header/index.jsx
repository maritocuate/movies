import { Link, useLocation } from 'react-router-dom'
import styles from './Header.module.scss'

export function Header () {
  const { pathname } = useLocation()
  return (
        <nav className={styles.header}>
            <Link to="/">
                <img
                    src="../images/logo.png"
                    alt="Dreadful Tomato"
                    className={styles.logo}
                />
            </Link>

            {
                (pathname === '/movies' || pathname === '/series')
                  ? (
                    <>
                        <Link to="/movies">
                            <div className={styles.navbutton}>
                                <img
                                    src="../images/icon-movies.png"
                                    alt="icon movies"
                                    className="button__icon"
                                />
                                <span>Movies</span>
                            </div>
                        </Link>
                        <Link to="/series">
                            <div className={styles.navbutton}>
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
                  : ('')
              }
        </nav>
  )
}
