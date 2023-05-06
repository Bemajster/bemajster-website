import { BN } from "@/global/fonts"

export default function Home() {
  return (
    <main className="bg-blue-950 text-white w-screen h-screen grid grid-cols-3">
      <div className="h-full w-full align-middle flex items-center">
        <span className={BN.className}>
          <div
            className="flex flex-col text-5xl gap-4 p-20 leading-relaxed hover:leading-loose 
                     hover:p-[7.5rem] transition-all duration-300 ease-out"
          >
            <div>About me</div>
            <div>Projects</div>
            <div>Articles</div>
          </div>
        </span>
      </div>
      <div className="h-full w-full flex justify-center items-center content-center text-center align-middle">
        <div className="flex text-9xl select-none">
          <span className={BN.className}>Bemajster.</span>
        </div>
      </div>
      <div className="h-full w-full"></div>
    </main>
  )
}
