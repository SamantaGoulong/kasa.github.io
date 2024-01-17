import '../Sass/Home.scss';
import Banner from '../components/Banner';

function Home() {
 
  return (
    <>
      
      <Banner />
      <div className="home-container">
        <div className="card-container">
          <article className="card-1">
            <h2 className="card-title">Titre de la location</h2>
          </article>
          <article className="card-1">
            <h2 className="card-title">Titre de la location</h2>
          </article>
          <article className="card-1">
            <h2 className="card-title">Titre de la location</h2>
          </article>
          <article className="card-1">
            <h2 className="card-title">Titre de la location</h2>
          </article>
          <article className="card-1">
            <h2 className="card-title">Titre de la location</h2>
          </article><article className="card-1">
            <h2 className="card-title">Titre de la location</h2>
          </article>
        </div>
      </div> 
    </>
  );
}

export default Home;