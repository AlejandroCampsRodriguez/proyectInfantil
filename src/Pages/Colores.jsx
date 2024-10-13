

 
import React, { useState } from 'react';
import Boton_recarga from '../components/boton_Recarga';
import Caja_Azul from  '../components/Caja_Azul.jsx';
import Caja_Verde from '../components/Caja_Verde.jsx';
import Caja_Roja from '../components/Caja_Roja.jsx';
import '../styles/Colores.css'; 
function Colores() {  


{/*Cuadro Azul */}
const [azul, setAzul]= useState('')
const manejarClic = () => {  
  setAzul('Respuesta Correcta'); 
  if (verde === 'Respuesta incorrecta' ) {  
    setVerde(''); // No hay necesidad de los espacios, solo usa ''   
    setAzul('Respuesta Correcta');   
  }   if (roja === 'Respuesta incorrecta' ){
    setRojo('')
    setAzul('Respuesta Correcta');  
  }
};  


  {/*Cuadro Verde*/}
  const [verde, setVerde]= useState('')
  const manejarClic_Verde=()=>{
    setVerde('Respuesta incorrecta');  
    if (azul === 'Respuesta Correcta' ) {  
      setAzul(''); 
      setVerde('Respuesta incorrecta');   
    }   if (roja === 'Respuesta incorrecta' ){
      setRojo('')
      setVerde('Respuesta incorrecta');  
    }
  };  



  {/*cuadro rojo */}
const [roja, setRojo]= useState('')
const manejarClic_Roja=()=>{
  setRojo('Respuesta incorrecta'); 
  if (azul === 'Respuesta Correcta' ) {  
    setAzul(''); 
    setRojo('Respuesta incorrecta');   
  }   if (verde === 'Respuesta incorrecta' ){
    setVerde('' )
    setRojo('Respuesta incorrecta');  
  }
}



  return (  
    <>   
    <div className="container background_Image">

   <h1> Diga que figura tiene el color azul</h1>

   <div className="row">
    
<div className="col master ">

<div className="padre container d-flex  flex-wrap justify-content-center justify-content-between flex-row" >
 {/*cajas */}
 <Caja_Azul   
   manejarClic = {manejarClic} 
  />

<Caja_Verde
  manejarClic_Verde = { manejarClic_Verde }

/>


<Caja_Roja
 manejarClic_Roja= { manejarClic_Roja }
/>

</div>
</div>
</div>

<div className=' container contenedor_resultado'>
<div className='resultado' >{azul} {verde} {roja} </div>
</div>
< Boton_recarga/>
</div>


    </>  
  );  
}  

export default Colores;