import React, { FunctionComponent } from 'react';
import LinkedIn from 'assets/svg/social/linkedIn.svg';
import { SocialLinks } from 'constants/index';

const LandingLayoutFooterCr: FunctionComponent = () => {

    return (
        <div className="landingLayout-footer-cr footer">

            <div className="landingLayout-footer-cr-holder">

                    <a href={SocialLinks.instagram} target="blank">
                        <img src={LinkedIn} alt={"shypdeck linkedIn"} />
                    </a>

                <p> ©{new Date().getFullYear()} Shypdeck. All rights reserved </p>

            </div>

        </div>
    );
}

export default LandingLayoutFooterCr;
