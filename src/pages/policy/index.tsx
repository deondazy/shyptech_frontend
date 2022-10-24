import React from 'react';
import { LandingLayout } from 'layout';
import { OfficialHeaderBlock } from 'components';
import { PrivacyPolicy } from 'common/policy';

const Policy: React.FC<Props> = ({ isMobile, deviceWidth }) => {

    return (
        <LandingLayout
            headTitle={"Shyptech | Privacy Policy"}
            isMobile={isMobile}
            shadyHeader={true}
            deviceWidth={deviceWidth}
            showFooter={true}
            showHeader={true}
            noRightLinks={true}>

            <div className="official-block">

                <OfficialHeaderBlock
                    title={"Privacy Policy"}
                />

                <PrivacyPolicy />

            </div>

        </LandingLayout>
    )
}

export default Policy;

interface Props {
    isMobile: boolean,
    deviceWidth: number
}
