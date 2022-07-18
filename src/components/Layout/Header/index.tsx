import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AppContext } from '../../../contexts/AppContext';
import { MenuIcon, XIcon, BookOpenIcon, ShoppingCartIcon, LoginIcon } from '@heroicons/react/solid';
import Cart from '../../UI/Cart/cart';

const Index = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const { state, dispatch } = useContext(AppContext);
    const [count, setCount] = useState(0);
    const router = useRouter();
    const scrollTop = () => {
        if (typeof window !== 'undefined') window.scrollTo(0, 0);
    };

    useEffect(() => {
        setCount(state.cart ? state.cart.length : 0);
    }, [state]);

    return (
        <nav className={`inset-0 h-[10vh] w-full  fixed z-20 ${state?.isScrolled ? 'bg-primary' : 'bg-primary'} `}>
            <div className="mx-auto h-full max-w-7xl sm:px-6 lg:px-8">
                <div className="flex-row-center-center relative h-full">
                    <div className=" flex h-full flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <a href="/" className="flex-col-center-center">
                            <div className="flex-shrink-0  cursor-pointer flex-col-center-center ">
                                <BookOpenIcon className="h-8 w-8 md:h-10 md:w-10 lg:h-8 lg:w-8 fill-gray-200 border-[1px] p-[3px] rounded-sm" />
                            </div>
                        </a>
                    </div>

                    <div className="flex-row-center-center absolute inset-y-0 right-0 h-full pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div className=" sm:ml-6 sm:block">
                            <div className="flex-row-center-center h-full space-x-4">
                                <button
                                    className={`border-b-[2px] border-transparent 
                                    px-3 py-2 text-sm font-medium text-white
                                   cursor-pointer relative`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        dispatch({
                                            type: 'CART_OPEN',
                                            payload: true,
                                        });
                                    }}
                                >
                                    <>
                                        <ShoppingCartIcon className="h-8 w-8 md:h-10 md:w-10 lg:h-8 lg:w-8 fill-gray-200 hover:fill-white" />
                                        <span className="absolute right-2 top-[1px] rounded-full bg-indigo-600 w-[18px] h-[18px] top right p-0 m-0 text-white font-mono text-xs font-semibold leading-tight text-center flex-col-center-center">
                                            {count}
                                        </span>
                                    </>
                                </button>

                                {/* <a
									href='#dv-contact'
									className={`border-b-[2px] border-transparent px-3 py-2 text-sm
                                   font-medium text-white hover:border-gradient-menu
                                    `}>
									<LoginIcon className='h-6 w-6 fill-gray-200' />
								</a> */}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile menu, show/hide based on menu state.  */}
                <div className={`${menuVisible ? 'flex' : 'hidden'} bg-gray-900 absolute w-full z-30`} id="mobile-menu">
                    <div className="w-full p-3">
                        <a
                            href="#dv-contact"
                            onClick={() => {
                                setMenuVisible(false);
                            }}
                            className="block w-full rounded-md px-3 py-2 text-base font-medium text-white hover:text-white"
                        >
                            ShoppingCartIcon
                        </a>
                    </div>
                </div>

                <Cart />
            </div>
        </nav>
    );
};

export default Index;
