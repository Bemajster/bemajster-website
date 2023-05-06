import { BN } from "@/global/fonts"
import Link from "next/link"

export default function Navbar() {
  return (
    <div className="h-full w-full align-middle flex items-center justify-start">
      <span className={BN.className}>
        <div
          className="flex flex-col text-5xl gap-4 pl-20 leading-relaxed hover:leading-loose 
                    hover:pl-[7.5rem] transition-all duration-300 ease-out"
        >
          <Link href="/">
            <div className="hover-underline cursor-pointer">Home</div>
          </Link>
          <Link href="/about">
            <div className="hover-underline cursor-pointer">About me</div>
          </Link>
          <div className="hover-underline cursor-pointer">Projects</div>
          <div className="hover-underline cursor-pointer">Articles</div>
        </div>
      </span>
    </div>
  )
}
