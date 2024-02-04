import '../Sass/Home.scss'
import Banner from '../components/Banner'
import Logements from '../components/Logements'
import ImageBannerHome from '../assets/images/ImageBannerHome.png'

// function Home() {

//   return (
//     <>

//       <Banner image={ImageBannerHome} text="Chez vous, partout et ailleurs"/>

//       <main>
//         <div className="home-container">
//           <Logements />
//         </div>
//       </main>
//     </>
//   );
// }

// export default Home;

function Home() {
    return (
        <>
            <Banner image={ImageBannerHome} text="Chez vous, partout et ailleurs" />

            <main>
                <div className="home-container">
                    <Logements />
                </div>
            </main>
        </>
    )
}

export default Home
