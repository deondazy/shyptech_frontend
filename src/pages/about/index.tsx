import React from 'react';
import { LandingLayout } from 'layout';
import { AboutSectionOne } from 'common/About/SectionOne';
import { AboutSectionTwo } from 'common/About/SectionTwo';
import { AboutSectionThree } from 'common/About/SectionThree';
import { AboutSectionBase } from 'common/About/SectionBase';

const About: React.FC<Props> = ({ isMobile, deviceWidth }) => {

    return (

        <LandingLayout
            headTitle={"Shyptech | About"}
            isMobile={isMobile}
            deviceWidth={deviceWidth}
            showFooter={true}
            showHeader={true}
            noRightLinks={true}
        >

            <AboutSectionBase />
            
            <AboutSectionOne />

            <AboutSectionTwo />

            <AboutSectionThree />

        </LandingLayout >

    )
}

export default About;

interface Props {
    isMobile: boolean,
    deviceWidth: number
}
