import React from 'react'
import { BookType, BookListType } from '../../../types/book'
import BookCard from '../BookCard'

const index = ({ books }: { books: BookType[] }) => {
	return (
		<div className='flex-row-start-start'>
			{books.slice(0, 5).map((item, index) => {
				return <BookCard key={index} book={item} />
			})}
		</div>
	)
}

export default index
