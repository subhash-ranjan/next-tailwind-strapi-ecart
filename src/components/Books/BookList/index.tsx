import React from 'react'
import { CategoryType } from '../../../types/book'
import BookCard from '../BookCard'
import { ChevronRightIcon } from '@heroicons/react/solid'

const index = ({ category }: { category: CategoryType }) => {
	return (
		<div className='flex-col-center-center h-[70vh]'>
			<div className='w-full flex-row-between-center mb-5'>
				<div className='text-2xl text-gradient-custom capitalize'>
					{category.attributes.name}
				</div>
				<div>
					<a
						href={``}
						className={`w-full flex-row-center-center cursor-pointer`}>
						<>
							<span
								className={`text-gradient-custom border-gradient-menu !border-b mr-1 text-left text-base`}>
								Read More
							</span>
							<ChevronRightIcon className={`h-5 w-5  fill-black`} />
						</>
					</a>
				</div>
			</div>
			<div className='w-full flex-row-between-center'>
				{category.attributes.books.data.slice(0, 5).map((item, index) => {
					return <BookCard key={index} book={item} />
				})}
			</div>
		</div>
	)
}

export default index
