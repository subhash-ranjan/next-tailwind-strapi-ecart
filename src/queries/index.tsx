import gql from 'graphql-tag'

const FETCH_BOOKS = gql`
	query {
		books {
			data {
				attributes {
					title
					author {
						data {
							id
							attributes {
								name
							}
						}
					}
				}
			}
		}
	}
`

const FETCH_CATEGORIES = gql`
	query {
		bookcategories {
			data {
				id
				attributes {
					image
					name
					books {
						data {
							attributes {
								image
								title
								pages
								price
								published
								author {
									data {
										attributes {
											name
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
`

export { FETCH_BOOKS, FETCH_CATEGORIES }
