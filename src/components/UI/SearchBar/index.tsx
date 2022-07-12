import React from 'react';
import { SearchIcon } from '@heroicons/react/solid';

type SearchBarType = {
    test?: string;
    onChangeHandler: (a: string, isSearch: boolean) => void;
};

const index = (props: SearchBarType) => {
    const [searchtext, setText] = React.useState('');

    const handleChange = (text: string) => {
        console.log('close clicked');
        console.log(text);
        console.log(text.length);

        if (/^[A-Za-z]+$/.test(text) || text.length == 0) {
            setText(text);
            props.onChangeHandler(text, false);
        }
    };

    const handleSearch = () => {
        props.onChangeHandler(searchtext, true);
    };

    return (
        <div className="flex justify-center md:mr-10 w-full md:w-2/3 lg:w-1/2">
            <div className="relative flex-row-center-center w-full rounded-sm">
                <input
                    type="search"
                    className="relative flex-auto min-w-0 m-0 pr-10
                    block w-full px-3 py-1.5 text-base font-normal text-gray-700 
                    bg-white bg-clip-padding border border-solid border-gray-300 rounded 
                    transition ease-in-out 
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="button-addon2"
                    onChange={(event) => handleChange(event.target.value)}
                    value={searchtext}
                />
                <span
                    onClick={() => {
                        handleSearch();
                    }}
                    className="absolute right-1"
                >
                    <SearchIcon className="h-6 w-6 fill-gray-500   cursor-pointer" />
                </span>
            </div>
        </div>
    );
};

export default index;
