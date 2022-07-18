import { Fragment, useState, useEffect, ChangeEvent, MouseEvent, MouseEventHandler } from 'react';
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { ChevronDownIcon, FilterIcon, MinusSmIcon, PlusSmIcon, ViewGridIcon, LoginIcon } from '@heroicons/react/solid';
import { useLazyQuery } from '@apollo/client';
import { myConfig } from '../lib/config';
import { client } from '../lib/apollo';
import { FETCH_BOOKS, FETCH_CATEGORIES, FETCH_AUTHORS } from '../queries';
import BookCard from '../components/Books/BookCard';
import SearchBar from '../components/UI/SearchBar';
import { LoaderCircle } from '../svgs';

import { BookType, BookPaginationType, CategoryType, AuthorType } from '../types/book';
import { useRouter } from 'next/router';
import { string } from 'yup/lib/locale';
import Button from '../components/UI/Button';
import BreadCrumb from '../components/UI/BreadCrumb';

const sortOptions = [
    // { name: 'Most Popular', value: 'rating:desc', current: true },
    { name: 'Best Rating', value: 'rating:desc', current: false },
    { name: 'Newest', value: 'publish_date:desc', current: false },
    { name: 'Price: Low to High', value: 'price', current: false },
    { name: 'Price: High to Low', value: 'price:desc', current: false },
];
const filters = [
    {
        id: 0,
        name: 'Category',
        options: [{ value: '', label: '', checked: false }],
    },
    {
        id: 'author',
        name: 'Author',
        options: [{ value: '', label: '', checked: false }],
    },
];

function classNames({ ...classes }: { classes: string[] }) {
    // return classes.filter(Boolean).join(' ')
}

let page: number, pageCount: number, pageSize: number, total: number, lstAuthor: any;
const _pageSize = 10;

export default function Books({ categories, authors }: { categories: CategoryType[]; authors: AuthorType[] }) {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const [sort, setSort] = useState('title');
    const [page, setPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [categoryFilter, setCategoryFilter] = useState<number[]>([]);
    const [authorFilter, setAuthorFilter] = useState<number[]>([]);
    let [isMore, setMore] = useState(false);
    let [isLoad, setLoad] = useState(false);
    const [open, setOpen] = useState(true);

    const defaultCatArray: number[] = categories.map((x) => {
        return x.id;
    });
    const defaultAuthorArray: number[] = authors.map((x) => {
        return x.id;
    });

    const [getBooks, { called, loading, data: bookList, error, fetchMore }] = useLazyQuery(FETCH_BOOKS, {
        // fetchPolicy: 'cache-and-network',
    });

    const handleSort = (event: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>, value: any): void => {
        event.preventDefault();
        setSort(value);
    };

    const handleFilterChange = (event: ChangeEvent<HTMLInputElement>, type: string): void => {
        const item = parseInt(event.target.value);
        if (type.toLowerCase() == 'author') {
            let _author: number[] = [...authorFilter];
            if (!event.target.checked) {
                _author.splice(_author.indexOf(item), 1);
            } else {
                _author.push(item);
            }
            setAuthorFilter(_author);
        } else {
            let cate: number[] = [...categoryFilter];
            if (!event.target.checked) {
                cate.splice(cate.indexOf(item), 1);
            } else {
                cate.push(item);
            }
            setCategoryFilter(cate);
        }

        //reset page
        setPage(1);
    };

    const handlePagination = (): void => {
        fetchMore({
            query: FETCH_BOOKS,
            variables: {
                title: searchQuery,
                bookcategory: categoryFilter.length == 0 ? defaultCatArray : categoryFilter,
                author: authorFilter.length == 0 ? defaultAuthorArray : authorFilter,
                sort: sort,
                page: page + 1,
                pageSize: _pageSize,
            },
            updateQuery: (previousQueryResult, { fetchMoreResult }) => {
                const prevlist = client.readQuery({
                    query: FETCH_BOOKS,
                    variables: {
                        title: searchQuery,
                        bookcategory: categoryFilter.length == 0 ? defaultCatArray : categoryFilter,
                        author: authorFilter.length == 0 ? defaultAuthorArray : authorFilter,

                        sort: sort,
                        page: page,
                        pageSize: _pageSize,
                    },
                });

                if (!fetchMoreResult) return prevlist;
                fetchMoreResult.books.data = [...prevlist.books.data, ...fetchMoreResult.books.data];
                return fetchMoreResult;
            },
        });
        setPage(page + 1);
    };

    useEffect(() => {
        Array.from([1, 2]).map((item, index) => {
            if (index == 0) {
                categories.map((category) => {
                    filters[index].options.push({
                        value: category.id.toString(),
                        label: category.attributes.name,
                        checked: false,
                    });
                });
                filters[0].options = filters[0].options.filter((x) => x.value != '');
            }
            if (index == 1) {
                authors.map((author) => {
                    filters[index].options.push({
                        value: author.id.toString(),
                        label: author.attributes.name,
                        checked: false,
                    });
                });
                filters[1].options = filters[1].options.filter((x) => x.value != '');
            }
        });
    }, []);

    useEffect(() => {
        getBooks({
            variables: {
                title: searchQuery,
                bookcategory: categoryFilter.length == 0 ? defaultCatArray : categoryFilter,
                author: authorFilter.length == 0 ? defaultAuthorArray : authorFilter,
                sort: sort,
                page: page,
                pageSize: _pageSize,
            },
        });
    }, [categoryFilter, authorFilter, sort]);

    useEffect(() => {
        if (bookList) {
            const { page, pageCount, total } = bookList.books.meta.pagination;
            if (page < pageCount) setMore(true);
            else setMore(false);
        }
    }, [bookList]);

    const router = useRouter();
    const { cat: categoryQueryParam } = router.query;
    useEffect(() => {
        if (categoryQueryParam && categoryQueryParam?.length > 0) {
            let filter: number[] = [];
            filter.push(parseInt(categoryQueryParam[0]));
            filters[0].options.map((x) => {
                if (x.value == categoryQueryParam[0]) x.checked = true;
                return x;
            });
            setCategoryFilter(filter);
        }
    }, [categoryQueryParam]);

    return (
        <div className="bg-white lg:min-h-[100vh]">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                <BreadCrumb isDetail={false} />
                <div className="relative z-10 flex-row-start-start  pt-5 pb-6 border-b border-gray-200">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-5 hidden ld:flex">Books</h1>

                    <div className={`w-full flex-col-center-end space-y-3 md:space-y-0 md:flex-row-end-center`}>
                        <SearchBar
                            onChangeHandler={(text: string, isSearch: boolean) => {
                                setSearchQuery(text);
                                if (isSearch) {
                                    getBooks({
                                        variables: {
                                            title: searchQuery,
                                            bookcategory: categoryFilter.length == 0 ? defaultCatArray : categoryFilter,
                                            author: authorFilter.length == 0 ? defaultAuthorArray : authorFilter,
                                            sort: sort,
                                            page: page,
                                            pageSize: _pageSize,
                                        },
                                    });
                                }
                            }}
                        />

                        <div className="flex items-center">
                            <Menu as="div" className="relative inline-block text-left">
                                <div
                                    onClick={() => {
                                        setOpen(true);
                                    }}
                                >
                                    <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                        Sort
                                        <ChevronDownIcon
                                            className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                            aria-hidden="true"
                                        />
                                    </Menu.Button>
                                </div>
                                {open && (
                                    <Transition
                                        static
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <div>
                                            <Menu.Items
                                                className="origin-top-right absolute right-0 mt-2 w-40 rounded-md 
                                                        shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                            >
                                                <div className="py-1">
                                                    {sortOptions.map((option, index: number) => (
                                                        <Menu.Item key={option.name}>
                                                            {({ active }) => (
                                                                <a
                                                                    href=""
                                                                    className={`
                                                                                        ${
                                                                                            option.current
                                                                                                ? 'font-medium text-gray-900'
                                                                                                : 'text-gray-500'
                                                                                        }
                                                                                        ${active ? 'bg-gray-100' : ''}
                                                                                        block px-4 py-2 text-sm`}
                                                                    onClick={(event) => {
                                                                        setOpen(false);
                                                                        sortOptions.map(
                                                                            (optioninner, indexinner: number) => {
                                                                                if (indexinner == index)
                                                                                    optioninner.current = true;
                                                                                else optioninner.current = false;
                                                                            }
                                                                        );
                                                                        handleSort(event, option.value);
                                                                    }}
                                                                >
                                                                    {option.name}
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                    ))}
                                                </div>
                                            </Menu.Items>
                                        </div>
                                    </Transition>
                                )}
                            </Menu>

                            <button
                                type="button"
                                className="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden"
                                onClick={() => setMobileFiltersOpen(true)}
                            >
                                <span className="sr-only">Filters</span>
                                <FilterIcon className="w-5 h-5" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                </div>

                <section aria-labelledby="products-heading" className="pt-6 pb-24">
                    <h2 id="products-heading" className="sr-only">
                        Products
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
                        {/* Filters */}
                        <form className="hidden lg:block">
                            <h3 className="sr-only">Categories</h3>
                            {/* <ul
                                role="list"
                                className="text-sm font-medium text-gray-900 space-y-4 pb-6 border-b border-gray-200"
                            >
                                {filters[0].options.map((option, optionIdx) => {
                                    if (optionIdx < 4)
                                        return (
                                            <li key={optionIdx} value={option.value}>
                                                <a
                                                    href=""
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                    }}
                                                >
                                                    <h1 className="capitalize"> {option.label}</h1>
                                                </a>
                                            </li>
                                        );
                                })}
                            </ul> */}

                            {filters.map((section) => (
                                <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                                    {({ open }) => (
                                        <>
                                            <h3 className="-my-3 flow-root">
                                                <Disclosure.Button className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
                                                    <span className="font-medium text-gray-900">{section.name}</span>
                                                    <span className="ml-6 flex items-center">
                                                        {open ? (
                                                            <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                                                        ) : (
                                                            <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                                                        )}
                                                    </span>
                                                </Disclosure.Button>
                                            </h3>
                                            <Disclosure.Panel className="pt-6">
                                                <div className="space-y-4 py-4 max-h-[300px] overflow-y-scroll">
                                                    {section.options.map((option, optionIdx) => {
                                                        return (
                                                            <div key={option.value} className="flex items-center">
                                                                <input
                                                                    id={`filter-${section.id}-${optionIdx}`}
                                                                    name={`${section.id}[]`}
                                                                    defaultValue={option.value}
                                                                    type="checkbox"
                                                                    defaultChecked={option.checked}
                                                                    className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                                                    onChange={(event) =>
                                                                        handleFilterChange(event, section.name)
                                                                    }
                                                                />
                                                                <label
                                                                    htmlFor={`filter-${section.id}-${optionIdx}`}
                                                                    className="ml-3 text-sm text-gray-600 capitalize"
                                                                >
                                                                    {option.label}
                                                                </label>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            ))}
                        </form>

                        {/* Product grid */}
                        <div
                            className="flex-col-center-start lg:col-span-3
                        border-0 lg:border-4 border-dashed border-gray-200"
                        >
                            <div
                                className={`w-full min-h-[80vh]  
                                            rounded-lg lg:h-full
                                            grid grid-cols-2 
                                            lg:flex-row-center-start
                                            lg:flex-wrap gap-4 lg:gap-10 lg:p-10 
                                            md:p-5 md:gap-8
                                            `}
                            >
                                {loading && (
                                    <div className="h-[40vh] w-[100vw] flex-row-center-center">
                                        <LoaderCircle classes="fill-gray-900" height="50" width="50" />
                                    </div>
                                )}

                                {!loading && (!bookList || bookList?.books?.data?.length == 0) && (
                                    <div className="h-[40vh] w-[100vw] flex-row-center-center">
                                        <span className="text-gray-800 font-normal">No matching items!</span>
                                    </div>
                                )}

                                {!loading &&
                                    bookList &&
                                    bookList.books.data.map((item: BookType, index: number) => {
                                        return <BookCard key={index} book={item} />;
                                    })}
                            </div>

                            {!loading && bookList && isMore && (
                                <div className="h-40 w-full flex-row-center-center mt-10">
                                    <Button
                                        text="Load More"
                                        href=""
                                        isDark={true}
                                        style="!h-[35px] w-40 border-[2px] !bg-transparent !border-indigo-500 hover:!bg-indigo-500 "
                                        styleText="!text-indigo-700 hover:!text-white"
                                        onClickHandler={() => handlePagination()}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </main>

            {/* Mobile filter dialog */}
            <Transition.Root show={mobileFiltersOpen} as={Fragment}>
                <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 flex z-40">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="translate-x-full"
                        >
                            <Dialog.Panel className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
                                <div className="px-4 flex items-center justify-between">
                                    <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                                    <button
                                        type="button"
                                        className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
                                        onClick={() => setMobileFiltersOpen(false)}
                                    >
                                        <span className="sr-only">Close menu</span>
                                        <XIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>

                                {/* Filters */}
                                <form className="mt-4 border-t border-gray-200">
                                    <h3 className="sr-only">Categories</h3>
                                    <ul role="list" className="font-medium text-gray-900 px-2 py-3">
                                        {/* {filters[0].options.map((option, optionIdx) => {
                                            if (optionIdx < 4) {
                                                return (
                                                    <li key={optionIdx}>
                                                        <a
                                                            className="block px-2 py-3 lowercase"
                                                            href=""
                                                            onClick={(event) => {
                                                                event.preventDefault();
                                                            }}
                                                        >
                                                            <h1 className="capitalize"> {option.label}</h1>
                                                        </a>
                                                    </li>
                                                );
                                            }
                                        })} */}
                                    </ul>

                                    {filters.map((section) => (
                                        <Disclosure
                                            as="div"
                                            key={section.id}
                                            className="border-b-[1px] border-gray-200 px-4 py-6"
                                        >
                                            {({ open }) => (
                                                <>
                                                    <h3 className="-mx-2 -my-3 flow-root">
                                                        <Disclosure.Button className="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500">
                                                            <span className="font-medium text-gray-900">
                                                                {section.name}
                                                            </span>
                                                            <span className="ml-6 flex items-center">
                                                                {open ? (
                                                                    <MinusSmIcon
                                                                        className="h-5 w-5"
                                                                        aria-hidden="true"
                                                                    />
                                                                ) : (
                                                                    <PlusSmIcon
                                                                        className="h-5 w-5"
                                                                        aria-hidden="true"
                                                                    />
                                                                )}
                                                            </span>
                                                        </Disclosure.Button>
                                                    </h3>
                                                    <Disclosure.Panel className="pt-6">
                                                        <div className="space-y-6">
                                                            {section.options.map((option, optionIdx) => (
                                                                <div key={option.value} className="flex items-center">
                                                                    <input
                                                                        id={`filter-mobile-${section.id}-${optionIdx}`}
                                                                        name={`${section.id}[]`}
                                                                        defaultValue={option.value}
                                                                        type="checkbox"
                                                                        defaultChecked={option.checked}
                                                                        className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                                                        onChange={(event) =>
                                                                            handleFilterChange(event, section.name)
                                                                        }
                                                                    />
                                                                    <label
                                                                        htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                                                        className="ml-3 min-w-0 flex-1 text-gray-500"
                                                                    >
                                                                        {option.label}
                                                                    </label>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                    ))}
                                </form>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    );
}

export async function getStaticProps() {
    const { data: dataCategory } = await client.query({
        query: FETCH_CATEGORIES,
    });
    const { data: dataAuthor } = await client.query({ query: FETCH_AUTHORS });
    return {
        props: {
            categories: dataCategory.bookcategories.data,
            authors: dataAuthor.authors.data,
        },
    };
}
