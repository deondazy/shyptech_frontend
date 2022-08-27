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
            subtitle: `We provide access to an array of delivery companies and agents on one platform.
             You are able to do this without creating a personalized account or facing the hassles of logging in.`
        },
        {
            title: "Trustworthy",
            icon: trustworthy,
            subtitle:`Items are delivered to you securely by our reliable and verified delivery service providers. Over here, you call the shots.`
        },
        {
            title: "Availability",
            icon: Availability,
            subtitle: `You can rest assured that we would make your delivery concerns work on any day. `
        },
        {
            title: "Responsiveness",
            icon: Responsiveness,
            subtitle: `Your deliveries are picked, dispatched and tracked swiftly. We boast of a real time feedback to complaints and inquiries. `
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
