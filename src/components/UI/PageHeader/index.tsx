import React from 'react';
import { PageHeaderType } from '../../../types';

const index = ({
    styleContainer,
    header,
    subHeader,
    infoText,
    styleheader,
    styleSubheader,
    styleInfo,
}: PageHeaderType) => {
    return (
        <div className={`${styleContainer} w-full mb-7 md:mb-14 lg:mb-20`}>
            <h3 className={`text-2xl md:text-4xl lg:text-2xl font-semibold mb-3 ${styleheader} uppercase`}>{header}</h3>
            <h3>
                <span className={`text-xl font-normal mb-3  ${styleSubheader}`}>{subHeader}</span>
            </h3>

            <span className={` mb-3  ${styleInfo}`}>{infoText}</span>
        </div>
    );
};
const style = {
    textColorPrimary: `text-red-500`,
};
export default index;
