import React from 'react'
import BookList from './BookList'
import { CategoryType } from '../../types/book'

const index = ({ data }: { data: CategoryType[] }) => {
	const lstCategory = data?.filter((x: any) => {
		if (x.id == 5 || x.id == 3) return x as CategoryType
	})

	return (
		<div className='lg:p-20'>
			{data?.length > 0 &&
				Array.from(lstCategory).map((item, index) => {
					return <BookList key={index} category={item} />
				})}
		</div>
	)
}

export default index
