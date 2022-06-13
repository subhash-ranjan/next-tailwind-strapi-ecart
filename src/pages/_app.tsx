import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { client, ApolloProvider } from '../lib/apollo';
import { AppContext, AppContextProvider } from '../contexts/AppContext';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ApolloProvider client={client}>
            <AppContextProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </AppContextProvider>
        </ApolloProvider>
    );
}

export default MyApp;
