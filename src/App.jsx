import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import styles from './App.module.css'
import { Header } from './ui/Header'
import Movies from './ui/Movies'
import { Home } from './ui/Home'
// import { Series } from './ui/Series'
import { Footer } from './ui/Footer'

function App () {
  return (
    <div className={styles.App}>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<Movies type='movies' />} />
                <Route path="/series" element={<Movies type='series' />} />
            </Routes>
            <Footer />
        </Router>
  </div>
  )
}

export default App
