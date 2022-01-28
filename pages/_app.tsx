import '../public/styles.css'

import dynamic from 'next/dynamic'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Layout from '../components/layouts'

const TopProgressBar = dynamic(
  () => {
    return import("@a/components/TopProgressBar");
  },
  { ssr: false },
);

function MyApp({ Component, pageProps, router  }: AppProps) {
  return (
    
    <ThemeProvider attribute="class">
    <TopProgressBar />
      <Layout>
          <Component {...pageProps} key={router.route}/>
      </Layout>
    </ThemeProvider>
   )
}

export default MyApp
