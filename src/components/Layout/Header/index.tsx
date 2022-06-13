import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AppContext } from '../../../contexts/AppContext';
import { MenuIcon, XIcon } from '@heroicons/react/solid';

const Index = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const { state, dispatch } = useContext(AppContext);
    // const [activeMenu, setActive] = useState(1)
    const router = useRouter();

    const scrollTop = () => {
        if (typeof window !== 'undefined') window.scrollTo(0, 0);
    };

    return (
			<nav
				className={`inset-0 h-[10vh] w-full  fixed z-20
                    ${state?.isScrolled ? 'bg-primary' : 'bg-primary'} 
                `}>
				<div className='mx-auto h-full max-w-7xl sm:px-6 lg:px-8'>
					<div className='flex-row-center-center relative h-full'>
						<div className='absolute inset-y-0 left-0 flex items-center px-2 sm:hidden'>
							{!menuVisible && (
								<button
									type='button'
									className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
									aria-controls='mobile-menu'
									aria-expanded='false'
									onClick={() => {
										setMenuVisible(true)
									}}>
									<MenuIcon className='h-6 w-6 fill-gray-200' />
								</button>
							)}
							{menuVisible && (
								<button
									type='button'
									className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
									aria-controls='mobile-menu'
									aria-expanded='false'
									onClick={() => {
										setMenuVisible(false)
									}}>
									<XIcon className='h-6 w-6 fill-gray-200' />
								</button>
							)}
						</div>

						<div className=' flex h-full flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
							<Link href='/'>
								<div className='flex-shrink-0  cursor-pointer flex-col-center-center'>
									<img
										src='/logo.png'
										alt='logo'
										className='h-11 object-contain rounded'
									/>
									{/* <span>S.R</span> */}
								</div>
							</Link>
						</div>

						<div className='flex-row-center-center absolute inset-y-0 right-0 h-full pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
							<div className='hidden sm:ml-6 sm:block'>
								<div className='flex-row-center-center h-full space-x-4'>
									<a
										href='#dv-home'
										className={`border-b-[2px] border-transparent px-3 py-2 text-sm
                                     font-medium text-white hover:border-gradient-menu
                                    `}>
										Home
									</a>
									<a
										href='#dv-service'
										className={`border-b-[2px] border-transparent px-3 py-2 text-sm
                                   font-medium text-white hover:border-gradient-menu
                                    `}>
										Services
									</a>
									<a
										href='#dv-portfolio'
										className={`border-b-[2px] border-transparent px-3 py-2 text-sm
                                        font-medium text-white hover:border-gradient-menu
                                    `}>
										Portfolios
									</a>
									<a
										href='#dv-article'
										className={`border-b-[2px] border-transparent px-3 py-2 text-sm
                                       font-medium text-white hover:border-gradient-menu
                                    `}>
										Articles
									</a>
									<a
										href='#dv-contact'
										className={`border-b-[2px] border-transparent px-3 py-2 text-sm
                                   font-medium text-white hover:border-gradient-menu
                                    `}>
										Contact
									</a>
								</div>
							</div>
						</div>
					</div>

					{/* Mobile menu, show/hide based on menu state.  */}
					<div
						className={`${
							menuVisible ? 'flex' : 'hidden'
						} bg-gray-900 absolute w-full z-30`}
						id='mobile-menu'>
						<div className='w-full p-3'>
							<a
								href='#dv-home'
								onClick={() => {
									setMenuVisible(false)
									scrollTop()
									return
								}}
								className=' block rounded-md px-3 py-2 text-base font-medium text-white'
								aria-current='page'>
								Home
							</a>

							<a
								href='#dv-service'
								onClick={() => {
									setMenuVisible(false)
								}}
								className='block w-full  rounded-md px-3 py-2 text-base font-medium text-white hover:text-white'>
								Services
							</a>

							<a
								href='#dv-portfolio'
								onClick={() => {
									setMenuVisible(false)
								}}
								className='block w-full rounded-md px-3 py-2 text-base font-medium text-white hover:text-white'>
								Portfolios
							</a>
							<a
								href='#dv-article'
								onClick={() => {
									setMenuVisible(false)
								}}
								className='block w-full rounded-md px-3 py-2 text-base font-medium text-white hover:text-white'>
								Articles
							</a>

							<a
								href='#dv-contact'
								onClick={() => {
									setMenuVisible(false)
								}}
								className='block w-full rounded-md px-3 py-2 text-base font-medium text-white hover:text-white'>
								Contact
							</a>
						</div>
					</div>
				</div>
			</nav>
		)
};

export default Index;
