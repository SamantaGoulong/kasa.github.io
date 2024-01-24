import '../Sass/Logements.scss';
import data from '../data.json';
import FicheLogement from '../pages/FicheLogement';
import { Link } from 'react-router-dom'

function Logements () {
 
    return (
        <>
            
            {data.map((item, index) => (
                <Link to={"ficheLogement/"+item.id} className="logements-link" >
                    <div className="logements-card"key= {index} >
                        <img src={item.cover} alt="" className="logements-img" /> 
                        <h2 className="logements-title">{item.title}</h2> 
                    </div>
                </Link>
            ))}    
        </>
    );
}

export default Logements;
