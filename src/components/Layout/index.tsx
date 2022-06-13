import React, { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import dynamic from 'next/dynamic'
import type { AppProps } from 'next/app'

// const Footer = dynamic(() => import('./Footer'))

type Props = {
	children?: ReactNode
	title?: string
}

const Layout = ({ children }: Props) => {
	return (
		<div className='h-full m-0 w-full p-0'>
			<Header />
			<main className='pt-[10vh]'>{children}</main>
			<Footer />
			{/* <LazyLoad once height={200} offset={200} placeholder={<div className={s.footerPlaceholder} />}>
                {!isGps && <Footer />}
            </LazyLoad>
            {sideMenuOpen && !isGps && <SideMenu setSideMenuOpen={setSideMenuOpen} />} */}
		</div>
	)
}

export default Layout
