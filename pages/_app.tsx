import Layout from '@components/Layout/Layout'
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {

    //Providers - Context/Providers, Theme, data
    //Layout
    //props adicionales
    return (
    <Layout>
        <Component {...pageProps} />
    </Layout>
    )
}