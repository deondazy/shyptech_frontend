import React from 'react';
import Link from 'next/link';
import Logo from "assets/png/shydeck/logo_blue.png";

export const MobileHeaderToggler: React.FC<Props> = ({ setExpansion, isExpanded }): JSX.Element => {

    return (

        <div className="landingLayout-header-mobile-top">

            <Link href={"/"}>
                <a>
                    <img src={Logo} alt={"Shyptech"} />
                </a>
            </Link>

            <i
                className={isExpanded ? "fas fa-times" : "fas fa-bars"}
                onClick={() => {
                    setExpansion(!isExpanded);
                }}
            />

        </div>

    );
}

interface Props {
    setExpansion(e: boolean): void,
    isExpanded: boolean
}
