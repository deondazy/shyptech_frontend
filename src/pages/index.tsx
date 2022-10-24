import React, { useEffect, useState } from 'react';
import { LandingLayout } from 'layout';
import { SectionOne } from 'common/Landing/SectionOne';
import { SectionTwo } from 'common/Landing/SectionTwo';
import { SectionFour } from 'common/Landing/SectionFour';
import { NewsLetterSection } from 'common/Landing/NewsletterSection';
import { useDispatch } from 'react-redux';
import { accessToken } from 'redux/store';
import { authProcess } from 'redux/actions';
import { getAddressInfo } from 'redux/actions/UtilActions';
import { Partners } from 'common/Landing/Partners';

const Home: React.FC<Props> = ({ isMobile, deviceWidth }) => {

    const dispatch = useDispatch();

    const [beep, setBeep] = useState(0);

    const getCountriesAndCities = async () => {

        const availability = accessToken();

        if (!availability) {

            await dispatch(authProcess("retrieve-auth", { userName: "Awaal" }, true));

        }

        const zero = await dispatch(getAddressInfo("retrieve-countries", {}));

        const one = await dispatch(getAddressInfo("retrieve-states", { id: "1" }));

        if (!zero || !one) {

            setBeep(prevState => (prevState + 1));

        }

    }

    useEffect(() => {

        getCountriesAndCities();

        // eslint-disable-next-line
    }, [beep]);

    return (

        <LandingLayout
            headTitle={"Shyptech"}
            isMobile={isMobile}
            deviceWidth={deviceWidth}
            showFooter={true}
            showHeader={true}
            noRightLinks={true}
        >

            <SectionOne />

            <NewsLetterSection />

            <Partners />

            <SectionTwo />

            <SectionFour />

        </LandingLayout >

    )
}

export default Home;

interface Props {
    isMobile: boolean,
    deviceWidth: number
}
