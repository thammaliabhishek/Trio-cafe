import React from 'react';
import direction from '../Gallery/direction.png'

const Contact = () => {
  return (
   <>
   <div className="contact">
   <div>
        <h3>Contact us</h3>
        <a href="https://goo.gl/maps/QNRhSs8zNcYdtgoaA" target="blank"><img src={direction} width="1000"/></a>
        
    </div>
    <div>
        <img/>
    </div>
   </div>
   <div>
   <div className="Address">
        <h2>Address</h2>
       
        <button className="btn"><a href="https://goo.gl/maps/QNRhSs8zNcYdtgoaA" target="blank" className="btn-one">Get Direction</a></button>
        
    </div>
    <div className="cafe-address">
     <strong>TRIO-CAFE NEAR SN GRAND ,THUKUGUDA,SRISAILAM HIGHWAY,R.R.DIST,TELANGANA,501510 </strong>
    </div>
    <div className="openning">
        <h3>Openning Hours</h3>
        <ul>
            <li>Mon:&nbsp;  8:00 am – 11:00 pm</li>
            <li>Tue:&nbsp;&nbsp;  	8:00 am – 11:00 pm</li>
            <li>Wed:&nbsp; 	8:00 am – 11:00 pm</li>
            <li>Thu:&nbsp; 	8:00 am – 11:00 pm</li>
            <li>Fri:&nbsp;&nbsp;  	8:00 am – 11:00 pm</li>
            <li>Sat:&nbsp;&nbsp;  	8:00 am – 11:00 pm</li>
            <li>Sun:&nbsp; 	8:00 am – 11:00 pm</li>
        </ul>
    </div>
   </div>
   
    
   
   </>
  )
}

export default Contact