import "@/styles/globals.css"
import type { AppProps } from "next/app"
import Navbar from "@/components/Navbar"
import { AnimatePresence } from "framer-motion"

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <div className="bg-stone-950 text-white overflow-x-hidden">
        <main className="w-screen min-h-screen grid grid-flow-col-dense grid-cols-3">
          <div className="">
            <div className="fixed left-0 top-[50%] -translate-y-1/2">
              <Navbar />
            </div>
          </div>
          <AnimatePresence initial={false}>
            <Component key={router.pathname} {...pageProps} />
          </AnimatePresence>
          <div></div>
        </main>
      </div>
    </>
  )
}
