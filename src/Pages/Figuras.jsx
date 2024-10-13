import '../styles/Figuras.css'
import construccion from '../assets/img/figuras_construccion.png'


function Figuras() {
  return (
<>
<div className = 'container-fluid'>

<div className="row">
<div className="col-12">
<h1>En construccion</h1>
</div>
</div>

<div className="row">
<div className="col-12">
  <div className="contenedor_imagen">
<img  className='imagen'  src ={construccion} alt ='construccion'/>
</div>
</div>
</div>





     

     
    </div>

</>
   
  );
}

export default Figuras;
