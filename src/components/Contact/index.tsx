import React, { useRef, useState } from 'react'
import { CheckCircleIcon, MailIcon } from '@heroicons/react/solid'
import { useForm } from 'react-hook-form'
import Button from '../UI/Button'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Image from 'next/image'
import GithubIcon from '/public/vercel.svg'
import PageHeader from '../UI/PageHeader'

type FormType = {
	name: string
	email: string
	note: any
}

const schema = yup
	.object()
	.shape({
		name: yup.string().required().max(20),
		email: yup.string().email().required().max(50),
		note: yup
			.string()
			.matches(/^[\w\-\s]+$/)
			.required()
			.max(200)
			.min(10),
	})
	.required()

const Index = () => {
	const inputRef = useRef(null)
	const [isSubmit, setSubmit] = useState(false)
	const [name, setName] = useState('Name')
	const [email, setEmail] = useState('Email')
	const [note, setNote] = useState('Description')

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormType>({
		defaultValues: { name: '', email: '', note: '' },
		resolver: yupResolver(schema),
	})

	const onSubmit = (data: any, e: any) => {
		e.target.reset()
		window.setTimeout(function () {
			setSubmit(true)
		}, 2000)
		// window.setTimeout(function () { setSubmit(false) }, 5000);
	}
	const handleChange = (e: any) => {
		const patternNote = /^[ A-Za-z0-9_@./#&+-/\n/]*$/
		const patternName = /^[A-Za-z]+$/i

		if (e.target.name == 'name') {
			if (patternName.test(e.target.value)) setName(e.target.value)
		} else if (e.target.name == 'note') {
			if (patternNote.test(e.target.value)) setNote(e.target.value)
		} else if (e.target.name == 'note') {
			setEmail(e.target.value)
		}
	}

	return (
		<div
			id='dv-contact'
			className={`${Style.pageContainer} lg:py-34 bg-primary h-full min-h-[100vh] `}>
			<PageHeader
				header='Contact'
				styleheader='text-white'
				styleSubheader='text-xl-custom text-gray-300'
				subHeader='Get in touch'
			/>

			<div className={Style.contactBox}>
				{/* <div className={Style.formBox}>

                    {
                        isSubmit &&
                        <div className='h-80 flex flex-col items-center justify-center'>
                            <CheckCircleIcon className='h-10 w-10 fill-green-600 mb-5' />
                            <Text
                                text="Thanks for writing to me. I will get back to you shortly."
                                classes='text-sm text-center'
                                color='text-gray-200'
                                type='span'
                            />
                        </div>
                    }
                    {
                        !isSubmit &&

                        <form
                            className='h-80 w-full max-w-[500px] flex flex-col items-center justify-evenly lg:p-5'
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <input
                                className={`h-[40px] ${Style.inputForm} ${errors.name ? Style.errorBorder : Style.normalBorder} `}
                                {...register('name')}
                                maxLength={20}
                                placeholder='Name'
                                disabled
                            />

                            <input className={`h-[40px]  ${Style.inputForm} ${errors.email ? Style.errorBorder : Style.normalBorder} `}
                                {...register('email')}
                                maxLength={30}
                                placeholder='Email'
                                disabled
                            />

                            <textarea className={`h-[80px] ${Style.inputForm} ${errors.note ? Style.errorBorder : Style.normalBorder} `}
                                {...register('note')}
                                maxLength={200}
                                placeholder='Note'
                                disabled
                            ></textarea>

                            <input ref={inputRef} type="submit" className={`${Style.button} disabled`} disabled />
                        </form>
                    }
                </div> */}

				<div
					className={`${Style.textBox} mb-8 flex flex-col items-center justify-center align-middle md:mb-14 lg:m-0`}>
					<span
						className={`text-white text-xl  pb-1 mb-5 font-bold sm:text-center`}>
						I’d Love to Hear From You!
					</span>

					<p
						className={`font-base text-center text-gray-300 sm:text-center md:w-[70%]`}>
						I am just one click away to help you take your project or product
						from great to incredible. Write to me to share more details about
						your project.
					</p>
				</div>
				<div className={`${Style.formBox}`}>
					<div className={`flex-row-center-center lg:mb-2`}>
						<a
							href='mailto:name@rapidtables.com'
							className={`flex-row-center-center w-full py-5 text-gray-300`}>
							<Button
								text='Send Email'
								style={'w-60 py-3 h-12 bg-black bg-opacity-20'}
								showArrow={false}
								isCapital={false}
								isGithub={false}
								isText={true}
								styleText='ml-3 text-base font-normal'
								icon={<MailIcon className='h-5 w-5 fill-gray-200' />}
							/>
						</a>
					</div>

					<div className={` flex-row-center-center`}>
						<a
							target='_blank'
							rel='noreferrer'
							href='https://www.github.com/subhash-ranjan'
							className={`flex-row-center-center w-full py-5 text-gray-300`}>
							<Button
								text='Visit Github'
								style={'w-60 py-3 h-12 bg-black bg-opacity-20'}
								showArrow={false}
								isCapital={false}
								isGithub={false}
								isText={true}
								styleText='ml-3 text-base font-normal'
								icon={
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='18'
										height='18'
										fill='white'
										viewBox='0 0 16 16'>
										<path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z' />
									</svg>
								}
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

const Style = {
	pageContainer: `px-5 md:px-10 lg:px-20 py-20 md:py-32 lg:py-32`,
	contactBox: ` min-h-full flex flex-col lg:flex-row items-center justify-center p-5`,
	formBox:
		'w-full h-full min-h-80 flex flex-col items-center justify-center lg:border-l-[1px] border-zinc-700',
	textBox: `w-full h-full`,
	button: `w-full px-2 py-4 bg-red-500 text-white font-bold text-sm leading-tight uppercase shadow-md hover:bg-orange-400 hover:shadow-lg focus:bg-orange-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg
            transition duration-150 ease-in-out flex flex-column items-center justify-center `,
	inputForm: `w-full bg-transparent   border-[1px] focus:outline-none text-gray-300 p-2 text-sm disabled`,
	errorBorder: `border-opacity-100 border-red-600`,
	normalBorder: `border-opacity-50 border-zinc-400`,
	linkToBox: `h-16 w-full lg:w-[300px] border-[1px] border-zinc-600`,
}

export default Index
