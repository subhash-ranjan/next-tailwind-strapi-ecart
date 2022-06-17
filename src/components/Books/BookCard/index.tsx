import React from 'react'
import { BookType } from '../../../types/book'
import Image from 'next/image'
import { ChevronRightIcon } from '@heroicons/react/solid'

const index = ({ book }: { book: BookType }) => {
	const url = `/books/${book.attributes.image}.jpg`
	return (
		<div className='flex-col-center-center'>
			<div className={`relative w-[15vw] h-[260px] pb-10`}>
				<Image src={url} alt='books' layout='fill' objectFit='cover' />
			</div>
			<div className='w-full  mt-4 flex-col-start-center'>
				<p className='text-base font-medium text-gray-900'>
					{book.attributes.title}
				</p>
				<p className='text-sm font-medium text-gray-900'>
					{book.attributes.author.data.attributes.name}
				</p>
				<p className='text-sm font-medium text-gray-900'>
					${book.attributes.price}
				</p>

				<a href={``} className={`w-full flex-row-center-center cursor-pointer`}>
					<>
						<span
							className={`text-gradient-custom border-gradient-menu !border-b mr-1 text-left text-base capitalize`}>
							Check details
						</span>
						<ChevronRightIcon className={`h-5 w-5  fill-black`} />
					</>
				</a>
			</div>
		</div>
	)
}

export default index
