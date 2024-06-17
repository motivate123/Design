import React from 'react'
import Tesla from "../../Game/alexander-shatov-Cys3W7_MXDU-unsplash.jpg"
import Mcd from "../../Game/alexey-mak-sMZLg77Z2Dk-unsplash.jpg"
import Ikea from "../../Game/billow926-PF0cKb2tX4E-unsplash.jpg"
import Lambo from "../../Game/chris-kursikowski-ze5wHM9kplc-unsplash.jpg"
import Bugati from "../../Game/nicolas-peyrol-NAhITPrc0as-unsplash.jpg"
import "./Image.css"
// Image.js

import Marquee from 'react-fast-marquee';
 // Ensure you have appropriate styles

const Image = () => {
  return (
    <body>
    <div className='container'>
      <div className='in-container'>
      <div>
        <span>
        <Marquee
          speed={200}
          direction="right"
                    loop={false}
                    
          delay={0}
          className="my-marquee"
        >
          
          {/* Wrap images inside the Marquee component */}
          <img src={Tesla} alt="_tesla" className='img img1' />
          <img src={Mcd} alt="_Mcd" className='img img2' />
          <img src={Ikea} alt="_ikea" className='img img3' />
          <img src={Lambo} alt="_Lambo" className='img img4' />
          <img src={Bugati} alt="_bugati" className='img img5' /> 
         




         
        </Marquee>
        </span>
        
        
        </div>
       
       
        
       
      </div>
    </div>
    </body>
  );
};

export default Image;
