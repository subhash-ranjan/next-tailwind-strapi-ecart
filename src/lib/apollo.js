import { useContext } from 'react';
import {
    ApolloClient,
    createHttpLink,
    InMemoryCache,
    ApolloProvider,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { myConfig } from './config';

const httpLink = createHttpLink({
    uri: `${myConfig.API_URL}/graphql`,
});
const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    // defaultOptions: {
    //   watchQuery: {
    //     fetchPolicy: 'no-cache',
    //     errorPolicy: 'ignore',
    //   },
    //   query: {
    //     fetchPolicy: 'no-cache',
    //     errorPolicy: 'all',
    //   },
    // },
});

export { client, ApolloProvider };
