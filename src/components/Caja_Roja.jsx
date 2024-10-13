import React  from 'react';
import '../styles/Caja_Roja.css';


function CajaRoja_Componente( {manejarClic_Roja } ){
 
    return  (
      <div className= { 'roja' } onClick={manejarClic_Roja}>
    
      </div>
    )  
  }
  
  export default CajaRoja_Componente;