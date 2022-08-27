import React from 'react';
import { AgentSubscription } from './newsletterSubscription/agent';
import { IndividualSubscription } from './newsletterSubscription/individual';

export const NewsLetterSection: React.FC<{}> = () => {

    return (

        <div

            className='landing-page-section-three landing-page-section-newsletter'
            id={"news-letter"}
        >

            <div className='landing-page-section-three-div'>

                <h1 className='mb-5'> Join our Waitlist </h1>

                <p>

                Are you an intending user or a delivery service provider, 
                we would love to send you more updates about our Services. 
                Be the first to know when we launch.

                </p>

                <div className='landing-page-section-newsletter-buttons'>

                    <IndividualSubscription />

                    <AgentSubscription />

                </div>

            </div>

        </div>

    );

}
