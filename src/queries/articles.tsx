import gql from 'graphql-tag';

const FETCH_ARTICLES = gql`
    query {
        articles {
            data {
                id
                attributes {
                    title
                    content
                    image
                    published
                    slug
                }
            }
        }
    }
`;

export { FETCH_ARTICLES };
