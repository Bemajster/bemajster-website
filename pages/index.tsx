import { BN } from "@/global/fonts"
import Head from "next/head"
import Navbar from "@/components/Navbar"
import { motion as m } from "framer-motion"

export default function Home() {
  return (
    <>
      <Head>
        <title>Bemajster.</title>
      </Head>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="h-full w-full flex justify-center items-center content-center text-center align-middle"
      >
        <div className="flex text-9xl select-none">
          <span className={BN.className}>Bemajster.</span>
        </div>
      </m.div>
    </>
  )
}
