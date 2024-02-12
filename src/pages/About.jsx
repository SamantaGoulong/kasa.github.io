import '../Sass/About.scss'
import ImageBannerAbout from '../assets/images/ImageBannerAbout.png'
import Banner from '../components/Banner'
import Collapse from '../components/Collapse'

function About() {
    return (
        <>
            <Banner image={ImageBannerAbout} />
            <div className="about-container">
                <div className="Collapse-container">
                    <Collapse
                        titleCollapse="Fiabilité"
                        contentCollapse="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informatinos sont régulièrement vérifiées par nos équipes."
                    />
                    <Collapse
                        titleCollapse="Respect"
                        contentCollapse="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de la plateforme."
                    />
                    <Collapse
                        titleCollapse="Service"
                        contentCollapse="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de la plateforme."
                    />
                    <Collapse
                        titleCollapse="Sécurité"
                        contentCollapse="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement corrrespond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                    />
                </div>
            </div>
        </>
    )
}

export default About
