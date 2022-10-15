import React, { useState } from 'react';
import { LandingLayout } from 'layout';
import { providerFormType } from 'types';
import { useRouter } from 'next/router';
import { TrackDeliveryForm } from 'common/Track/TrackDeliveryForm';
import { SectionOne } from 'common/Landing/SectionOne';

const Track: React.FC<Props> = ({ isMobile, deviceWidth }) => {

    const router = useRouter();

    // const { view, reference } = router.query;

    const [, setState] = useState<{
        beep: number,
        data?: providerFormType
    }>({
        beep: 0
    });

    const engageTracking = (data: any) => {

        setState((prevState) => ({ ...prevState, data }));

        router.push("track?view=tracking")

    };

    return (

        <LandingLayout
            headTitle={"Shypdeck | Track"}
            isMobile={isMobile}
            deviceWidth={deviceWidth}
            showFooter={true}
            showHeader={true}
            noRightLinks={true}
        >
            <SectionOne

                headingText='Track Your Orders In Realtime'

                headingClass='tracking-banner'

            />

            <TrackDeliveryForm setTrackingData={(track) => engageTracking(track)} />

        </LandingLayout >

    )
}

export default Track;

interface Props {
    isMobile: boolean,
    deviceWidth: number,
    currentPath: string
}
