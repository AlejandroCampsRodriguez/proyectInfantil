
import React from 'react';
import '../styles/btn_Recarga.css'

const Boton_recarga = () => {
  const reloadPage = () => {
    window.location.reload();
  };


  return (
    
    <div className='contenedor_btn'>    
    <button className='btn btn-info btn_Recarga' onClick={reloadPage}>Recargar Juego<i className="bi bi-arrow-clockwise btn_boot"></i></button>
    </div>

  );
};

export default Boton_recarga ;