import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import RootLayout from '../app/components/RootLayout'; // Ensure the path to RootLayout is correct

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <RootLayout>
            <Component {...pageProps} />
        </RootLayout>
    );
}

export default MyApp;
