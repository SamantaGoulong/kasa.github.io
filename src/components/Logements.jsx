import '../Sass/Logements.scss'
import data from '../data.json'
import { Link } from 'react-router-dom'
import React from 'react'

function Logements() {
    return (
        <>
            {/* permetde faire une boucle sur les données et affiche un lien vers la page de détails de chaque logement */}
            {data.map((item, index) => (
                <Link to={'ficheLogement/' + item.id} className="logements-link" key={item.id}>
                    <div className="logements-card">
                        <img src={item.cover} alt="" className="logements-img" />
                        <h2 className="logements-title">{item.title}</h2>
                    </div>
                </Link>
            ))}
        </>
    )
}

export default Logements
