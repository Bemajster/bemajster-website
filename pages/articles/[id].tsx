import { motion as m } from "framer-motion"
import Head from "next/head"
import { BN } from "@/global/fonts"

export default function Article() {
  return (
    <div>
      <Head>
        <title>Bemajster - The Name Of The Rose is epic.</title>
      </Head>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full h-full flex flex-col p-5 pt-20"
      >
        <div className={BN.className}>
          <h1 className="text-5xl">The Name Of The Rose is epic.</h1>
          <div className="text-stone-400">06.05.2023, Bemajster</div>
        </div>
      </m.div>
    </div>
  )
}
