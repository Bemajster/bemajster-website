import { motion as m } from "framer-motion"
import Head from "next/head"
import { BN } from "@/global/fonts"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { serialize } from "next-mdx-remote/serialize"
import { MDXRemote } from "next-mdx-remote"

export default function Article({ frontMatter, mdxSource }: any) {
  console.log(mdxSource)
  return (
    <div>
      <Head>
        <title>Bemajster - {frontMatter.title}</title>
      </Head>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full h-full flex flex-col p-5 pt-20"
      >
        <div className={BN.className}>
          <h1 className="text-5xl">{frontMatter.title}</h1>
          <div className="text-stone-400">
            {frontMatter.date}, {frontMatter.author}
          </div>
        </div>

        <main>
          <MDXRemote {...mdxSource} />
        </main>

        <div className="mt-2">
          Tags:{" "}
          <span className="text-stone-400">
            {frontMatter.tags.map((tag: any, index: number) =>
              index === frontMatter.tags.length - 1 ? `${tag}` : `${tag}, `
            )}
          </span>
        </div>
      </m.div>
    </div>
  )
}

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts"))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params: { slug } }: any) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".mdx"),
    "utf-8"
  )

  const { data: frontMatter, content } = matter(markdownWithMeta)
  const mdxSource = await serialize(content)

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  }
}
