import React, { useEffect } from 'react';
import { client } from '../../lib/apollo';
import { myConfig } from '../../lib/config';
import { FETCH_BOOKS } from '../../queries';
import { BookType } from '../../types/book';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/solid';
import Button from '../../components/UI/Button';

const url = `${myConfig.API_URL}/api/books`;

const BookDetail = ({ data }: { data: BookType }) => {
    useEffect(() => {}, []);

    console.log(data);

    return (
        <div className={`flex-col-start-start min-h-[100vh] size-full`}>
            <div className="p-10">
                <nav className="flex" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-3">
                        <li className="inline-flex items-center">
                            <a
                                href="#"
                                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                                <svg
                                    className="mr-2 w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                                </svg>
                                Home
                            </a>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <svg
                                    className="w-6 h-6 text-gray-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                <a
                                    href="#"
                                    className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                                >
                                    Projects
                                </a>
                            </div>
                        </li>
                        <li aria-current="page">
                            <div className="flex items-center">
                                <svg
                                    className="w-6 h-6 text-gray-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                                    Flowbite
                                </span>
                            </div>
                        </li>
                    </ol>
                </nav>
            </div>
            <div
                className={`${Style.pageContainer} flex-col-center-start w-full`}
            >
                <div className={`flex-row-center-start`}>
                    <div className="relative h-[450px] w-[300px] bg-red-200">
                        <Image
                            src={`/books/${data.attributes.imgurl}`}
                            alt="books"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className="h-full w-2/3 px-10 flex-col-start-start">
                        <span className="text-3xl font-bold text-gray-800 mb-3 capitalize">
                            {data.attributes.title}
                        </span>
                        <span className="text-2xl font-normal text-gray-700 mb-3 capitalize">
                            {data.attributes.author.data.attributes.name}
                        </span>
                        <span className="text-2xl font-normal text-gray-700 mb-3">
                            ${data.attributes.price}
                        </span>
                        <span className="text-2xl font-normal text-gray-700 mb-3">
                            pages: {data.attributes.pages}
                        </span>
                        <div className="flex-row-start-start mb-3">
                            <StarIcon
                                className="h-7 w-7 fill-amber-400 mr-1"
                                aria-hidden="true"
                            />
                            <p className="text-xl font-medium text-gray-900">
                                {data.attributes.rating}
                            </p>
                        </div>
                        <span className="text-base font-normal text-gray-700 mb-5">
                            {data.attributes.description}
                        </span>
                        <div className=" flex-col-center-center">
                            <Button
                                text="View Details"
                                href={`/books/${data.attributes.slug}`}
                                isDark={true}
                                style="my-2 !h-[35px] w-40"
                            />
                            <Button
                                text="Add to cart"
                                href="#dv-category"
                                isDark={false}
                                style="!h-[35px] w-40"
                            />
                        </div>
                    </div>
                </div>
                <div className={`flex-col-start-start size-full py-20`}>
                    <span className="text-3xl font-bold text-gray-800 mb-3 capitalize">
                        Reviews
                    </span>
                    <div className="flex-row-center-center size-full">
                        <div className="flex-col-center-center w-1/2">
                            <div className="flex items-center mb-3">
                                <svg
                                    className="w-5 h-5 text-yellow-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                                <svg
                                    className="w-5 h-5 text-yellow-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                                <svg
                                    className="w-5 h-5 text-yellow-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                                <svg
                                    className="w-5 h-5 text-yellow-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                                <svg
                                    className="w-5 h-5 text-gray-300 dark:text-gray-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                                <p className="ml-2 text-sm font-medium text-gray-900 dark:text-white">
                                    4.95 out of 5
                                </p>
                            </div>
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                1,745 global ratings
                            </p>
                            <div className="flex items-center mt-4">
                                <span className="text-sm font-medium text-blue-600 dark:text-blue-500">
                                    5 star
                                </span>
                                <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                    <div className="h-5 bg-yellow-400 rounded w-[70%]"></div>
                                </div>
                                <span className="text-sm font-medium text-blue-600 dark:text-blue-500">
                                    70%
                                </span>
                            </div>
                            <div className="flex items-center mt-4">
                                <span className="text-sm font-medium text-blue-600 dark:text-blue-500">
                                    4 star
                                </span>
                                <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                    <div className="h-5 bg-yellow-400 rounded w-[17%]"></div>
                                </div>
                                <span className="text-sm font-medium text-blue-600 dark:text-blue-500">
                                    17%
                                </span>
                            </div>
                            <div className="flex items-center mt-4">
                                <span className="text-sm font-medium text-blue-600 dark:text-blue-500">
                                    3 star
                                </span>
                                <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                    <div className="h-5 bg-yellow-400 rounded w-[8%]"></div>
                                </div>
                                <span className="text-sm font-medium text-blue-600 dark:text-blue-500">
                                    8%
                                </span>
                            </div>
                            <div className="flex items-center mt-4">
                                <span className="text-sm font-medium text-blue-600 dark:text-blue-500">
                                    2 star
                                </span>
                                <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                    <div className="h-5 bg-yellow-400 rounded w-[4%]"></div>
                                </div>
                                <span className="text-sm font-medium text-blue-600 dark:text-blue-500">
                                    4%
                                </span>
                            </div>
                            <div className="flex items-center mt-4">
                                <span className="text-sm font-medium text-blue-600 dark:text-blue-500">
                                    1 star
                                </span>
                                <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                    <div className="h-5 bg-yellow-400 rounded w-[1%]"></div>
                                </div>
                                <span className="text-sm font-medium text-blue-600 dark:text-blue-500">
                                    1%
                                </span>
                            </div>
                        </div>
                        <div className="flex-col-center-center w-1/2">
                            {data.attributes.bookreviews.data.map(
                                (item, index) => {
                                    return (
                                        <div>
                                            <p className="text-sm font-medium text-gray-700">
                                                {item.attributes.review}
                                            </p>
                                        </div>
                                    );
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Style = {
    pageContainer: `px-5 md:px-10 lg:px-32 py-20 md:py-24 lg:py-24 lg:min-h-[100vh]`,
};

export default BookDetail;

export const getStaticPaths = async () => {
    const resp = await fetch(`${url}?populate=*`).then((res) => res.json());
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
