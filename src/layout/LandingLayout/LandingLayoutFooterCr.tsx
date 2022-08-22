import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import LinkedIn from 'assets/svg/social/linkedIn.svg';

const LandingLayoutFooterCr: FunctionComponent = () => {

    return (
        <div className="landingLayout-footer-cr footer">

            <div className="landingLayout-footer-cr-holder">

                <Link href={"/"}>
                    <a>
                        <img src={LinkedIn} alt={"shypdeck linkedIn"} />
                    </a>
                </Link>

                <p> ©{new Date().getFullYear()} Shypdeck. All rights reserved </p>

            </div>

        </div>
    );
}

export default LandingLayoutFooterCr;
