import { BN } from "@/global/fonts"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>Bemajster.</title>
      </Head>
      <main className="bg-blue-950 text-white w-screen h-screen grid grid-flow-cols grid-cols-2 xl:grid-cols-3 overflow-hidden">
        <div className="h-full xl:w-full align-middle flex items-center xl:justify-start justify-end">
          <span className={BN.className}>
            <div
              className="flex flex-col text-5xl gap-4 pr-20 xl:pl-20 leading-relaxed hover:leading-loose 
                    hover:pr-[7.5rem] xl:hover:pl-[7.5rem] transition-all duration-300 ease-out"
            >
              <div className="hover-underline cursor-pointer">About me</div>
              <div className="hover-underline cursor-pointer">Projects</div>
              <div className="hover-underline cursor-pointer">Articles</div>
            </div>
          </span>
        </div>
        <div className="h-full w-full flex justify-start xl:justify-center items-center content-center text-center align-middle">
          <div className="flex text-9xl select-none">
            <span className={BN.className}>Bemajster.</span>
          </div>
        </div>
        <div className="h-full w-full hidden xl:block"></div>
      </main>
    </>
  )
}
