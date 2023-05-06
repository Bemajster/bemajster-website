import "@/styles/globals.css"
import type { AppProps } from "next/app"
import Navbar from "@/components/Navbar"
import { AnimatePresence } from "framer-motion"

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <div className="bg-blue-950 text-white">
      <main className="w-screen h-screen grid grid-flow-col-dense grid-cols-3 overflow-hidden">
        <Navbar />
        <AnimatePresence initial={false}>
          <Component key={router.pathname} {...pageProps} />
        </AnimatePresence>
        <div></div>
      </main>
    </div>
  )
}
