import React, { useEffect } from 'react'
import gql from 'graphql-tag'
import { FETCH_ARTICLES } from '../../queries/articles'
import { useQuery } from '@apollo/client'
import { ArticleType, ArticleItemType } from '../../types/book'
import { myConfig } from '../../lib/config'

const url = `${myConfig.API_URL}/api/articles`

const AtricleDetail = ({
	image,
	title,
	published,
	content,
}: ArticleItemType) => {
	useEffect(() => {}, [])

	return (
		<div className=' bg-primary flex-col-start-center lg:py-34 flex min-h-[100vh] w-full px-5 py-32 md:px-20 lg:px-20 '>
			<span className='text-bold mb-1 text-3xl text-gray-200'>{title}</span>
			<span className='text-bold mb-16 text-sm text-gray-300'>{published}</span>

			<img src={`/article/${image}.jpeg`} className='w-full' />

			<p className='py-20 px-5 text-lg text-gray-100 '>{content}</p>
		</div>
	)
}

export default AtricleDetail

export const getStaticPaths = async () => {
	const resp = await fetch(url).then(res => res.json())

	const pths = resp?.data?.map((item: ArticleType) => {
		return {
			params: { id: item.id, slug: item.attributes.slug },
		}
	})

	return {
		paths: pths,
		fallback: false,
	}
}

export const getStaticProps = async (context: any) => {
	const uri = `${url}?filters\[slug\][$eq]=${context.params.slug}`
	const resp = await fetch(uri).then(res => res.json())
	const info = resp.data[0].attributes
	return {
		props: {
			image: info.image,
			title: info.title,
			published: info.published,
			content: info.content,
		},
	}
}
