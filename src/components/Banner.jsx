import '../Sass/Banner.scss';

function Banner({image, text}) {
 
  return (
    <>
      <div className="banner-container">
        <img src={image} alt="photo d'un paysage" className="img-banner" />
        <h1>{text}</h1>
      </div>
    </>
  );
}

export default Banner;
