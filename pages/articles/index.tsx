import Head from "next/head"
import { BN } from "@/global/fonts"
import { motion as m } from "framer-motion"

export default function Articles() {
  return (
    <div>
      <Head>
        <title>Bemajster - Articles</title>
      </Head>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full h-full flex flex-col text-center p-5 pt-20"
      >
        <h1 className="text-5xl">
          <span className={BN.className}>Articles</span>
        </h1>
        <div className="text-start p-5"></div>
      </m.div>
    </div>
  )
}
