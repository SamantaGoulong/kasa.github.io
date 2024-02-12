
import '../Sass/Slideshow.scss';
import arrowLeft from '../assets/images/arrowLeft.png';
import arrowRight from '../assets/images/arrowRight.png';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';

// permet de définir la fonction Slideshow
function Slideshow() {
    // permet de récupèrer l'ID du logement depuis les paramètres d'URL
    const { id } = useParams()

    // permet de déclarer les états pour le titre, les images et l'index de l'image actuelle
    const [title, setTitle] = useState('')
    const [pictures, setPictures] = useState([])
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    // permet de mettre à jour le titre, les images et l'index de l'image actuelle lorsque l'ID du logement change
    useEffect(() => {
        const selectedLogement = data.find((item) => item.id === id)
        if (selectedLogement) {
            setTitle(selectedLogement.title)
            setPictures(selectedLogement.pictures)
           
        } else {
            setTitle('Logement non trouvé')
        }
    }, [id])

    // Fonction qui permet d'afficher l'image précédente dans le carrousel
    const previousImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1))
    }

    // Fonction permet d'afficher l'image suivante dans le carrousel
    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1))
    }
console.log(currentImageIndex)
    return (
        <>
            {/* Conteneur du diaporama */}
            <div className="carrousel-container">
                {/* permet de d'afficher l'image actuelle du carrousel */}
                {pictures.length > 0 && (
                    <img
                        src={pictures[currentImageIndex]}
                        alt={`${currentImageIndex + 1} du logement "${title}"`}
                        className="img-FicheLogement"
                    />
                )}
                {/* Apermet de d'afficher les flèches de navigation si le carrousel contient plus d'une image */}
                {pictures.length > 1 && (
                    <div className="arrow-container">
                        <img
                            src={arrowLeft}
                            alt="Flèche précédente"
                            className="arrowLeft"
                            onClick={previousImage}
                        />
                        <img
                            src={arrowRight}
                            alt="Flèche suivante"
                            className="arrowRight"
                            onClick={nextImage}
                        />
                    </div>
                )}
                {/* permet d'afficher la numérotation des images si le carrousel contient des images */}
                {currentImageIndex}
                {pictures.length > 0 && (
                    <p className="carrousel-numérotation">
                        {currentImageIndex + 6}/{pictures.length}
                    </p>
                )}
            </div>
        </>
    )
}


export default Slideshow;
