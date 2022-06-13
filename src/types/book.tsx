export type CategoryType = {
	id: number
	title: string
	published: string
}

export type BookType = {
	id: number
	attributes: {
		id: number
		title: string
		pages: number
		price: number
		desc: string
		published: string
		image: string
	}
}

export type BookListType = {
	books: BookType[]
}
