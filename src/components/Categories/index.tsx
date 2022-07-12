import React, { useEffect } from 'react';
import { CheckCircleIcon } from '@heroicons/react/solid';
import Button from '../UI/Button';
import Image from 'next/image';
import PageHeader from '../UI/PageHeader';
import { CategoryType } from '../../types/book';
import BannerCard from '../UI/BannerCard';
import { myConfig } from '../../lib/config';

const lstUrl = [
    {
        url: 'Freelancer',
        height: '0',
        width: '0',
    },
];

const Index = ({ data }: { data: CategoryType[] }) => {
    let index = 0;
    // if (data) {
    //     lstUrl.pop();
    //     data.map((item, index) => {
    //         if (index == 2 || index == 3) {
    //             lstUrl.push({ url: `/books/${item.attributes.imgurl}`, height: 'h-[200px]', width: 'w-full' });
    //         } else {
    //             lstUrl.push({ url: `/books/${item.attributes.imgurl}`, height: 'h-[100px]', width: 'w-1/2' });
    //         }
    //     });
    // }
    return (
        <div id="dv-category" className={`${Style.pageContainer} flex-col-center-center bg-gray-100`}>
            <PageHeader
                styleContainer="!mb-10"
                header="categories"
                styleheader="text-gray-900"
                styleSubheader="text-xl-custom text-gray-300"
                subHeader=""
            />

            <div className="size-full grid-col-2 lg:flex-row-center-center">
                <div className="w-full lg:w-1/2 grid grid-cols-3 p-14">
                    {data.map((item, index1) => {
                        return (
                            <Button
                                text={item.attributes.name}
                                href={`/books?cat=${item.id}`}
                                isDark={false}
                                style="m-1 whitespace-nowrap overflow-hidden"
                            />
                        );
                    })}
                </div>

                <div className="w-full lg:w-1/2  grid-col-2 lg:flex-row-center-center">
                    {Array.from([1, 2, 3]).map((item, index1) => {
                        return (
                            <div key={index1} className="w-full grid grid-cols-2 lg:flex lg:flex-col-center-center">
                                {Array.from([1, 2]).map((item, index2) => {
                                    const height =
                                        [1, 2, 5].indexOf(index) >= 0
                                            ? 'h-[32vmin] lg:h-[26vmin]'
                                            : 'h-[32vmin] lg:h-[36vmin]';

                                    if (!data[index]) return '';

                                    const category = data[index].attributes.name;
                                    const imgurl = `/books/${data[index].attributes.imgurl}`;
                                    const redirecturl = `/books?cat=${data[index].id}`;
                                    index++;

                                    return (
                                        <BannerCard
                                            key={index}
                                            url={imgurl}
                                            width={0}
                                            href={redirecturl}
                                            height={0}
                                            orientation="col"
                                            // ${index == 3 ? 'rotate-3' : ''}
                                            styleConatiner={`${height}`}
                                            styletextBox=""
                                            styleText={`text-white text-sm font-bold text-center whitespace-normal font-mono uppercase`}
                                            styleImage={'absolute opacity-50  left-0 bottom-0'}
                                            text={category}
                                        />
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

const Style = {
    pageContainer: `px-5 md:px-10 lg:px-20 py-20 md:py-32 lg:py-32 lg:min-h-[100vh]`,
};
export default Index;
