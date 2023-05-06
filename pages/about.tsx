import { BN } from "@/global/fonts"
import { motion as m } from "framer-motion"
import Head from "next/head"

export default function About() {
  return (
    <div>
      <Head>
        <title>Bemajster - About me</title>
      </Head>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full h-full flex flex-col text-center p-5 pt-20"
      >
        <h1 className="text-5xl">
          <span className={BN.className}>About me</span>
        </h1>
        <div className="text-start p-5">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam
            lorem et sapien sodales, eget sagittis diam pretium. Praesent semper
            ex non scelerisque ultrices. Sed aliquet consequat pretium. Donec et
            nunc vitae nisl tempor imperdiet ac sed tellus. Vivamus pulvinar
            nulla id venenatis mattis. Curabitur mattis euismod justo at
            sollicitudin. Duis facilisis interdum nibh sit amet luctus.
            Pellentesque leo lorem, dictum in neque nec, dignissim faucibus
            felis. Vestibulum sapien lectus, tincidunt placerat dignissim id,
            euismod laoreet massa. Vivamus placerat neque a arcu imperdiet, et
            cursus sapien scelerisque. Pellentesque sed blandit neque. Donec et
            nisi nec libero iaculis tristique. Quisque sodales velit at lorem
            condimentum cursus sed sit amet ipsum. Aliquam quis vehicula nibh,
            iaculis congue ante.
          </p>
          <p>
            Vivamus iaculis bibendum tortor, in laoreet velit sodales sed. Sed
            eget tellus blandit, faucibus nulla sit amet, pharetra urna. Duis
            sagittis, tellus non faucibus condimentum, risus lacus elementum
            leo, ac dignissim lectus neque id odio. Curabitur ut laoreet leo.
            Phasellus vehicula odio sollicitudin, egestas enim eget, efficitur
            metus. Vestibulum sodales augue risus, sed accumsan purus
            condimentum ornare. Maecenas eget luctus justo, et dictum neque.
            Phasellus vel turpis scelerisque, rutrum mi nec, placerat purus.
            Donec ullamcorper aliquam accumsan.
          </p>
          <p>
            Integer nec quam sed sem molestie faucibus. Vestibulum id lacinia
            ligula, eget tempus velit. Integer a lacinia sapien, id fringilla
            nisl. Vestibulum sit amet dignissim dui. Morbi consectetur porttitor
            gravida. Cras ullamcorper pulvinar odio, at molestie ligula
            ullamcorper quis. Duis suscipit, eros aliquet placerat dignissim,
            odio augue tempor ante, eget hendrerit nisi eros id eros. Donec
            scelerisque eu purus eu pulvinar. Aenean aliquet ante efficitur nisl
            ullamcorper venenatis. Proin orci arcu, placerat eu aliquam porta,
            porttitor eget elit. Etiam vehicula sapien at rhoncus mattis. Nullam
            semper et risus interdum vestibulum. Fusce laoreet blandit aliquam.
            Ut vel metus ac orci interdum scelerisque. Aliquam sed laoreet
            justo.
          </p>
          <p>
            Integer nec quam sed sem molestie faucibus. Vestibulum id lacinia
            ligula, eget tempus velit. Integer a lacinia sapien, id fringilla
            nisl. Vestibulum sit amet dignissim dui. Morbi consectetur porttitor
            gravida. Cras ullamcorper pulvinar odio, at molestie ligula
            ullamcorper quis. Duis suscipit, eros aliquet placerat dignissim,
            odio augue tempor ante, eget hendrerit nisi eros id eros. Donec
            scelerisque eu purus eu pulvinar. Aenean aliquet ante efficitur nisl
            ullamcorper venenatis. Proin orci arcu, placerat eu aliquam porta,
            porttitor eget elit. Etiam vehicula sapien at rhoncus mattis. Nullam
            semper et risus interdum vestibulum. Fusce laoreet blandit aliquam.
            Ut vel metus ac orci interdum scelerisque. Aliquam sed laoreet
            justo.
          </p>
        </div>
      </m.div>
    </div>
  )
}
