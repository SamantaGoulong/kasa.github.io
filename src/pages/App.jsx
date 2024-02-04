import ReactDOM from 'react-dom'
import '../Sass/App.scss'
import data from '../data.json'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Home from './Home'
import About from './About'
import Footer from '../components/Footer'
import Error from './Error'
import FicheLogement from './FicheLogement'
import Logements from '../components/Logements'

function App() {
    console.log(data)
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/ficheLogement/:id" element={<FicheLogement />} />
                    <Route path="*" element={<Error />} />
                </Routes>
                <Footer />
            </Router>
        </>
    )
}

export default App
