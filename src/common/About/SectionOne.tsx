import React from 'react';

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

                        <img 
                            loading='lazy'
                            src={"https://res.cloudinary.com/bohairs/image/upload/v1662357403/shypdeck/about-section-zero_jzz3vx.png"} 
                            alt={"shypdeck"} 
                        />

                    </div>

                </div>

            </div>

    );

}
