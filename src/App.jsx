import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { StoreProvider } from './Store'
import { Header } from './ui/Header'
import { Movies } from './ui/Movies'
import { Home } from './ui/Home'
import { Series } from './ui/Series'
import styles from './App.module.css'

function App () {
  return (
    <div className={styles.App}>
        <StoreProvider>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movies" element={<Movies />} />
                    <Route path="/series" element={<Series />} />
                </Routes>
            </Router>
        </StoreProvider>
  </div>
  )
}

export default App
