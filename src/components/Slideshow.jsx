import '../Sass/Slideshow.scss'
import ImageBannerAbout from '../assets/images/ImageBannerAbout.png'
import arrowLeft from '../assets/images/arrowLeft.png'
import arrowRight from '../assets/images/arrowRight.png'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import data from '../data.json'

function Slideshow() {
    const { id } = useParams()
    const [title, setTitle] = useState('')
    const [cover, setCover] = useState('')
    const [pictures, setPictures] = useState([])
     const [currentImageIndex, setCurrentImageIndex] = useState(0)
    useEffect(() => {
        const selectedLogement = data.find((item) => item.id === id)
        if (selectedLogement) {
            setCover(selectedLogement.cover)
            setPictures(selectedLogement.pictures)
            setTitle(selectedLogement.title)
        } else {
            setTitle('Logement non trouvé')
        }
    }, [id])

    const previousImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1))
    }

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1))
    }

    return (
        <>
            <div className="carrousel-container">
                {pictures.length > 0 && (
                    <img
                        src={pictures[currentImageIndex]}
                        alt={`Photo ${currentImageIndex + 1} du logement "${title}"`}
                        className="img-FicheLogement"
                    />
                )}
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
                <p className="carrousel-numérotation">
                    {currentImageIndex + 1}/{pictures.length}
                </p>
            </div>
        </>
    )
}

export default Slideshow



// function Slideshow() {
//     const { id } = useParams()
//     const [title, setTitle] = useState('')
//      const [cover, setCover] = useState('')
//     const [pictures, setPictures] = useState([])
//     useEffect(() => {
//         const selectedLogement = data.find((item) => item.id === id)
//         if (selectedLogement) {
//             setCover(selectedLogement.cover)
//             setPictures(selectedLogement.pictures)
//             setTitle(selectedLogement.title)
//         } else {
//             setTitle('Logement non trouvé')
//         }
//     }, [id])
    
//     return (
//         <>
//             <div className="carrousel-container">
//                 {pictures.map((image, index) => (
//                     <img
//                         key={index}
//                         src={image}
//                         alt={`Photo ${index + 1} du logement "${title}"`}
//                         className="img-FicheLogement"
//                     />
//                 ))}
//                 {/* <img src={pictures} alt="photo d'un logement" className="img-FicheLogement" /> */}
//                 <div className="arrow-container">
//                     <img src={arrowLeft} alt="flèche précédent" className="arrowLeft" />
//                     <img src={arrowRight} alt="flèche suivant" className="arrowRight" />
//                 </div>
//                 <p className="carrousel-numérotation">1/4</p>
//             </div>
//         </>
//     )
// }

// export default Slideshow
