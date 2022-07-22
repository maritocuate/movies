import { BrowserRouter as Router } from 'react-router-dom'
import { Header } from './ui/Header'
import styles from './App.module.css'

function App () {
  return (
        <Router>
            <div className={styles.App}>
                <Header />
            </div>
        </Router>
  )
}

export default App
