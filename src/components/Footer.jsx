import React from 'react'
import'../styles/Footer.css'

function Footer  ()  {
  return (
    <>
  
<div className="footerMaster">
  <div className="footerPadre">
    <div className="footer">

      <div className="facebook">
      <a href='https://www.facebook.com' target='_blank' rel = 'noopnener noreferrer'>
      <i className="bi bi-facebook"></i>
      </a>
      </div>


      <div className="github">
      <a href='https://github.com/alejandro657' target='_blank' rel = 'noopnener noreferrer'>
      <i className="bi bi-github"></i>
      </a>
      </div>

      <div className="twitter">
      <i className="bi bi-twitter-x"></i>
      </div>
       
       <div className="mail">
       <a href='mailto:alexcrw42@gmail.com' target='_blank' rel = 'noopnener noreferrer'>
       <i className="bi bi-envelope"></i>
       </a>
       </div>

    </div>
  </div>
</div>

    </>
  )
}
export default Footer


