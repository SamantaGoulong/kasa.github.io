import '../Sass/Banner.scss';
import ImageBannerHome from '../assets/images/ImageBannerHome.png'

function Banner() {
 
  return (
    <>
      <div className="banner-container">
        <img src={ImageBannerHome} alt="photo d'un paysage" className="img-banner" />
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
    </>
  );
}

export default Banner;