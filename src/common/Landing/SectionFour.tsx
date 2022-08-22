import React from 'react';
import Convenience from 'assets/svg/landing/convenience.svg';
import trustworthy from 'assets/svg/landing/trustworthy.svg';
import Availability from 'assets/svg/landing/availability.svg';
import Responsiveness from 'assets/svg/landing/responsiveness.svg';

export const SectionFour: React.FC<{}> = () => {

    const items = [
        {
            title: "Convenience",
            icon: Convenience,
            subtitle: "Expressly track your items without the need to log in or sign up."
        },
        {
            title: "Convenience",
            icon: trustworthy,
            subtitle: "Expressly track your items without the need to log in or sign up."
        },
        {
            title: "Availability",
            icon: Availability,
            subtitle: "Have access to our platform 24/7 for your logistic needs."
        },
        {
            title: "Responsiveness",
            icon: Responsiveness,
            subtitle: "Need a platform that attends to your logistics needs swiftly? Shypdeck is your go-to platform."
        }
    ]

    return (

        <div className='landing-page-section-four'>

            <div className='landing-page-section-four-heading'>

                <h1> Why Choose Us </h1>
                <span />

            </div>

            <div className="landing-page-section-four-reasons">

                {items.map((item, index) =>

                    <div

                        className='landing-page-section-four-reasons-item'

                        key={`why-us-item-${index}`}>

                        <img src={item.icon} alt={item.title} />

                        <h4> {item.title} </h4>

                        <p> {item.subtitle} </p>

                    </div>

                )}

            </div>


        </div>

    );

}
