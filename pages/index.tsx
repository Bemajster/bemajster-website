import { BN } from "@/global/fonts"
import Head from "next/head"
import Navbar from "@/components/Navbar"

export default function Home() {
  return (
    <>
      <Head>
        <title>Bemajster.</title>
      </Head>
      <main className="w-screen h-screen grid grid-flow-col grid-cols-3 overflow-hidden">
        <Navbar />
        <div className="h-full w-full flex justify-center items-center content-center text-center align-middle">
          <div className="flex text-9xl select-none">
            <span className={BN.className}>Bemajster.</span>
          </div>
        </div>
        <div className="h-full w-full hidden xl:block"></div>
      </main>
    </>
  )
}
