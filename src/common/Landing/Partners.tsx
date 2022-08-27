import React from 'react';
import GIG from 'assets/png/landing/partners/logo.png';
import TopShip from 'assets/png/landing/partners/Topship.png';
import Kwik from 'assets/png/landing/partners/Kwik.png';

export const Partners:React.FC<{}> = () => {

    return (

        <div className='landing-page-section-partners'>

            <h1 className='color-dark'> Brands That Trust Us </h1>

            <div className='landing-page-section-partners-part'>

            <img src={TopShip} alt={"TopShip"} />                
                
                <img src={GIG} alt={"GIG"} />
                
                <img src={Kwik} alt={"Kwik"} />

            </div>

        </div>

    )

}