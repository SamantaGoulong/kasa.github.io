import '../Sass/App.scss' // permet d'importer les styles Sass pour l'application
import data from '../data.json' // permet d'importer les données des logements depuis le fichier data.json
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' // permet d'importer les composants React Router pour la navigation

// permet d'importer les composants nécessaires à l'application
import Header from '../components/Header'
import Home from './Home'
import About from './About'
import Footer from '../components/Footer'
import Error from './Error'
import FicheLogement from './FicheLogement'

function App() {
    console.log(data)

    return (
        <>
            {/* Router pour gérer la navigation */}
            <Router>
                {/* Composant Header pour l'en-tête de l'application */}
                <Header />
                {/* Routes pour définir les chemins et les composants à afficher */}
                <Routes>
                    <Route path="/" element={<Home />} /> {/* Page d'accueil */}
                    <Route path="/about" element={<About />} /> {/* Page "A propos" */}
                    <Route path="/ficheLogement/:id" element={<FicheLogement />} />{' '}
                    {/* Page de détails d'un logement */}
                    <Route path="*" element={<Error />} />{' '}
                    {/* Page d'erreur pour les routes non trouvées */}
                </Routes>
                {/* Composant Footer pour le pied de page de l'application */}
                <Footer />
            </Router>
        </>
    )
}

export default App
