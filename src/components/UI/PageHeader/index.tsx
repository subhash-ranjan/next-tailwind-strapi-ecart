import React from 'react';
import { PageHeaderType } from '../../../types';

const index = ({
    header,
    subHeader,
    infoText,
    styleheader,
    styleSubheader,
}: PageHeaderType) => {
    return (
        <div className="w-full mb-3 lg:mb-7">
            <span className={` text-4xl-custom mb-3 block ${styleheader}`}>
                {header}
            </span>

            <span className={`text-2xl-custom mb-3  ${styleSubheader}`}>
                {subHeader}
            </span>
        </div>
    );
};
const style = {
    textColorPrimary: `text-red-500`,
};
export default index;
