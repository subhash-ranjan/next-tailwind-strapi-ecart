import React, { useContext, useState, useEffect } from 'react'
import Button from '../UI/Button'
import { ArrowDownIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import BannerCard from '../UI/BannerCard'
import { from } from '@apollo/client'
import { CategoryType } from '../../types/book'

const Index = ({ data }: { data: CategoryType[] }) => {
	const lstCategory = data
	let index = 0
	return (
		<div
			id='dv-home'
			className={`bg-slate-100  min-h-[100vh] size-full flex-col-reverse-end-center lg:flex-row-center-start px-5 py-8 lg:px-10`}>
			<div className='h-full lg:min-h-[80vh] min-w-[40vw] w-[50%]  flex-col-center-center p-5'>
				<span className='text-3xl text-gradient-custom mb-10'>
					Read, discover, set goals. All in one platform.
				</span>
				<a href=''>
					<Button
						text='view all'
						isCapital={true}
						style={'w-48 py-4 '}
						styleText={'text-black'}
						isText={true}
						showArrow={true}
					/>
				</a>
			</div>
			<div className='size-full lg:min-h-[80vh] grid-col-2 lg:flex-row-center-center'>
				{Array.from([1, 2, 3]).map((item, index1) => {
					return (
						<div
							key={index1}
							className='flex grid-rows-2 lg:flex-col-center-center'>
							{Array.from([1, 2]).map((item, index2) => {
								const height =
									[1, 2, 5].indexOf(index) >= 0
										? 'h-[32vmin] lg:h-[28vmin]'
										: 'h-[32vmin] lg:h-[40vmin]'

								const url = `/books/${lstCategory[index].attributes.image}.jpg`
								const category = lstCategory[index].attributes.title
								index++
								return (
									<BannerCard
										key={index}
										url={url}
										width={0}
										height={0}
										orientation='col'
										// ${index == 3 ? 'rotate-3' : ''}
										styleConatiner={`relative ${height} flex-row-start-start `}
										styletextBox='absolute bg-primary left-0 bottom-0 w-full h-[100%] flex-col-center-center z-10'
										styleText={`text-white text-sm font-bold text-center whitespace-normal font-mono uppercase`}
										styleImage={'absolute opacity-50  left-0 bottom-0'}
										text={category}
									/>
								)
							})}
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Index
