import React from 'react';
import Zero from 'assets/png/landing/about/about-base1.png';
import One from 'assets/png/landing/about/about-base3.png';
import Two from 'assets/png/landing/about/about-base2.png';

export const AboutSectionBase: React.FC<{}> = () => {

    return (


        <div className='landing-page-section-two about-page-section-zero'>

            <img src={Zero} alt={"shypdeck"} />

            <img src={One} alt={"shypdeck"} />

            <img src={Two} alt={"shypdeck"} />

        </div>

    );

}
