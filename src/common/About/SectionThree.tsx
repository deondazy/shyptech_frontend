import React from 'react';
import SectionThreeImg from 'assets/png/landing/about/about-telephone.png';
import Instagram from 'assets/svg/social/instagram.svg';
import { ViewFormatter } from 'components';
import { SocialLinks } from 'constants/index';

export const AboutSectionThree: React.FC<{}> = () => {

    const items = [
        {
            title: "Email",
            value: `hello@shypdeck.com`,
            link: "mailto:hello@shypdeck.com"
        },
        // {
        //     title: "Phone",
        //     value: `0(000) 000 0000`,
        //     link: 'tel:0000***###'
        // },
        {
            title: "Connect with us",
            rightLinkIcon: Instagram,
            wrapperClass: "about-page-social",
            externalLink: SocialLinks.instagram
        },
    ];

    return (

        <div className='landing-page-section-two-wrapper about-page-section-two'>

            <div className='landing-page-section-two'>

                <h1> Contact Us </h1>

                <div className='landing-page-section-two-flex'>

                    <div className='about-page-contact-items'>

                        {items.map((item) => <ViewFormatter key={item.title} {...item} />)}

                    </div>



                    <div className='landing-page-section-two-flex-right'>

                        <img src={SectionThreeImg} alt={"shypdeck"} />

                    </div>

                </div>

            </div>

        </div>

    );

}
