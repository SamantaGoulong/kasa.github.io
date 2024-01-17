import ReactDOM from 'react-dom'
import '../Sass/App.scss';
import data from '../data.json';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Home from '../pages/Home';
import About from '../pages/About';
import Footer from '../components/Footer';
import Error from '../pages/Error'

function App() {
  console.log(data);
  return (
    <>
      <Router>
      <Header />
        <Routes>
          
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          
        </Routes >
        
   
        <Footer />
        </Router>
    </>
  );
}

export default App;

