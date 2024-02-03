import '../Sass/About.scss';
import ImageBannerAbout from '../assets/images/ImageBannerAbout.png'
import Banner from '../components/Banner';
import Collapse from '../components/Collapse';



function About() {
 
  return (
    <>
      <Banner image={ImageBannerAbout} /> 
      <div className="about-container">
        <div className="Collapse-container">
            <Collapse titleCollapse="Fiabilité" contentCollapse="test" />
            <Collapse titleCollapse="Respect" contentCollapse="test" />
            <Collapse titleCollapse="Service" contentCollapse="test" />
            <Collapse titleCollapse="Sécurité" contentCollapse="test" />
        </div>
      </div>
    </>
  );
}

export default About;
