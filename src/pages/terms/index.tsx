import React from 'react';
import { LandingLayout } from 'layout';
import { TermsAndConditions } from 'common/terms';
import { OfficialHeaderBlock } from 'components';

const Terms: React.FC<Props> = ({ isMobile, deviceWidth }) => {

    return (
        <LandingLayout
            headTitle={"Shypdeck | Terms And Conditions"}
            isMobile={isMobile}
            shadyHeader={true}
            deviceWidth={deviceWidth}
            showFooter={true}
            showHeader={true}
            noRightLinks={true}>

            <div className="official-block">

                <OfficialHeaderBlock
                    title={"TERMS AND CONDITIONS"}
                />

                <TermsAndConditions />

            </div>

        </LandingLayout>
    )
}

export default Terms;

interface Props {
    isMobile: boolean,
    deviceWidth: number
}
