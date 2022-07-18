// import { gql } from "@apollo/client";
import gql from 'graphql-tag';

const FETCH_BOOKS = gql`
    query Books($title: String, $bookcategory: [ID], $author: [ID], $sort: String, $page: Int, $pageSize: Int) {
        books(
            filters: {
                title: { containsi: $title }
                bookcategory: { id: { in: $bookcategory } }
                author: { id: { in: $author } }
            }
            sort: [$sort]
            pagination: { page: $page, pageSize: $pageSize }
        ) {
            data {
                id
                attributes {
                    title
                    imgurl
                    pages
                    price
                    publish_date
                    rating
                    slug
                    bookcategory {
                        data {
                            id
                            attributes {
                                name
                            }
                        }
                    }
                    author {
                        data {
                            id
                            attributes {
                                name
                            }
                        }
                    }
                    bookreviews {
                        data {
                            id
                            attributes {
                                review
                                updatedAt
                                rating
                                username
                            }
                        }
                    }
                }
            }
            meta {
                pagination {
                    page
                    pageSize
                    total
                    pageCount
                }
            }
        }
    }
`;

const FETCH_CATEGORIES = gql`
    query {
        bookcategories(sort: ["priority:asc"]) {
            data {
                id
                attributes {
                    imgurl
                    name
                    priority
                    books {
                        data {
                            id
                            attributes {
                                title
                                pages
                                price
                                publish_date
                                imgurl
                                rating
                                slug
                                author {
                                    data {
                                        attributes {
                                            name
                                        }
                                    }
                                }
                                bookreviews {
                                    data {
                                        attributes {
                                            rating
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
`;

const FETCH_AUTHORS = gql`
    query {
        authors(pagination: { page: 1, pageSize: 100 }) {
            data {
                id
                attributes {
                    name
                }
            }
        }
    }
`;

export { FETCH_BOOKS, FETCH_CATEGORIES, FETCH_AUTHORS };
