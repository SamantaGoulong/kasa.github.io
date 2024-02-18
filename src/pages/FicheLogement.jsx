import '../Sass/FicheLogement.scss'
import Slideshow from '../components/Slideshow.jsx'
import Collapse from '../components/Collapse'
import data from '../data.json'
import etoileGrise from '../assets/images/etoileGrise.png'
import etoileRouge from '../assets/images/etoileRouge.png'
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function FicheLogement() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [location, setLocation] = useState('')
    const [tags, setTags] = useState([])
    const [name, setName] = useState('')
    const [picture, setPicture] = useState('')
    const [description, setDescription] = useState('')
    const [equipments, setEquipments] = useState([])

    const [rating, setRating] = useState('')
    const range = [1, 2, 3, 4, 5]

    useEffect(() => {
        const selectedLogement = data.find((item) => item.id === id)
        if (selectedLogement) {
            setTitle(selectedLogement.title)
            setLocation(selectedLogement.location)
            setTags(selectedLogement.tags)
            setName(selectedLogement.host.name)
            setPicture(selectedLogement.host.picture)
            setDescription(selectedLogement.description)
            setEquipments(selectedLogement.equipments)
            setRating(selectedLogement.rating)
        } else {
            navigate('/error')
        }
    }, [id, navigate])

    return (
        <>
            <div className="FicheLogement-container">
                <Slideshow />
                <div className="container-info">
                    <div className="FicheLogement-info-left">
                        <h2 className="TitleFicheLogement">{title}</h2>
                        <p className="LocationFicheLogement">{location}</p>
                        <div className="FicheLogement-tags-container">
                            {tags.map((item, index) => (
                                <button className="FicheLogement-tags" key={index}>
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="FicheLogement-info-right">
                        <div className="profil-proprietaire">
                            <p className="NameFicheLogement numero-rang-name">{name}</p>
                            <img
                                src={picture}
                                alt="profil"
                                className="PictureFicheLogement numero-rang-profil"
                            />
                        </div>
                        <div className="etoile-container numero-rang-etoile">
                            {range.map((rangeElem) =>
                                rating >= rangeElem ? (
                                    <span key={rangeElem.toString()}>
                                        <img
                                            src={etoileRouge}
                                            className="etoileFicheLogement"
                                            alt="etoile"
                                        />
                                    </span>
                                ) : (
                                    <span key={rangeElem.toString()}>
                                        <img
                                            src={etoileGrise}
                                            className="etoileFicheLogement"
                                            alt="etoile"
                                        />
                                    </span>
                                )
                            )}
                        </div>
                    </div>
                </div>

                <div className="FicheLogement-Collapse-container">
                    <div className="description">
                        {/* <Collapse titleCollapse="Description" contentCollapse={description}> */}
                        <Collapse titleCollapse="Description">{description}</Collapse>
                    </div>
                    <div className="equipements">
                        <Collapse titleCollapse="Equipements">
                            <ul>
                                {equipments &&
                                    equipments.map((equipment, index) => (
                                        <li key={index}>{equipment}</li>
                                    ))}
                            </ul>{' '}
                        </Collapse>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FicheLogement
