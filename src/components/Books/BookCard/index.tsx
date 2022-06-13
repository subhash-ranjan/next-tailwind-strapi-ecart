import React from 'react'
import { BookType } from '../../../types/book'
import Image from 'next/image'

const index = ({ book }: { book: BookType }) => {
	const url = `/books/${book.attributes.image}.jpg`
	return (
		<div className={`relative p-2 m-2 w-[100px] h-[200px]`}>
			<Image src={url} alt='books' layout='fill' objectFit='cover' />
		</div>
	)
}

export default index
