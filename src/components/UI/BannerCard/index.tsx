import React from 'react';
import Image from 'next/image';
import { ChevronRightIcon, ArrowSmRightIcon, DotsCircleHorizontalIcon } from '@heroicons/react/solid';
import IconLink from '../IconLink';
import Button from '../Button';

const index = ({
    width,
    height,
    top,
    left,
    url,
    href,
    text,
    orientation,
    styleText,
    styletextBox,
    styleConatiner,
    styleImage,
}: {
    top?: number;
    left?: number;
    width: number;
    height: number;
    url: string;
    href: string;
    text: string;
    orientation?: string;
    styleText: string;
    styletextBox: string;
    styleConatiner: string;
    styleImage: string;
}) => {
    return (
        <div
            className={`${styleConatiner} relative  flex-row-start-start 
			 w-full lg:w-[12rem] 
			border-[4px] border-gray-100`}
        >
            <div
                className={`${styletextBox} absolute bg-gray-800 bg-opacity-70  left-0 bottom-0 w-full h-[100%] 
				flex-row-center-end z-10 px-1 py-5 group`}
            >
                <Button
                    text={text}
                    href={href}
                    isDark={false}
                    style="m-1 whitespace-nowrap overflow-hidden !bg-transparent 
                    transition duration-500 ease-in-out group-hover:scale-[1.2]"
                    styleText="!text-gray-200"
                    iconPosition="right"
                    icon={<ChevronRightIcon className={`h-6 w-h-6 fill-gray-200`} />}
                />
            </div>

            {url && <Image src={url} alt="books" layout="fill" objectFit="cover" className="rounded-sm " />}
        </div>
    );
};

export default index;
