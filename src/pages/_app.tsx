import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
            <Component {...pageProps} />
    );
}

export default MyApp;