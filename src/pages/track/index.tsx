import React, { useState } from 'react';
import { LandingLayout } from 'layout';
import { useRouter } from 'next/router';
import { TrackDeliveryForm } from 'common/Track/TrackDeliveryForm';
import { SectionOne } from 'common/Landing/SectionOne';
import { DeliveryTrackDisplay } from 'common/Track/DeliveryTrackDisplay';
import { isObj } from 'utils';

const Track: React.FC<Props> = ({ isMobile, deviceWidth }) => {

    const router = useRouter();

    const { view } = router.query;

    const [state, setState] = useState<{
        beep: number,
        data?: { trackingId?: string, data?: any }
    }>({
        beep: 0,
    });

    const engageTracking = (data: any) => {

        setState((prevState) => ({ ...prevState, data , beep: prevState.beep + 1 }));

        view !== "tracking" && router.push("track?view=tracking")

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

            {view === "tracking" && isObj(state?.data) &&

                <DeliveryTrackDisplay

                    beep={state.beep}

                    track={state?.data} 
                    
                    trackingId={state?.data?.trackingId}

                />}


        </LandingLayout >

    )
}

export default Track;

interface Props {
    isMobile: boolean,
    deviceWidth: number,
    currentPath: string
}
