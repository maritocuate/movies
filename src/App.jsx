import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Header } from './ui/Header'
import { Movies } from './ui/Movies'
import { Home } from './ui/Home'
import styles from './App.module.css'

function App () {
  return (
    <div className={styles.App}>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<Movies />} />
            </Routes>
        </Router>
  </div>
  )
}

export default App
