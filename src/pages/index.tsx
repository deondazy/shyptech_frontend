import React, { useEffect } from 'react';
import { LandingLayout } from 'layout';
import { SectionOne } from 'common/Landing/SectionOne';
import { SectionTwo } from 'common/Landing/SectionTwo';
import { SectionThree } from 'common/Landing/SectionThree';
import { SectionFour } from 'common/Landing/SectionFour';
import { NewsLetterSection } from 'common/Landing/NewsletterSection';
import { useDispatch } from 'react-redux';
import { accessToken } from 'redux/store';
import { authProcess } from 'redux/actions';
import { getAddressInfo } from 'redux/actions/UtilActions';

const Home: React.FC<Props> = ({ isMobile, deviceWidth }) => {

    const dispatch = useDispatch();

    const getCountriesAndCities = async () => {

        const availability = accessToken();

        if ( !availability ) {

            await dispatch(authProcess("retrieve-auth", { userName: "Awaal"}, true ));

        }

        dispatch(getAddressInfo("retrieve-countries", {}));

        dispatch(getAddressInfo("retrieve-states", { id: "1" }))

    }

    useEffect(() => {

        getCountriesAndCities();

        // eslint-disable-next-line
    }, []);

    return (

        <LandingLayout
            headTitle={"Shypdeck"}
            isMobile={isMobile}
            deviceWidth={deviceWidth}
            showFooter={true}
            showHeader={true}
            noRightLinks={true}
        >

            <SectionOne />

            <NewsLetterSection />

            <SectionTwo />

            <SectionThree />

            <SectionFour />

        </LandingLayout >

    )
}

export default Home;

interface Props {
    isMobile: boolean,
    deviceWidth: number
}
