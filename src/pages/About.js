import '../Sass/About.scss';
import ImageBannerAbout from '../assets/images/ImageBannerAbout.png'

function About() {
 
  return (
    <>
     
      <div className="banner-container">
        <img src={ImageBannerAbout} alt="photo d'un paysage" className="img-banner" />
      </div>
      <div className="card-container">
    
          <article className="card-1">
            <h2 className="card-title">Fiabilité</h2>
          </article>
          <article className="card-1">
            <h2 className="card-title">Respect</h2>
          </article>
          <article className="card-1">
            <h2 className="card-title">Service</h2>
          </article>
          <article className="card-1">
            <h2 className="card-title">Sécurité</h2>
          </article>
      </div> 
    </>
  );
}

export default About;