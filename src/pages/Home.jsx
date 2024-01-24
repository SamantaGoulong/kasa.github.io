import '../Sass/Home.scss';
import Banner from '../components/Banner';
import Logements from '../components/Logements';

function Home() {
 
  return (
    <>
      
      <Banner />
      
      <main>
        <div className="home-container">
          <Logements />
        </div>
      </main>
    </>
  );
}

export default Home;