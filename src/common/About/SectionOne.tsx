import React from 'react';
import SectionTwoImg from 'assets/png/landing/about/about-section-zero.png';

export const AboutSectionOne: React.FC<{}> = () => {

    return (


            <div className='landing-page-section-two about-page-section-two'>

                <h1> Who We Are </h1>

                <div className='landing-page-section-two-flex'>

                    <div className='landing-page-section-two-flex-left'>

                        <p>
                            At Shypdeck, your deliveries have just one job; to get delivered in good condition and within specified time frame. 
                            We help you achieve this by providing access to an array of reliable delivery service providers ready to serve you.
                        </p>

                    </div>

                    <div className='landing-page-section-two-flex-right'>

                        <img src={SectionTwoImg} alt={"shypdeck"} />

                    </div>

                </div>

            </div>

    );

}
