import { ChevronRightIcon, HomeIcon } from '@heroicons/react/solid';
import React from 'react';
import Button from '../Button';

const index = ({ isDetail }: { isDetail: boolean }) => {
    return (
        <nav className="flex pt-5 lg:pt-7 pb-3 lg:pl-5" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1">
                <li className="inline-flex items-center">
                    <Button
                        text="Home"
                        href="/"
                        isDark={false}
                        style="whitespace-nowrap overflow-hidden !bg-transparent !border-0
                                text-gray-400 hover:text-gray-600 !w-[80px] !p-2 !m-0"
                        iconPosition="left"
                        icon={<HomeIcon className={`h-[15px] w-h-[15px] fill-gray-400 mr-2`} />}
                    />
                </li>
                <li>
                    {isDetail && (
                        <Button
                            text="Books"
                            href="/books"
                            isDark={false}
                            style="whitespace-nowrap overflow-hidden !bg-transparent !border-0
                                text-gray-400 hover:text-gray-600 !w-[90px] !p-2 !m-0"
                            iconPosition="left"
                            icon={<ChevronRightIcon className={`h-[18px] w-[18px] fill-gray-400 mr-2`} />}
                        />
                    )}
                    {!isDetail && (
                        <div className="flex-row-start-start !w-[90px]">
                            <ChevronRightIcon className={`h-[18px] w-h-[18px] fill-gray-400 mr-2`} />
                            <span className="text-gray-400  text-xs    uppercase font-semibold ">Books</span>
                        </div>
                    )}
                </li>
                {isDetail && (
                    <li aria-current="page">
                        <div className="flex-row-start-start !w-[90px]">
                            <ChevronRightIcon className={`h-[18px] w-h-[18px] fill-gray-400 mr-2`} />
                            <span className="text-gray-400  text-xs    uppercase font-semibold ">Details</span>
                        </div>
                    </li>
                )}
            </ol>
        </nav>
    );
};

export default index;
