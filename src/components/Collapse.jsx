import '../Sass/Collapse.scss'
import arrowTop from '../assets/images/arrowTop.png'
import arrowBottom from '../assets/images/arrowBottom.png'
import React, { useState } from 'react'

function Collapse(props) {
const { titleCollapse, contentCollapse, equipments } = props

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className="containerCollapse">
                <div className="titleCollapse" onClick={() => setIsOpen(!isOpen)}>
                    {titleCollapse}
                    <button>
                        {isOpen ? (
                            <img src={arrowTop} alt="flèche vers le haut" className="arrowTop" />
                        ) : (
                            <img
                                src={arrowBottom}
                                alt="flèche vers le bas"
                                className="arrowBottom"
                            />
                        )}
                    </button>
                </div>
                {isOpen && (
                    <div className="contentCollapse">
                        {contentCollapse}
                        <ul>
                            {equipments &&
                                equipments.map((equipment, index) => (
                                    <li key={index}>{equipment}</li>
                                ))}
                        </ul>
                    </div>
                )}
            </div>
        </>
    )
}

export default Collapse
