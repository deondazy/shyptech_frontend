import React from 'react';
import SectionTwoImg from 'assets/png/landing/sectionTwo_img.png';

export const SectionTwo: React.FC<{}> = () => {

    return (

        <div className='landing-page-section-two-wrapper'>

            <div className='landing-page-section-two'>

                <h1> About Us </h1>

                <div className='landing-page-section-two-flex'>

                    <div className='landing-page-section-two-flex-left'>

                        <p>
                            Shypdeck is a delivery service platform designed to make delivery exciting and
                            convenient giving its users an awesome experience.
                        </p>

                        <p>
                            On shypdeck, you can access  well-known reliable logistics companies such as GiG,
                            Topship and Kwik to care for all your logistic needs.
                        </p>

                    </div>

                    <div className='landing-page-section-two-flex-right'>

                        <img src={SectionTwoImg} alt={"shypdeck"} />

                    </div>

                </div>

            </div>

        </div>

    );

}
