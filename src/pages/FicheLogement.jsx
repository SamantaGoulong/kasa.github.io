import '../Sass/FicheLogement.scss';
// import ImageBannerAbout from '../assets/images/ImageBannerAbout.png';
import Slideshow from '../components/Slideshow.jsx'
import Collapse from '../components/Collapse';
import data from '../data.json';
import etoile from '../assets/images/etoile.png'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


function FicheLogement() {
  const { id } = useParams()
  const [title, setTitle] = useState('') 
  const [location, setLocation] = useState('')
  const [tags, setTags] = useState('')
  const [name, setName] = useState('')
  const [picture, setPicture] = useState('')
  const [description, setDescription] = useState('')
  const [equipments, setEquipments] = useState('')
  
  useEffect(() => {
        const selectedLogement = data.find((item) => item.id === id)
        if (selectedLogement) {
            setTitle(selectedLogement.title)
            setLocation(selectedLogement.location)
            setTags(selectedLogement.tags)
            setName(selectedLogement.name)
            setPicture(selectedLogement.picture)
          setDescription(selectedLogement.description)
              setEquipments(selectedLogement.equipments)
            ;
        } else {
            setTitle('Appartement non trouvé')
            
        }
    }, [id])
  return (
    <>
      
        <div className="FicheLogement-container" >
         <Slideshow /> 
      {/* cover /pictures */}
        
          <div className="FicheLogement-card-left" >
          <h2 className="TitleFicheLogement">{title}</h2>
          <p className="LocationFicheLogement">{location}</p>
          <button className="FicheLogement-tags">{tags}</button>
          </div>

   {/* host */}
          <div className="FicheLogement-card-right" >
           {/* name */}
         <p className="NameFicheLogement">{name}</p>
          {/* picture */}
          <button className="PictureFicheLogement">{picture}</button>
           <div class="stars">
              <img src={etoile} alt="etoile" className="etoileFicheLogement" />
              <img src={etoile} alt="etoile" className="etoileFicheLogement" />
              <img src={etoile} alt="etoile" className="etoileFicheLogement" />
              <img src={etoile} alt="etoile" className="etoileFicheLogement" />
              <img src={etoile} alt="etoile" className="etoileFicheLogement" />
           </div>  

         </div>  
         <div className="FicheLogement-Collapse-container">
           {/* description */}
           <Collapse titleCollapse="Description" contentCollapse= {description} />
           {/* equipements */}
           <Collapse titleCollapse="Equipements" contentCollapse= {equipments} />
         </div>

      </div>
  
  
    </>
  );
}

export default FicheLogement;

