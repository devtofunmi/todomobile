import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Choose weights you use
  variable: '--font-poppins',
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
