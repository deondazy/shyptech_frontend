import React from 'react';
import { classnames } from 'utils';

export const SectionOne: React.FC<Props> = ({ headingClass, headingText }) => {

    return (

        <div className={classnames('landing-page-section-one', headingClass)}>

            <h1> {headingText || "Your everyday choice for deliveries."} </h1>

        </div>

    );

}

interface Props {

    headingClass?: string,

    headingText?: string

}
