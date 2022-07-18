import React, { useContext, useEffect } from 'react';
import { client } from '../../lib/apollo';
import { myConfig } from '../../lib/config';
import { FETCH_BOOKS } from '../../queries';
import { BookType } from '../../types/book';
import Image from 'next/image';
import { StarIcon, HomeIcon, ChevronRightIcon } from '@heroicons/react/solid';
import Button from '../../components/UI/Button';
import BreadCrumb from '../../components/UI/BreadCrumb';
import Review from '../../components/UI/Review/ReviewBox';
import { AppContext } from '../../contexts/AppContext';
import { CartType, CartItemType } from '../../types/cart';
import { SetCartItems } from '../../lib/cartHandler';

const url = `${myConfig.API_URL}/api/books`;

const BookDetail = ({ data }: { data: BookType }) => {
    useEffect(() => {}, []);
    const { state, dispatch } = useContext(AppContext);

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
        if (data.attributes?.bookreviews?.data) {
            data.attributes?.bookreviews.data.map((item) => {
                rating += item.attributes.rating;
                count++;
            });
        }

        if (count == 0) return 0;
        else return parseFloat((rating / count).toFixed(1));
    };

    let rating = getRating();
    return (
        <div className={`flex-col-start-start min-h-[100vh] size-full`}>
            <BreadCrumb isDetail={true} />
            <div className={`${Style.pageContainer} flex-col-center-start w-full`}>
                <div className={`flex-col-center-center md:flex-row-start-start`}>
                    <div className="relative h-[280px]  md:h-[390px] w-[200px] md:w-[260px] mb-10 md:mb-0">
                        <Image src={`/books/${data.attributes.imgurl}`} alt="books" layout="fill" objectFit="cover" />
                    </div>
                    <div className="h-full w-full  md:w-2/3 md:px-10 flex-col-start-start">
                        <span className="text-xl md:text-3xl font-bold text-gray-800 mb-3 capitalize">
                            {data?.attributes?.title}
                        </span>
                        <span className="text-lg md:text-xl font-normal text-gray-700 mb-2 capitalize">
                            {data?.attributes?.author.data?.attributes?.name}
                        </span>
                        <span className="text-base md:text-lg font-medium text-gray-900 mb-2">
                            ${data?.attributes?.price}
                        </span>
                        <span className="text-base md:text-lg font-normal text-gray-700 mb-2">
                            {data?.attributes?.pages} pages
                        </span>
                        <span className="text-base md:text-lg font-normal text-gray-700 mb-2">
                            Pusblished{' '}
                            <span className="text-base md:text-lg font-normal text-gray-500">
                                {getDateFormatted(data?.attributes?.publish_date)}
                            </span>
                        </span>
                        {rating > 0 && (
                            <div className="flex-row-start-start mb-3">
                                <StarIcon className="h-7 w-7 fill-amber-400 mr-1" aria-hidden="true" />
                                <p className="text-lg font-medium text-gray-900">{rating}</p>
                            </div>
                        )}
                        <span className="text-base font-normal text-gray-700 mb-5">
                            {data?.attributes?.description}
                        </span>
                        <div className=" flex-col-center-center">
                            {/* <Button
                                text="View Details"
                                href={`/books/${data.attributes.slug}`}
                                isDark={true}
                                style="my-2 !h-[35px] w-40"
                            /> */}
                            <Button
                                text="Add to cart"
                                href=""
                                isDark={false}
                                style="!h-[35px] w-40"
                                onClickHandler={() => {
                                    const items = SetCartItems(data);
                                    dispatch({
                                        type: 'ADD_TO_CART',
                                        payload: items,
                                    });
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className={`flex-col-start-start size-full py-20 md:py-32`}>
                    <span className="text-2xl font-bold text-gray-800 mb-10 capitalize">Reviews</span>
                    <div className="flex-col-center-center md:flex-row-start-start size-full">
                        <div className="flex-col-center-center w-full md:w-1/2 ">
                            <Review reviews={data?.attributes?.bookreviews?.data} />
                        </div>
                        <div className="flex-col-start-start w-full md:w-1/2 mt-10 md:mt-0">
                            {data?.attributes?.bookreviews?.data?.map((item, index) => {
                                return (
                                    <div key={index} className="flex-col-start-start mb-7">
                                        <div className="flex-row-start-center size-full space-x-4 mb-3">
                                            <div
                                                className="flex-row-center-center w-9 h-9 overflow-hidden
                                                rounded-full bg-gray-600"
                                            >
                                                <span className="text-sm font-semibold text-white">N</span>
                                            </div>
                                            <div className="flex-row-start-start">
                                                <StarIcon className="h-5 w-5 fill-amber-400 mr-1" aria-hidden="true" />
                                                <p className="text-sm font-normal text-gray-900">
                                                    {item?.attributes?.rating}
                                                </p>
                                            </div>
                                            <div className="flex-row-start-center space-x-2">
                                                <span className="text-base text-gray-800">
                                                    {item?.attributes?.username}
                                                </span>
                                                <span className="text-xs text-gray-400 mt-[2px]">
                                                    {getDateFormatted(item?.attributes?.updatedAt)}
                                                </span>
                                            </div>
                                        </div>

                                        <p className="text-sm font-medium text-gray-700 mt-1 border-b-[1px] border-gray-200 pb-5">
                                            {item?.attributes?.review}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Style = {
    pageContainer: `px-8 md:px-10 lg:px-24 py-5 md:py-10 lg:min-h-[100vh]`,
};

export default BookDetail;

export const getStaticPaths = async () => {
    const resp = await fetch(`${url}?pagination[page]=1&pagination[pageSize]=100&populate=*`).then((res) => res.json());

    const pths = resp.data?.map((item: BookType) => {
        return {
            params: { id: item.id, slug: item.attributes.slug },
        };
    });
    return {
        paths: pths,
        fallback: false,
    };
};

export const getStaticProps = async (context: any) => {
    const uri = `${url}?populate=*&filters\[slug][$eq]=${context.params.slug}`;
    const resp = await fetch(uri).then((res) => res.json());
    const info = resp.data[0];
    return {
        props: { data: info },
    };
};
