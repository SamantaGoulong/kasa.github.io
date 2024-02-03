import '../Sass/Logements.scss';
import data from '../data.json';
import FicheLogement from '../pages/FicheLogement';
import { Link } from 'react-router-dom'
import React from 'react';



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
// function Logements() {
//     return (
//         <>
//             {data.map((item, index) => (
//                 <Link to={"ficheLogement/" + item.id} className="logements-link" key={index}>
//                     <div className="logements-card">
//                         <img src={item.cover} alt="" className="logements-img" />
//                         <h2 className="logements-title">{item.title}</h2>
//                     </div>
//                 </Link>
//             ))}
//             {/* Utilisez FicheLogement pour afficher les détails des logements */}
//             {data.map((item, index) => (
//                 <FicheLogement
//                     key={index}
//                     title={item.title}
//                     location={item.location}
//                     tags={item.tags}
//                     name={item.name}
//                     picture={item.picture}
//                 />
//             ))}
//         </>
//     );
// }

// export default Logements;