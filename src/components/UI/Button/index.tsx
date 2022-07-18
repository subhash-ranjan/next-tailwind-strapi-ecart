import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/solid';
import { ButtonType } from '../../../types';

const index = (props: ButtonType) => {
    return (
        <>
            {props.isDark && (
                <a
                    className={`${props.style} 
                   px-6
                    md:px-8 
                    py-4 
                    lg:px-6 
                    lg:py-3 
                   bg-gray-900 
                  border-0
                    text-gray-100 
                    text-xs 
                    rounded-sm 
                    uppercase 
                    font-bold 
                    hover:bg-gray-800
                    flex-row-center-center
                    `}
                    href={props.href}
                    target={props.isTragetBlank ? '_blank' : ''}
                    onClick={(e) => {
                        if (!props.href) e.preventDefault();
                        props.onClickHandler?.();
                    }}
                >
                    {props.iconPosition == 'left' && props.icon}
                    <span className={`${props.styleText}`}> {props.text}</span>
                    {props.iconPosition == 'right' && props.icon}
                </a>
            )}

            {!props.isDark && (
                <a
                    className={`${props.style} 
                    px-6
                    md:px-8 
                    py-4 
                    lg:px-6 
                    lg:py-3 
                    bg-gray-300 

                   border-0

                    text-gray-900 
                    text-xs 
                    font-semibold 
                    rounded-sm 
                    uppercase hover:bg-gray-400
                         flex-row-center-center
                         `}
                    href={props.href}
                    target={props.isTragetBlank ? '_blank' : ''}
                    onClick={(e) => {
                        if (!props.href) e.preventDefault();
                        props.onClickHandler?.();
                    }}
                >
                    {props.iconPosition == 'left' && props.icon}
                    <span className={`${props.styleText}`}> {props.text}</span>
                    {props.iconPosition == 'right' && props.icon}
                </a>
            )}
        </>
    );
};

export default index;
