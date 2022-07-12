import type { NextPage } from 'next';
import Banner from '../components/Banner';
import Contact from '../components/Contact';
import Books from '../components/Books';
import Categories from '../components/Categories';
import { myConfig } from '../lib/config';
import { client } from '../lib/apollo';
import { FETCH_BOOKS, FETCH_CATEGORIES } from '../queries';

const Home = ({ dataCategory, dataBooks }: { dataCategory: any; dataBooks: any }) => {
    return (
        <div className="h-full">
            <Banner data={dataCategory.bookcategories.data} />
            <Categories data={dataCategory.bookcategories.data} />
            <Books data={dataCategory.bookcategories.data} />
        </div>
    );
};

export async function getStaticProps() {
    // const respCategory = await fetch(
    // 	`${myConfig.API_URL}/api/bookcategories?populate=*`
    // )
    const { data: dataCategory } = await client.query({
        query: FETCH_CATEGORIES,
    });
    // const { data: dataBooks } = await client.query({ query: FETCH_BOOKS });
    return {
        props: {
            dataCategory,
            // dataBooks,
        },
    };
}

export default Home;
