import React from 'react';
import { LandingLayout } from 'layout';

const Send: React.FC<Props> = ({ isMobile, deviceWidth }) => {

    return (

        <LandingLayout
            headTitle={"Shypdeck | About"}
            isMobile={isMobile}
            deviceWidth={deviceWidth}
            showFooter={true}
            showHeader={true}
            noRightLinks={true}
        >

        </LandingLayout >

    )
}

export default Send;

interface Props {
    isMobile: boolean,
    deviceWidth: number
}
