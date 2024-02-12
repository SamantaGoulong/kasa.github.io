import { Link, useLocation } from 'react-router-dom'; // permet d'importer des Link et useLocation depuis react-router-dom
import '../Sass/Header.scss'; // permet d'importer des styles Sass pour le header
import LOGO from '../assets/images/LOGO.png'; // permet d'importer le logo

function Header() {
    const location = useLocation(); // permet d'utiliser useLocation pour obtenir l'URL actuelle

    return (
        <>
            <div className="navbar"> 
                <img src={LOGO} alt="Logo header" className="logo" /> 
                <div className="lien-navbar"> 
                   
                    <Link
                        to="/" // Lien vers la racine de l'URL (page d'accueil)
                        className={`link-nav ${location.pathname === '/' ? 'active' : ''}`}> {/* Condition pour ajouter la classe active si l'URL correspond à la racine */}
                        Accueil
                    </Link>
                    
                    <Link
                        to="/about" 
                        className={`link-nav ${location.pathname === '/about' ? 'active' : ''}`}> {/* Condition pour ajouter la classe active si l'URL correspond à "/about" */}
                        A Propos 
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Header; 
