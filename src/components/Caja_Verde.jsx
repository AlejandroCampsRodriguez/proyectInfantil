import React from 'react';
import '../styles/Caja_Verde.css';

function CajaVerde_Componente( {manejarClic_Verde } ){
 
    return  (
      <div className= { 'verde' } onClick={manejarClic_Verde}>
    
      </div>
    )  
  }
  
  export default CajaVerde_Componente;