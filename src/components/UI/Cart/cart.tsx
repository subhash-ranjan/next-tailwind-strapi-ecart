/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useContext, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { AppContext } from '../../../contexts/AppContext';
import Image from 'next/image';
import { CartItemType } from '../../../types/cart';
import { GetCartItems, RemoveCartItems } from '../../../lib/cartHandler';

const products = [
    {
        id: 1,
        name: 'Throwback Hip Bag',
        href: '#',
        color: 'Salmon',
        price: '$90.00',
        quantity: 1,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
        imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    },
    {
        id: 2,
        name: 'Medium Stuff Satchel',
        href: '#',
        color: 'Blue',
        price: '$32.00',
        quantity: 1,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
        imageAlt:
            'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    },
    // More products...
];

export default function Example() {
    const { state, dispatch } = useContext(AppContext);
    const [open, setOpen] = useState(false);
    let total = 0;
    useEffect(() => {
        setOpen(state.cartOpen ? state.cartOpen : false);
    }, [state.cartOpen]);

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog
                as="div"
                className="relative z-20"
                onClose={() => {
                    // e.prekventDefault();
                    dispatch({
                        type: 'CART_OPEN',
                        payload: false,
                    });
                }}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                        <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                                            <div className="flex items-start justify-between">
                                                <Dialog.Title className="text-lg font-medium text-gray-900">
                                                    {' '}
                                                    Shopping cart{' '}
                                                </Dialog.Title>
                                                <div className="ml-3 flex h-7 items-center">
                                                    <button
                                                        type="button"
                                                        className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            dispatch({
                                                                type: 'CART_OPEN',
                                                                payload: false,
                                                            });
                                                        }}
                                                    >
                                                        <span className="sr-only">Close panel</span>
                                                        <XIcon className="h-6 w-6" aria-hidden="true" />
                                                    </button>
                                                </div>
                                            </div>
                                            {/* products */}
                                            <div className="mt-8">
                                                <div className="flow-root">
                                                    <div
                                                        role="list"
                                                        className="-my-6 divide-y divide-gray-200 min-h-[200px] "
                                                    >
                                                        {state.cart?.map((product, index) => {
                                                            total += product.price;
                                                            return (
                                                                <div key={index} className="flex py-6">
                                                                    <div
                                                                        className="relative h-24 w-24 flex-shrink-0 
                                                                        overflow-hidden rounded-sm border border-gray-200"
                                                                    >
                                                                        <Image
                                                                            src={`/books/${product.image}`}
                                                                            alt="books"
                                                                            layout="fill"
                                                                            objectFit="cover"
                                                                        />
                                                                    </div>

                                                                    <div className="ml-4 flex flex-1 flex-col">
                                                                        <div>
                                                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                                                <h3>{product.title}</h3>
                                                                                <p className="ml-4">{product.price}</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex flex-1 items-end justify-between text-sm">
                                                                            <p className="text-gray-500">
                                                                                Qty {product.qty}
                                                                            </p>

                                                                            <div className="flex">
                                                                                <button
                                                                                    type="button"
                                                                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                                                                    onClick={() => {
                                                                                        const items = RemoveCartItems(
                                                                                            product.item
                                                                                        );
                                                                                        dispatch({
                                                                                            type: 'ADD_TO_CART',
                                                                                            payload: items,
                                                                                        });
                                                                                    }}
                                                                                >
                                                                                    Remove
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        })}
                                                        {/* {products.length == 0 && (
                                                            <div className="flex-row-center-center min-h-[100px]">
                                                                <span className="text-gray-800">No Items</span>
                                                            </div>
                                                        )} */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* checkout  */}
                                        <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                <p>Total</p>
                                                <p>${total}</p>
                                            </div>
                                            <p className="mt-0.5 text-sm text-gray-500">
                                                Shipping and taxes calculated at checkout.
                                            </p>
                                            <div className="mt-6">
                                                <a
                                                    href=""
                                                    className="flex items-center justify-center
                                                    rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base 
                                                    font-medium text-white shadow-sm hover:bg-indigo-700 
                                                    opacity-30  cursor-not-allowed"
                                                    onClick={(e) => e.preventDefault()}
                                                >
                                                    Checkout
                                                </a>
                                            </div>
                                            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                                <p>
                                                    or{' '}
                                                    <a
                                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                                        onClick={() => {
                                                            dispatch({
                                                                type: 'CART_OPEN',
                                                                payload: false,
                                                            });
                                                        }}
                                                        href="/books"
                                                    >
                                                        Continue Shopping
                                                        <span aria-hidden="true"> &rarr;</span>
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}
