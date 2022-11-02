import React from 'react';
import LogoP from '../photos/logo.png'

const Logo = () => {
  return (
    <>
    <div className="two">
        <h2>TRIO CAFE</h2>
        <p>Cafe in Thukuguda</p>
        <p>Opening Soon</p>
    </div>
    <div  className="Logo-container">
        <div>
        <img src={LogoP} alt="" className="LogoImg"/>
    </div>
    
    </div>
    </>
  )
}

export default Logo