import '../public/styles.css'
import 'nprogress/nprogress.css'

import dynamic from 'next/dynamic'
import { ThemeProvider } from 'next-themes'
import { motion, AnimatePresence } from "framer-motion";
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
      <AnimatePresence exitBeforeEnter>
        <motion.div
              key={router.pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
          <Component {...pageProps} key={router.route}/>
        </motion.div>
      </AnimatePresence>
      </Layout>
    </ThemeProvider>
   )
}

export default MyApp
