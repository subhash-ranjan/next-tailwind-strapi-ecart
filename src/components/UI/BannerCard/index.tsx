import React from 'react'
import Image from 'next/image'
import { ChevronRightIcon } from '@heroicons/react/solid'

const index = ({
	width,
	height,
	top,
	left,
	url,
	text,
	orientation,
	styleText,
	styletextBox,
	styleConatiner,
	styleImage,
}: {
	top?: number
	left?: number
	width: number
	height: number
	url: string
	text: string
	orientation?: string
	styleText: string
	styletextBox: string
	styleConatiner: string
	styleImage: string
}) => {
	return (
		<div
			className={`${styleConatiner} w-full lg:w-[12rem]  bg-red-300 border-[1px] border-white`}>
			<div className={`${styletextBox} p-2`}>
				<span className={styleText}>{text}</span>
				<a href={``} className={`w-full flex-row-center-center cursor-pointer`}>
					<>
						<span
							className={`text-white border-gradient-menu !border-b mr-1 text-left text-base`}>
							Read More
						</span>
						<ChevronRightIcon className={`h-5 w-5  fill-white`} />
					</>
				</a>
			</div>
			{/* <div
				className={`bg-gray-400 h-[200px] w-[200px] md:w-[200px] lg:w-[200px] absolute top-0 left-0`}>
			</div> */}
			<Image src={url} alt='books' layout='fill' objectFit='cover' />
		</div>
	)
}

export default index
