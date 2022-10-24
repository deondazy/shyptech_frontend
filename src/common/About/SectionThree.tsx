import React from 'react';
import Instagram from 'assets/svg/social/instagram.svg';
import { ViewFormatter } from 'components';
import { SocialLinks } from 'constants/index';

export const AboutSectionThree: React.FC<{}> = () => {

    const items = [
        {
            title: "Email",
            value: `hello@shypteck.com`,
            link: "mailto:hello@shypteck.com",
            wrapperClass: "pl-0 pr-0 pt-0"
        },
        // {
        //     title: "Phone",
        //     value: `0(000) 000 0000`,
        //     link: 'tel:0000***###'
        // },
        {
            title: "Connect with us",
            rightLinkIcon: Instagram,
            wrapperClass: "about-page-social pl-0 pr-0",
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

                        <img 
                            loading='lazy'
                            src={"https://res.cloudinary.com/bohairs/image/upload/v1662357405/shypdeck/about-telephone_yjsu5x.png"} 
                            alt={"shypteck"} 
                        />

                    </div>

                </div>

            </div>

        </div>

    );

}
