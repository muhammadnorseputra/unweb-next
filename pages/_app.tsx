import '../public/styles.css'

import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Layout from '../components/layouts'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
   )
}

export default MyApp
