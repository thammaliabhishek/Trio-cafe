import React from 'react';
import popcorn from '../photos/popcorn.jpg';
import chic from '../photos/chic.jpg';
import wings from '../photos/wings.jpg';
import legp from '../photos/legp.jpg';
import burger from '../photos/burger.jpg';
import sandwich from '../photos/sandwich.jpg';
import pizza from '../photos/pizza.jpg';
import mojitoone from '../photos/mojitione.jpg';
import mojitothree from '../photos/mojitothree.jpg'
import mojitotwo from '../photos/mojitotwo.jpg';
import friedRice from '../photos/fried rice.jpg'

const Gallery = () => {
  return (
   <>
        <h2 style={{textAlign:'center'}}>Gallery</h2>
       <div className="gallery">
        <img src={popcorn} className="gallery"/>
        <img src={chic} className="gallery"/>
        <img src={wings} className="gallery"/>
        <img src={legp} className="gallery"/>

       </div>
       <div className="gallery">
        <img src={friedRice} className="gallery-two" />
        
        </div>
       <div className="gallery">
       <img src={burger} className="gallery"/>
       <img src={sandwich} className="gallery-one"/>
       <img src={pizza} className="gallery"/>
       </div>
       <div className="gallery">
          <img src={mojitoone} className="gallery"/>
          <img src={mojitothree} className="gallery-one"/>
          <img src={mojitotwo} className="gallery"/>
       </div>
      

   </>

    )
}

export default Gallery