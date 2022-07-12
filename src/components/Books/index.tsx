import React from 'react';
import BookList from './BookList';
import { CategoryType } from '../../types/book';

const index = ({ data }: { data: CategoryType[] }) => {
    // const lstCategory = data?.filter((x: any) => {
    // 	if (x.id == 5 || x.id == 3) return x as CategoryType
    // })

    return (
        <div className={`${Style.pageContainer}`}>
            {data?.length > 0 &&
                Array.from(data.splice(0, 5)).map((item, index) => {
                    return <BookList key={index} category={item} />;
                })}
        </div>
    );
};
const Style = {
    pageContainer: `px-5 md:px-10 lg:px-20 py-20 md:py-32 lg:py-36`,
};
export default index;
