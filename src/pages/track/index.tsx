import React, { useEffect, useState } from 'react';
import { LandingLayout } from 'layout';
import { shipmentProcess } from 'redux/actions/ShipmentAction';
import { useDispatch } from 'react-redux';
import { providerFormType } from 'types';
import { TabLayout } from 'components';
import { useRouter } from 'next/router';
import { isObj } from 'utils';
import { getAddressInfo } from 'redux/actions/UtilActions';
import { TrackDeliveryForm } from 'common/Track/TrackDeliveryForm';
import { SectionOne } from 'common/Landing/SectionOne';

const Track: React.FC<Props> = ({ isMobile, deviceWidth }) => {

    const dispatch = useDispatch();

    const router = useRouter();

    const { view, reference } = router.query;

    const [state, setState] = useState<{
        beep: number,
        data?: providerFormType
    }>({
        beep: 0
    });

    const engageTracking = (data: any) => {

        setState((prevState) => ({ ...prevState, data }));

        router.push("track?view=tracking")

    };

    useEffect(() => {

        dispatch(shipmentProcess("get-providers", { service: "1" }));

        dispatch(getAddressInfo("retrieve-countries", {}));

        // eslint-disable-next-line
    }, []);

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
