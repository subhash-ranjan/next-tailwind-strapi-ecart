import React from 'react';
import { CategoryType } from '../../../types/book';
import BookCard from '../BookCard';
import { ChevronRightIcon } from '@heroicons/react/solid';
import PageHeader from '../../UI/PageHeader';
import IconLink from '../../UI/IconLink';

const index = ({ category }: { category: CategoryType }) => {
    return (
        <div className={`flex-col-center-center mb-28 lg:mb-32 lg:h-full`}>
            <div className="w-full flex-row-between-start">
                <PageHeader
                    header={category.attributes.name}
                    styleheader="text-gray-900"
                    styleSubheader="text-xl-custom text-gray-300"
                    subHeader=""
                />
                <IconLink
                    text="View More"
                    isTragetBlank={false}
                    style={`min-w-[150px] text-right flex-row-end-center font-semibold text-base text-gray-900 group hover:text-gray-600`}
                    styleText="text-base font-normal"
                    href={`/books?cat=${category.id}`}
                    iconPosition="right"
                    icon={<ChevronRightIcon className={`h-5 w-5  fill-gray-900 group-hover:fill-gray-500`} />}
                />
            </div>

            <div className="w-full gap-8 hidden lg:flex-row-between-center">
                {category.attributes.books.data.slice(0, 5).map((item, index) => {
                    return <BookCard key={index} book={item} />;
                })}
            </div>
            <div className="w-full grid grid-cols-2 gap-8 lg:hidden">
                {category.attributes.books.data.slice(0, 4).map((item, index) => {
                    return <BookCard key={index} book={item} />;
                })}
            </div>
        </div>
    );
};

const Style = {
    pageContainer: `px-5 md:px-10 lg:px-20 py-20 md:py-32 lg:py-32 lg:h-[100vh]`,
};

export default index;
