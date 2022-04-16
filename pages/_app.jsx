import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import NextNProgress from "nextjs-progressbar";
import ScrollToTopBtn from '../utils/scrollToTopBtn';
function MyApp({ Component, pageProps }) {
  return (
    <>
        <NextNProgress color="#8326d4" options={{ showSpinner: false }} />
        <Header/>
        <main className='pt-20 dark:bg-secondary min-h-[200vh] transition-colors' >
            <Component {...pageProps} />
        </main>
        <ScrollToTopBtn/>
        <Footer/>
    </>
  )
}

export default MyApp
