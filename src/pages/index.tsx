import type { NextPage } from 'next'
import Banner from '../components/Banner'
import Contact from '../components/Contact'
import Books from '../components/Books'
import { myConfig } from '../lib/config'

const Home = ({
	dataCategory,
	dataBooks,
}: {
	dataCategory: any
	dataBooks: any
}) => {
	return (
		<div className='h-full'>
			<Banner data={dataCategory} />
			<Books data={dataBooks} />
			<Contact />
		</div>
	)
}

export async function getStaticProps() {
	const respCategory = await fetch(
		`${myConfig.API_URL}/api/bookcategories?populate=*`
	)
	const dataCategory = await respCategory.json()

	//fetch books
	const respBooks = await fetch(`${myConfig.API_URL}/api/books`)
	const dataBooks = await respBooks.json()
	return {
		props: {
			dataCategory,
			dataBooks,
		},
	}
}

export default Home
