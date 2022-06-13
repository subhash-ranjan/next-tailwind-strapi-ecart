import gql from 'graphql-tag';

const FETCH_SERVICES = gql`
    query {
        services {
            data {
                attributes {
                    name
                    skills
                }
            }
        }
    }
`;

export { FETCH_SERVICES };
