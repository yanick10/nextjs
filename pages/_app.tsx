import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Navbar } from '../components/navbar'
import { Footer } from '../components/footer'
import "tailwindcss/tailwind.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (

    <Component {...pageProps} />

  )
}

export default MyApp
