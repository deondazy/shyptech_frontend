import React from 'react';
import { Button } from 'components';

export const SectionThree: React.FC<{}> = () => {

    return (

        <div className='landing-page-section-three'>

            <div className='landing-page-section-three-div'>

                <h1> Earn With Us, Today </h1>

                <p>
                    Do you have a shipping company and want to earn more?
                </p>

                <Button
                    label='Register with us'
                    onClick={()=> {

                        const section = document.getElementById("news-letter");

                        section?.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});

                    }}
                />


            </div>

        </div>

    );

}
