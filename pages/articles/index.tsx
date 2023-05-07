import Head from "next/head"
import { BN } from "@/global/fonts"
import { motion as m } from "framer-motion"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Link from "next/link"

export default function Articles({ posts }: any) {
  return (
    <>
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
        <ul className="list-disc">
          {posts.map((post: any, index: any) => (
            <li key={index}>
              <Link
                href={"/articles/" + post.slug}
                passHref
                key={index}
                className="underline"
              >
                {post.frontMatter.title}
              </Link>
            </li>
          ))}
        </ul>
      </m.div>
    </>
  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("posts"))

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    )
    const { data: frontMatter } = matter(markdownWithMeta)

    return {
      frontMatter,
      slug: filename.split(".")[0],
    }
  })

  return {
    props: {
      posts,
    },
  }
}
