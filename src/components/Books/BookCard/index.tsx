import React from 'react';
import { BookType } from '../../../types/book';
import Image from 'next/image';
import { ChevronRightIcon, StarIcon } from '@heroicons/react/solid';
import { myConfig } from '../../../lib/config';
import Button from '../../UI/Button';

const index = ({ book }: { book: BookType }) => {
    // let url = book.attributes.imgurl?.data?.attributes?.url
    //     ? `${myConfig.API_URL}${book.attributes.imgurl.data.attributes.url}`
    //     : "";

    return (
        <div className="flex-col-center-center">
            <div className={`relative w-full lg:w-[15vw] h-[260px] pb-10`}>
                {!!book.attributes?.imgurl && (
                    <Image src={`/books/${book.attributes.imgurl}`} alt="books" layout="fill" objectFit="cover" />
                )}
            </div>
            <div className="w-full  mt-4 flex-col-start-star px-2">
                <p className="text-base font-medium text-gray-900 lg:max-w-[185px] overflow-x-hidden whitespace-nowrap">
                    {book.attributes.title}
                </p>
                <p className="text-sm font-medium text-gray-700">{book.attributes.author?.data?.attributes?.name}</p>
                <p className="text-sm font-medium text-gray-900">${book.attributes.price}</p>
                <p className="text-sm font-medium text-gray-900">
                    {book.attributes.bookcategory?.data?.attributes?.name}
                </p>

                <p className="text-sm font-medium text-gray-900">{book.attributes.publish_date}</p>
                <div className="flex-row-start-start mb-3">
                    <p className="text-sm font-medium text-gray-900">{book.attributes.rating}</p>
                    <StarIcon className="h-5 w-5 fill-amber-400" aria-hidden="true" />
                </div>

                <div className="w-full flex-col-center-center">
                    <Button
                        text="View Details"
                        href={`/books/${book.attributes.slug}`}
                        isDark={true}
                        style="my-2 !h-[35px] w-40"
                    />
                    <Button text="Add to cart" href="#dv-category" isDark={false} style="!h-[35px] w-40" />
                </div>
            </div>
        </div>
    );
};

export default index;
