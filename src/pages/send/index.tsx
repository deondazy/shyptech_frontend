import React, { useEffect, useState } from 'react';
import { LandingLayout } from 'layout';
import { DeliveryServiceSelector } from 'common/Send/DeliveryServiceSelector';
import { shipmentProcess } from 'redux/actions/ShipmentAction';
import { useDispatch } from 'react-redux';
import { providerFormType } from 'types';
import { TabLayout } from 'components';
import { ProviderForm } from 'common/Send/ProviderForm';
import { useRouter } from 'next/router';
import { isObj } from 'utils';
import { getAddressInfo } from 'redux/actions/UtilActions';
import { ConfirmShipmentPayment } from 'common/Send/ConfirmShipmentPayment';

const Send: React.FC<Props> = ({ isMobile, deviceWidth }) => {

    const dispatch = useDispatch();

    const router = useRouter();

    const { view, reference } = router.query;

    const [state, setState] = useState<{
        beep: number,
        data?: providerFormType
    }>({
        beep: 0
    });

    const engageSelection = (data: providerFormType) => {

        setState((prevState) => ({ ...prevState, data }));

        router.push("send?view=fill")

    };

    useEffect(() => {

        dispatch(shipmentProcess("get-providers", { service: "1" }));

        dispatch(getAddressInfo("retrieve-countries", {}));

    }, []);

    return (

        <LandingLayout
            headTitle={"Shypdeck | About"}
            isMobile={isMobile}
            deviceWidth={deviceWidth}
            showFooter={true}
            showHeader={true}
            noRightLinks={true}
        >

            <TabLayout

                queryKey='view'

                tabs={[

                    {
                        id: "",
                        component: <DeliveryServiceSelector onSelectionSuccess={(selection) => engageSelection(selection)} />,
                        condition: (!view || !state?.data) && !reference
                    },

                    {
                        id: "fill",
                        component: <ProviderForm data={state.data} inView={view === "fill"} goBack={() => router.push("send")} />,
                        condition: view === "fill" && isObj(state.data) && !reference
                    },

                    {
                        id: "confirm",
                        component: <ConfirmShipmentPayment reference={String(reference)} />,
                        condition: (reference !== undefined) && !view
                    }

                ]}

            />



        </LandingLayout >

    )
}

export default Send;

interface Props {
    isMobile: boolean,
    deviceWidth: number,
    currentPath: string
}
