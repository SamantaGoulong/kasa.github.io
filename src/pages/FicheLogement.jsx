import '../Sass/FicheLogement.scss';
// import ImageBannerAbout from '../assets/images/ImageBannerAbout.png';
import Slideshow from '../components/Slideshow.jsx'

function FicheLogement() {
 
  return (
    <>
      
      <div className="FicheLogement-container">
        <Slideshow />
        
        {/* <img src={ImageBannerAbout} alt="photo d'un logement" className="img-FicheLogement" /> */}
        
        <div className="FicheLogement-card-left" >
          <h2 className="TitleFicheLogement"> Cozy loft on the Canal Saint-Martin</h2>
          <p className="VilleFicheLogement">Paris, Ile-de-France</p>
          
          <button className="FicheLogement-filtre">Cozy</button>
          <button className="FicheLogement-filtre">Canal</button>
          <button className="FicheLogement-filtre">Paris 10</button>
        </div>

        <div className="FicheLogement-card-right" >
          <p className="MetroFicheLogement">Alexandre Dumas</p>
          <button className="picture"></button>
          <div class="card-rating">
                <i class="fa-xs fa-solid fa-star" aria-hidden="true"></i>
                <i class="fa-xs fa-solid fa-star" aria-hidden="true"></i>
                <i class="fa-xs fa-solid fa-star" aria-hidden="true"></i>
                <i class="fa-xs fa-solid fa-star" aria-hidden="true"></i>
                <i class="fa-xs fa-solid fa-star neutral-star" aria-hidden="true"></i>
            <span class="sr-only">Note de 4 sur 5</span>
          </div>  
        </div>

        <div className="FicheLogement-select-container">
          <select className="FicheLogement-select">
            <option value="" className="FicheLogement-select">Description</option>
          </select>
          <select className="FicheLogement-select">
            <option value="" className="FicheLogement-select">Equipements</option>
          </select>
        </div>
      </div>
        
     
  
    </>
  );
}

export default FicheLogement;