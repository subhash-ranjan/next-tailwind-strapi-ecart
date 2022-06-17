export type CategoryType = {
	id: number
	attributes: {
		title: string
		name: string
		published: string
		image: string
		books: {
			data: BookType[]
		}
	}
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
		author: {
			data: {
				attributes: {
					name: string
				}
			}
		}
	}
}
