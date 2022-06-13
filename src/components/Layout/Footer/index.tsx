import React, { useRef, useContext } from 'react'
import { ArrowUpIcon, MailIcon } from '@heroicons/react/solid'
import { AppContext } from '../../../contexts/AppContext'
import Image from 'next/image'
import GithubIcon from '/public/vercel.svg'

const Index = () => {
	const { state, dispatch } = useContext(AppContext)
	if (typeof window !== 'undefined')
		window.onscroll = function () {
			scrollFunction()
		}

	const myRef = React.useRef<HTMLDivElement | null>(null)

	const scrollFunction = () => {
		if (myRef.current) {
			if (
				document.documentElement.scrollTop > 100 &&
				myRef.current.classList.contains('hidden')
			) {
				myRef.current.classList.remove('hidden')
				myRef.current.classList.add('fixed')
				dispatch({ type: 'IS_SCROLLED', payload: true })
			}

			if (
				document.documentElement.scrollTop < 100 &&
				myRef.current.classList.contains('fixed')
			) {
				myRef.current.classList.remove('fixed')
				myRef.current.classList.add('hidden')
				dispatch({ type: 'IS_SCROLLED', payload: false })
			}
		}
	}

	const scrollTop = () => {
		if (typeof window !== 'undefined') window.scrollTo(0, 0)
	}

	return (
		<div className='bg-secondary flex-col-center-center h-28 w-full '>
			<div
				ref={myRef}
				className='bottom-5 right-5 hidden h-10 w-10 cursor-pointer rounded-full bg-red-500 p-3 opacity-70 lg:bottom-7 lg:right-7'
				onClick={() => {
					scrollTop()
				}}>
				<ArrowUpIcon className='fill-white' />
			</div>

			<div className='flex w-12 flex-row items-center justify-between'>
				<a
					target='_blank'
					rel='noreferrer'
					href='https://www.github.com/subhash-ranjan'>
					<div className={` cursor-pointer `}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='20'
							height='20'
							fill='white'
							viewBox='0 0 16 16'>
							<path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z' />
						</svg>
					</div>
				</a>
				{/* <MailIcon className='h-6 w-6 fill-white cursor-pointer ' /> */}
			</div>

			<span className='my-1 text-sm text-gray-400'>
				{' '}
				Copyright - S.R. | All Rights Reserved
			</span>
		</div>
	)
}

export default Index
