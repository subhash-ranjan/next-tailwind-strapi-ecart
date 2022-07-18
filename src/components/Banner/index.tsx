import React, { useContext, useState, useEffect } from 'react';
import Button from '../UI/Button';
import { ArrowDownIcon, ChevronRightIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import BannerCard from '../UI/BannerCard';
import { from } from '@apollo/client';
import { CategoryType } from '../../types/book';

const Index = ({ data }: { data: CategoryType[] }) => {
    const lstCategory = data;
    let index = 0;
    return (
        <div className="bg-white h-[100vh] flex-col-reverse-end-center lg:flex-row-center-center">
            <div className="flex items-center text-center lg:text-left px-8 md:px-12 py-10 lg:py-0 w-full lg:w-1/2">
                <div>
                    <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">
                        Read, discover,
                        <span className="text-indigo-600"> set goals.</span>
                    </h2>
                    <p className="mt-2 text-sm text-gray-500 md:text-base">
                        All in one place. This is the single destination for all the books you love — and all the ones
                        you’ll love next. Browse the Book Store to find the perfect book to read. Track what you’ve read
                        and want to read, and set your own Reading Goals — all in one app and across all your devices.
                        Your journey as a lifelong learner is as unique as you are. Let us help guide your way.
                    </p>
                    <div className="justify-start mt-10  hidden lg:flex ">
                        <Button
                            text="View All Books"
                            href="/books"
                            isDark={true}
                            style="mr-2"
                            styleText=""
                            iconPosition="right"
                            icon={<ChevronRightIcon className={`h-6 w-h-6 fill-gray-200`} />}
                        />
                        <Button
                            text="Browse Categories"
                            href="#dv-category"
                            isDark={false}
                            style="ml-2"
                            iconPosition="right"
                            icon={<ChevronRightIcon className={`h-6 w-h-6 fill-gray-800`} />}
                        />
                    </div>
                    <div className=" flex md:mt-14 lg:hidden justify-center mt-6">
                        <Button
                            text="Books"
                            href="/books"
                            isDark={true}
                            style="mr-2 h-[43px]"
                            styleText=""
                            iconPosition="right"
                            icon={<ChevronRightIcon className={`h-6 w-h-6 fill-gray-200`} />}
                        />
                        <Button
                            text="Categories"
                            href="#dv-category"
                            isDark={false}
                            style="ml-2 h-[43px]"
                            iconPosition="right"
                            icon={<ChevronRightIcon className={`h-6 w-h-6 fill-gray-800`} />}
                        />
                    </div>
                </div>
            </div>
            <div className="h-52 md:h-96 lg:h-full w-full lg:w-1/2 lg:bg-new">
                <div className="relative h-full object-cover">
                    <Image
                        src="/book-banner.jpeg"
                        alt="articles"
                        layout="fill"
                        blurDataURL={`/_next/image?url=/book-banner.jpeg&w=16&q=1`}
                        placeholder="blur" // Optional blur-up while loading
                        className="w-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default Index;
