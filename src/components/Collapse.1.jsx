import arrowTop from '../assets/images/arrowTop.png'
import arrowBottom from '../assets/images/arrowBottom.png'
import React, { useState } from 'react'

// permet de définir la fonction Collapse qui prend des propriétés en entrée
function Collapse(props) {
    //permet de destructurer les propriétés passées au composant
    const { titleCollapse, contentCollapse, children } = props

    //permet d'initialiser l'état du Collapse pour déterminer s'il est ouvert ou fermé
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className="containerCollapse">
                {/* évènement qui permet de basculer l'état d'ouverture */}
                <div className="titleCollapse" onClick={() => setIsOpen(!isOpen)}>
                    {titleCollapse}
                    <button>
                        {/* Affiche une flèche vers le bas si le Collapse est ouvert, sinon affiche une flèche vers le haut */}
                        {isOpen ? (
                            <img
                                src={arrowBottom}
                                alt="flèche vers le bas"
                                className={`arrowBottom ${isOpen ? 'rotate' : ''}`}
                            />
                        ) : (
                            <img
                                src={arrowTop}
                                alt="flèche vers le haut"
                                className={`arrowTop ${isOpen ? 'rotate' : ''}`}
                            />
                        )}
                    </button>
                </div>
                {/* Affiche le contenu du Collapse s'il est ouvert */}
                {isOpen && (
                    <div className="contentCollapse">
                        {/* Affiche les enfants du Collapse */}
                        {children}
                        {/* Affiche le contenuCollapse spécifié */}
                        {contentCollapse}
                    </div>
                )}
            </div>
        </>
    )
}
export default Collapse
