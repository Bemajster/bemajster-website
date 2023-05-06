import Head from "next/head"
import { BN } from "@/global/fonts"
import { motion as m } from "framer-motion"
import { getSortedPostsData } from "@/lib/posts"

export default function Articles() {
  return (
    <div>
      <Head>
        <title>Bemajster - Articles</title>
      </Head>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full h-full flex flex-col p-5 pt-20"
      >
        <h1 className="text-5xl text-center">
          <span className={BN.className}>Articles</span>
        </h1>
        <ul className="list-disc"></ul>
      </m.div>
    </div>
  )
}
