import '../Sass/About.scss';
import ImageBannerAbout from '../assets/images/ImageBannerAbout.png'

function About() {
 
  return (
    <>
     
      <div className="banner-container">
        <img src={ImageBannerAbout} alt="photo d'un paysage" className="img-banner" />
      </div>
      <div className="card-about-container">
        {/* <select className="card-1">
          <option value="" className="card-title">Fiabilité</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <select className="card-1">
          <option value="" className="card-title">Respect</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <select className="card-1">
          <option value="" className="card-title">Service</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <select className="card-1">
          <option value="" className="card-title">Sécurité</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select> */}
          <article className="card-about-1">
            <h2 className="card-about-title">Fiabilité</h2>
          </article>
          <article className="card-about-1">
            <h2 className="card-about-title">Respect</h2>
          </article>
          <article className="card-about-1">
            <h2 className="card-about-title">Service</h2>
          </article>
          <article className="card-about-1">
            <h2 className="card-about-title">Sécurité</h2>
          </article>
      </div> 
    </>
  );
}

export default About;