import '../Sass/About.scss';
import ImageBannerAbout from '../assets/images/ImageBannerAbout.png'
import Banner from '../components/Banner';
import Collapse from '../components/Collapse';



function About({image}) {
 
  return (
    <>
        <Banner image={ImageBannerAbout} /> 
      {/* <div className="banner-container"> */}
        {/* <img src={imageAbout} alt="photo d'un paysage" className="img-banner" /> */}
      {/* </div> */}
        <div className="Collapse-container">
            <Collapse titleCollapse="Fiabilité" contentCollapse="test" />
            <Collapse titleCollapse="Respect" contentCollapse="test" />
            <Collapse titleCollapse="Service" contentCollapse="test" />
            <Collapse titleCollapse="Sécurité" contentCollapse="test" />
        </div>
    </>
  );
}

export default About;