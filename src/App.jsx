import { BrowserRouter as Router, Link, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './Pages/Home.jsx';
import Colores from './Pages/Colores.jsx';
import Figuras from './Pages/Figuras.jsx';
import Footer from './components/Footer.jsx'
import background from './assets/img/background.png';
import './styles/Portada.css';


function App() {
  const location = useLocation(); // Obtener la ubicación actual
  const [isImageVisible, setIsImageVisible] = useState(true); // Estado para controlar la visibilidad de la imagen
  const [isTextVisible, setIsTextVisible] = useState(true); // Estado para controlar la visibilidad del texto

  useEffect(() => {
    // Cambiar la visibilidad de la imagen y el texto según la ruta
    if (location.pathname === '/colores' || location.pathname === '/figuras') {
      setIsImageVisible(false); // Ocultar imagen en Colores y Figuras
      setIsTextVisible(false); // Ocultar texto en Colores y Figuras
    } else {
      setIsImageVisible(true); // Mostrar imagen en Home
      setIsTextVisible(true); // Mostrar texto en Home
    }
  }, [location.pathname]); // Dependencia para que se ejecute cada vez que cambie la ruta

  return (
    <>
           {/*nav-bar*/}
      <nav  className='container-fluid container_nav'>
     <div className="row row_nav">
      <div className="col-12 col_nav">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 con_nav_master">
        <li className="nav-item">
        <Link className='' to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link className='' to="/colores">Colores</Link>
        </li>
        <li className="nav-item dropdown">
        <Link className=''  to="/figuras">Figuras</Link>
        </li>
     
      </ul>
   
    </div>
  </div>
</nav>
      </div>
     </div>
      </nav>
            {/*react - router */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/colores" element={<Colores />} />
        <Route path="/figuras" element={<Figuras />} />
      </Routes>

      {isImageVisible && (
        <div className='container'>
          <div className="row">
           <div className="col-12">
           <div className="contenedor_master_img_txt justify-content-center alig-content-center">
            <div className="contenedor_padre_img_txt  justify-content-center">
           {isTextVisible && <h1 className='titulo'>Conociendo el saber</h1>} {/* Mostrar texto si es visible */}

          <div className="contenedor_master_img">
             <div className="contenedor_padre_img">
           <img className='img-fluid imagen' src={background} alt="Local Image" /> {/* Renderizar la imagen solo si es visible */}
           </div>
           </div>
           </div>
           </div>
           </div>
          </div>
          
        </div>
      )}
      
      <Footer/>
    </>
  );
}

// Envolver el App en Router en el archivo main.jsx
export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
