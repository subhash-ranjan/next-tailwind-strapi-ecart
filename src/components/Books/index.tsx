import React from 'react'
import BookList from './BookList'

const index = ({ data }: { data: any }) => {
	return (
		<div>
			{data.data?.length > 0 &&
				Array.from([1, 2]).map((item, index) => {
					return <BookList key={index} books={data.data} />
				})}
		</div>
	)
}

export default index
