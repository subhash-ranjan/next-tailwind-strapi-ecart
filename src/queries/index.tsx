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
                attributes {
                    title
                    imgurl
                    pages
                    price
                    publish_date
                    rating
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
