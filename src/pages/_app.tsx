import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { client, ApolloProvider } from '../lib/apollo';
import { AppContext, AppContextProvider } from '../contexts/AppContext';
import Layout from '../components/Layout';
import { LoaderCircle } from '../svgs';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(router.route == '' || router.route == '/' ? true : false);

    useEffect(() => {
        if (loading) setLoading(false);
    }, []);

    return (
        <>
            {loading ? (
                <div className="h-[100vh] w-[100vw] bg-slate-900 flex-row-center-center">
                    <LoaderCircle classes="fill-white" height="60" width="60" />
                </div>
            ) : (
                <ApolloProvider client={client}>
                    <AppContextProvider>
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    </AppContextProvider>
                </ApolloProvider>
            )}
        </>
    );
}

export default MyApp;
