import { useEffect } from 'react'
import { useRouter } from 'next/router'
import NextNProgress from "nextjs-progressbar";
import Header from '../components/partials/Header'
import Footer from '../components/partials/Footer'
import ScrollToTopBtn from '../utils/scrollToTopBtn';
import Seo from '../utils/Seo';
import '../styles/globals.css'
function MyApp({ Component, pageProps }) {

  const router = useRouter()

	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		})
	}, [router.pathname])

  return (
    <>
        <NextNProgress color="#8326d4" options={{ showSpinner: false }} />
        <Seo/>
        <Header/>
        <main className='py-5 px-5 bg-white dark:bg-slate-700 transition-all' >
          <div className='max-w-3xl mx-auto'>
            <Component {...pageProps} />
          </div>
        </main>
        <ScrollToTopBtn/>
        <Footer/>
    </>
  )
}

export default MyApp
