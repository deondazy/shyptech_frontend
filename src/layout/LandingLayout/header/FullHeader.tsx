import React from 'react';
import Link from 'next/link';
import { rightLinks } from 'constants/index';
import Shydeck from 'assets/png/shydeck/logo_blue.png';
import { classnames } from 'utils';
import { Button } from 'components';

export const FullHeader: React.FC<{ noRightLinks: boolean }> = ({ noRightLinks }) => {

    return (
        <div
            className={classnames('landingLayout-header', 'with-shades')}>

            <div className="landingLayout-header-holder">

                <div className="landingLayout-header-left">

                    <Link href={"/"}>
                        <a>
                            <img src={Shydeck} alt={"Shydeck"} />
                        </a>
                    </Link>

                </div>

                <div className="landingLayout-header-right">

                    {(noRightLinks ? [] : rightLinks).map((item, index) =>
                        <Link
                            key={`landingLayout-header-right-item-${index}`}
                            href={item.link || ""}>
                            <a className={item.class}>
                                {item.title}
                            </a>
                        </Link>

                    )}

                    {!noRightLinks && <Button label={"Send Item"} onClick={() => null} />}

                </div>


            </div>

        </div>
    );
}
