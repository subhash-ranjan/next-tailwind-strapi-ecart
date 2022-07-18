import { StarIcon } from '@heroicons/react/solid';
import React from 'react';
import { ReviewType } from '../../../../types/book';

const index = (reviews?: { reviews: ReviewType[] }) => {
    let rating = 0,
        count_5 = 0,
        count_4 = 0,
        count_3 = 0,
        count_2 = 0,
        count_1 = 0,
        percent_5 = 0,
        percent_4 = 0,
        percent_3 = 0,
        percent_2 = 0,
        percent_1 = 0,
        avgrating = 0,
        ratingcount = 0;
    if (reviews && reviews.reviews?.length > 0) {
        reviews.reviews.map((item, index) => {
            if (item.attributes.rating) {
                if (item.attributes.rating == 5) count_5++;
                if (item.attributes.rating == 4) count_4++;
                if (item.attributes.rating == 3) count_3++;
                if (item.attributes.rating == 2) count_2++;
                if (item.attributes.rating == 1) count_1++;

                rating = rating + item.attributes.rating;
                ratingcount++;
            }
        });
        avgrating = parseFloat((rating / ratingcount).toFixed(1));
        percent_5 = Math.ceil((count_5 / ratingcount) * 100);
        percent_4 = Math.ceil((count_4 / ratingcount) * 100);
        percent_3 = Math.ceil((count_3 / ratingcount) * 100);
        percent_2 = Math.ceil((count_2 / ratingcount) * 100);
        percent_1 = Math.ceil((count_1 / ratingcount) * 100);
    }

    return (
        <div className={`size-full`}>
            <div className="flex-row-start-center mb-3">
                <StarIcon className="h-6 w-6 fill-amber-400 mr-[1px]" aria-hidden="true" />
                <p className="ml-2 text-base font-medium text-gray-900 mr-5">{avgrating}</p>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{ratingcount} ratings</p>
            </div>

            {Array.from([5, 4, 3, 2, 1]).map((item, index) => {
                let currentItem = 0;
                switch (item) {
                    case 5:
                        currentItem = percent_5;
                        break;
                    case 4:
                        currentItem = percent_4;
                        break;
                    case 3:
                        currentItem = percent_3;
                        break;
                    case 2:
                        currentItem = percent_2;
                        break;
                    case 1:
                        currentItem = percent_1;
                        break;

                    default:
                        break;
                }

                let width = `w-[${currentItem}%]`;

                return (
                    <div className="flex items-center mt-4 w-full">
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-500">{item} star</span>
                        <div className="w-2/4 h-5 mx-4 rounded bg-gray-700">
                            {currentItem > 0 && <div className={`h-5 bg-yellow-400 rounded ${width}`}></div>}
                        </div>
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-500">{currentItem}%</span>
                    </div>
                );
            })}
        </div>
    );
};
const style = {
    textColorPrimary: `text-red-500`,
};
export default index;
