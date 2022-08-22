import React, { FunctionComponent } from 'react';
import { FooterLinks, FooterIconSet, FooterLogoField, FooterLocation } from 'components';
import { LandingFooterAbout, LandingFooterServices, LandingFooterCompany } from 'constants/index';
import LandingLayoutFooterCr from '../LandingLayoutFooterCr';

const LandingLayoutFooter: FunctionComponent = () => {

    const footerTabs = [
        { title: undefined, tab: LandingFooterAbout },
        { title: "Services", tab: LandingFooterServices },
        { title: "Company", tab: LandingFooterCompany },
    ];

    return (
        <div className="landingLayout-footer footer">

            <div className="landingLayout-footer-holder">

                {footerTabs.map((item, index) =>

                    <div key={`footer-tab-item-${index}`}
                        className="landingLayout-footer-tab">
                        <>
                            {item.title && <h1> {item.title} </h1>}

                            {item.tab.map((tabItem, tabItemIndex) =>

                                <React.Fragment key={`footer-tabItem-${index}-${tabItemIndex}`}>

                                    {tabItem.logo &&
                                        <FooterLogoField logo={tabItem.logo} alt={"stellas"} />
                                    }

                                    {tabItem.icons && <FooterIconSet icons={tabItem.icons || []} links={tabItem.iconLinks} />}

                                    {tabItem?.link && <FooterLinks link={tabItem.link || ''} title={tabItem.title || ''} />}

                                    {tabItem?.title && tabItem?.icon &&
                                        <FooterLocation title={tabItem.title} icon={tabItem.icon} />
                                    }

                                </React.Fragment>
                            )}
                        </>
                    </div>

                )}

                <LandingLayoutFooterCr />

            </div>

        </div>
    );
}

export default LandingLayoutFooter;
