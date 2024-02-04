import '../Sass/Slideshow.scss'
import ImageBannerAbout from '../assets/images/ImageBannerAbout.png'

function Slideshow() {
    return (
        <>
            <img src={ImageBannerAbout} alt="photo d'un logement" className="img-FicheLogement" />
        </>
    )
}

export default Slideshow
