import React, { useContext } from 'react';
import { BookType } from '../../../types/book';
import Image from 'next/image';
import { ChevronRightIcon, StarIcon } from '@heroicons/react/solid';
import { myConfig } from '../../../lib/config';
import Button from '../../UI/Button';
import { SetCartItems } from '../../../lib/cartHandler';
import { AppContext } from '../../../contexts/AppContext';

const index = ({ book }: { book: BookType }) => {
    const { state, dispatch } = useContext(AppContext);

    // let url = book.attributes.imgurl?.data?.attributes?.url
    //     ? `${myConfig.API_URL}${book.attributes.imgurl.data.attributes.url}`
    //     : "";

    const getDateFormatted = (vlue: string) => {
        return new Date(vlue).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        });
    };

    const getRating = () => {
        let rating = 0,
            count = 0;
        if (book.attributes?.bookreviews?.data) {
            book.attributes?.bookreviews.data.map((item) => {
                rating += item.attributes.rating;
                count++;
            });
        }

        if (count == 0) return 0;
        else return parseInt((rating / count).toFixed(1));
    };

    let rating = getRating();

    return (
        <div className="flex-col-center-center">
            <div className={`relative w-full lg:w-[15vw] h-[230px] md:h-[44vh] lg:h-[260px] pb-10`}>
                {!!book.attributes?.imgurl && (
                    <Image src={`/books/${book.attributes.imgurl}`} alt="books" layout="fill" objectFit="cover" />
                )}
            </div>
            <div className="w-full  mt-4 flex-col-start-star px-2">
                <p className="text-base font-medium text-gray-900 max-w-[140px] lg:max-w-[185px] overflow-x-hidden whitespace-nowrap">
                    {book.attributes.title}
                </p>
                <p className="text-sm font-medium text-gray-700">{book.attributes.author?.data?.attributes?.name}</p>
                <p className="text-sm font-medium text-gray-900">${book.attributes.price}</p>
                {/* <p className="text-sm font-medium text-gray-900">
                    {book.attributes.bookcategory?.data?.attributes?.name}
                </p> */}

                <p className="text-sm font-medium text-gray-900">{getDateFormatted(book.attributes.publish_date)}</p>

                <div className="flex-row-start-start mb-3">
                    {rating > 0 && (
                        <>
                            <StarIcon className="h-5 w-5 fill-amber-400 mr-[2px]" aria-hidden="true" />
                            <p className="text-sm font-medium text-gray-900">{rating}</p>
                        </>
                    )}
                    {rating == 0 && <p className="text-xs font-medium text-gray-900 text-transparent">0 rating</p>}
                </div>

                <div className="w-full flex-col-center-center">
                    <Button
                        text="View Details"
                        href={`/books/${book.attributes.slug}`}
                        isDark={true}
                        style="my-2 !h-[35px] w-40"
                    />
                    <Button
                        text="Add to cart"
                        href=""
                        isDark={false}
                        style="!h-[35px] w-40"
                        onClickHandler={() => {
                            const items = SetCartItems(book);
                            dispatch({
                                type: 'ADD_TO_CART',
                                payload: items,
                            });
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default index;
