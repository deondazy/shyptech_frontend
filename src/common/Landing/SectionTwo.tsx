import React from 'react';

export const SectionTwo: React.FC<{}> = () => {

    return (

        <div className='landing-page-section-two-wrapper'>

            <div className='landing-page-section-two'>

                <h1> About Us </h1>

                <div className='landing-page-section-two-flex'>

                    <div className='landing-page-section-two-flex-left'>

                        <p>
                            At Shypteck, your deliveries have just one job; to get delivered in good condition and within specified time frame.

                        </p>

                        <p>
                            We help you achieve this by providing access to an array of reliable delivery service providers ready to serve you.
                        </p>

                    </div>

                    <div className='landing-page-section-two-flex-right'>

                        <img 
                            loading='lazy'
                            src={"https://res.cloudinary.com/bohairs/image/upload/v1662357406/shypdeck/about-side_xjqvxd.png"} 
                            alt={"shypteck"} 
                        />

                    </div>

                </div>

            </div>

        </div>

    );

}
