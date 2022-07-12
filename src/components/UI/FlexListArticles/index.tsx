import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import PortfolioPic from '/public/portfolio/vimerse.png';
import GithubIcon from '/public/vercel.svg';
import IconLink from '../IconLink';
import { CategoryType } from '../../../types/book';

const index = ({ categories }: { categories: CategoryType[] }) => {
    return (
        <div
            className={`
                    flex-col-center-center
                    size-full
                    flex-col
                    lg:flex-row`}
        >
            <div className="size-full grid grid-cols-3 gap-1 h-[300px] w-[33px]">
                {Array.from(categories)
                    .slice(0, 6)
                    .map((item, index) => {
                        const { attributes } = item;
                        const category = attributes.name;
                        const imgurl = `/books/${attributes.imgurl}`;
                        const redirecturl = `/books?cat=${item.id}`;

                        return (
                            <div
                                key={index}
                                className={`bg-zinc-900 size-full ${Style.flexColJustifyStart}
                                group  m-3 transform transition duration-500 hover:scale-105
                                lg:h-[100px] lg:w-[100px]`}
                            >
                                <Image
                                    src={imgurl}
                                    alt="articles"
                                    layout="fill"
                                    blurDataURL={`/_next/image?url=${imgurl}&w=16&q=1`}
                                    placeholder="blur" // Optional blur-up while loading
                                    className="w-full object-cover opacity-80"
                                />
                                <div className="flex flex-col items-start justify-evenly p-5">
                                    <span className={`text-white mb-2 text-left text-lg uppercase`}>
                                        {attributes.title}
                                    </span>
                                    <IconLink
                                        text="Read More"
                                        isTragetBlank={true}
                                        style={`text-white text-left flex-row-start-center border-b-[1px] border-indigo-600`}
                                        styleText="text-base font-normal"
                                        href={redirecturl}
                                        iconPosition="right"
                                        icon={<ChevronRightIcon className={`h-5 w-5  fill-white`} />}
                                    />
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};
export const Style = {
    flexColCenter: `flex flex-col items-center justify-center`,
    flexColJustifyStart: `flex flex-col items-center justify-start`,
    flexColJustifyStartAlignEvenly: `flex flex-col items-evenly justify-start`,
    flexColJustifyEvenAlignStart: `flex flex-col items-start justify-evenly`,

    flexRowCenter: `flex flex-row items-center justify-center`,
    flexRowStretch: `flex flex-row items-center justify-evenly`,
    flexRowJustifyStart: `flex flex-row items-center justify-start`,
    sizeFull: `h-full w-full`,

    textColorPrimary: `text-red-500`,
    bgPrimary: `bg-red-500`,
    fillPrimary: `fill-red-500`,
    fillPrimaryLight: `fill-red-400`,
    borderPrimary: `border-red-500`,

    textColorSecondary: `text-gray-400 `,

    iconBg: `h-10 w-10 flex flex-col items-center justify-center bg-zinc-700 rounded-full bg-opacity-50 mx-2`,
    iconBgBig: `h-14 w-14 flex flex-col items-center justify-center bg-zinc-800 rounded-full bg-opacity-50 mx-2`,

    pageContainer: `px-5 md:px-10 lg:px-20 py-28 lg:py-34`,
};
export default index;
