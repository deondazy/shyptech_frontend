import React from 'react';
import { ViewFormatter } from 'components';

export const AboutSectionTwo: React.FC<{}> = () => {

    const items = [
        {
            title: "Our Mission",
            value: `
                    We believe an efficient delivery system is the heart beat of E-commerce in Africa. 
                    Achieving this collectively equates to empowerment of people and a sustainable financial culture. 
                    `,
        },
        {
            title: "Our Purpose",
            value: `
                Build a harmonized front which promotes ease and accessibility of delivery service providers and 
                agents who are committed to innovation and excellence.
                `
        }
    ];

    return (

        <div className='landing-page-section-two-wrapper about-page-section-two'>

            <div className='landing-page-section-two about-page-values'>

                {items.map((item) => <ViewFormatter key={item.title} {...item} wrapperClass="pl-0 pr-0 pt-0" />)}

            </div>

        </div>

    );

}
