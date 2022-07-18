import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/solid';
import { ButtonType } from '../../../types';

const index = ({
    text,
    style,
    isCapital,
    isText,
    styleText,
    icon,
    isTragetBlank,
    href,
    iconPosition,
    onClickHandler,
}: ButtonType) => {
    return (
        <a
            className={`${style} cursor-pointer flex-row-center-center`}
            target={isTragetBlank ? '_blank' : ''}
            href={href}
        >
            {iconPosition == 'left' && icon}
            {text}
            {iconPosition == 'right' && icon}
        </a>
    );
};

export default index;
