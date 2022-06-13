import gql from 'graphql-tag';

const FETCH_PORTFOLIOS = gql`
    query {
        portfolios {
            data {
                attributes {
                    title
                    type
                    github
                    link
                    image
                    stack
                    description
                }
            }
        }
    }
`;

export { FETCH_PORTFOLIOS };
