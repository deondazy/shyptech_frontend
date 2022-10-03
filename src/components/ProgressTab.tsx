import React from 'react';
import { classnames } from 'utils';

export const ProgressTab: React.FC<Props> = ({
    tabs,
    activeIndex,
    className
}) => {

    return (

        <div className={classnames('progress-tab', className)}>

            {tabs.map((item, index) =>

                <div
                    className={classnames(`progress-tab-item` , activeIndex === index && "progress-tab-item-active")}
                    key={`progress-item-${item.label}-${index}`}
                >

                    <div className='progress-tab-item-indicator'>

                        <p> {index + 1} </p>

                        <div className='progress-tab-item-line' />

                    </div>

                    <p> {item.label} </p>

                </div>

            )}

        </div>

    )

};

interface Props {
    activeIndex?: number,
    className?: string,
    tabs: {
        label: string,
        key?: string,
        index?: number,
        onClick: (e: string) => void
    }[]
};