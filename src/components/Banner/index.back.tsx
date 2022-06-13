import React, { useContext } from 'react'
import Button from '../UI/Button'
import { ArrowDownIcon } from '@heroicons/react/solid'
import Image from "next/image";

const Index = () => {

    return (
        <div id='dv-home' className={`bg-dark fillter backdrop-brightness-50 bg-opacity-5 w-full min-h-[60vh] h-[100vh] p-14`}
        >
            <div className={`absolute z-10 top-10 right-20 h-[100px] w-[300px] dot-bg-small opacity-30`}>
            </div>
            <div className={`h-auto flex-row-between-center space-x-[4px]`} >
                <div className={`h-full bg-gray-800`} >
                    <Image
                        src={`/books/book-31.jpg`}
                        alt=""
                        height={400}
                        width={700}
                        objectFit='cover'
                    />
                </div>
                <div className={`h-full space-y-[4px]`}>
                    <div
                        className={`flex-col-center-center group transform transition duration-500 hover:scale-105 `}
                    >
                        <Image
                            src={`/books/book-36.jpg`}
                            alt=""
                            height={200}
                            width={350}
                        />
                    </div>
                    <div
                        className={`flex-col-center-center group transform transition duration-500 hover:scale-105 `}
                    >
                        <Image
                            src={`/books/book-35.jpg`}
                            alt=""
                            height={200}
                            width={350}
                        />
                    </div>
                </div>
            </div>


        </div>

    )
}

export default Index