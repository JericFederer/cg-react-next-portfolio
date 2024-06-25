import { CgPiano } from "react-icons/cg";

import AceUIButton from './ui/AceUIButton'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'

const Main = () => {
  return (
    <div className="-mb-16 sm:-mb-0 sm:pb-2 pt-5 sm:pt-20 mx-10 sm:mx-0" id="top">
      {/* Spotlight */}
      <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
      <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
      <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />

      {/* Grid and Dot Background */}
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100">
            “The chief task in life is simply this: to identify and separate matters so that I can say clearly to myself which are externals not under my control, and which have to do with the choices I actually control. Where then do I look for good and evil? Not to uncontrollable externals, but within myself to the choices that are my own . . .”
            —Epictetus, Discourses, 2.5.4–5
          </h2>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Creative Chronicle Portfolio"
          />

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl -mt-10"
            words="React and NextJS (TypeScript)"
            color="purple"
          />

          <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
            Hi, I&apos;m Jeric, a Web/Mobile Developer based in Tokyo, Japan
          </p>

          <a href="#projects">
            <AceUIButton
              title={ "Here are some of my works" }
              icon={ <CgPiano /> }
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Main
