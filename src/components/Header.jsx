import { Link } from 'react-router-dom'
import '../Sass/Header.scss'
import LOGO from '../assets/images/LOGO.png'

function Header() {
    return (
        <>
            <div className="navbar">
                <img src={LOGO} alt="Logo header" className="logo" />
                <div className="lien-navbar">
                    <Link to="/" className="link-nav">
                        Accueil
                    </Link>
                    <Link to="/about" className="link-nav">
                        A Propos
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Header
