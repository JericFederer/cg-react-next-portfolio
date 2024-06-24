'use client'
import { useState } from "react";
import Lottie from "react-lottie";
import { CgPiano } from "react-icons/cg";

import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBG";
import { GlobeDemo } from "./GridGlobe";
import animationData from "@/data/confetti.json";
import AceUIButton from "./AceUIButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  // * USESTATE
  const [copied, setCopied] = useState(false);

  // * HANDLERS
  const handleCopy = () => {
    navigator.clipboard.writeText("j.enricobandong@gmail.com");
    setCopied(true);
  }

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={ `${id === 6 && "flex p-10 justify-center items-center"} h-full` }>
        <div className="w-full h-full absolute">
          { 
            img && <img
              src={ img }
              alt={ img }
              className={ cn(imgClassName, "object-cover object-center") }
            />
          }
        </div>

        <div className={ `absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}` }>
          {
            spareImg && <img
              src={ spareImg }
              alt={ spareImg }
              className={ "object-cover object-center w-full h-full" }
            />
          }
        </div>

        {
          id === 6 && (
            <BackgroundGradientAnimation>
              <div className="absolute z-50 flex items-center justify-center text-white font-bold"/>
            </BackgroundGradientAnimation>
          )
        }

        <div className={ cn(titleClassName, "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-1") }>
          <div className="pt-4 pl-4 font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
            { description }
          </div>

          <div className={ `${id === 6 ? "pb-0 pl-0" : "pb-4 pl-4"} font-sans font-bold text-sm sm:text-base lg:text-lg xl:text-3xl max-w-96 z-10` }>
            { title }
          </div>
        
          {
            id === 2 && (
              <GlobeDemo />
            )
          }

          {
            id === 3 && (
              <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
                <div className="flex flex-col gap-1 md:gap-2 lg:gap-2">
                  {
                    [
                      "Next",
                      "Node",
                      "Swift UI",
                    ].map((item) => (
                      <span key={ item } className="py-2 lg:py-2 lg:px-3 px-3 text-xs lg:text-sm opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E] h-10">
                        { item }
                      </span>
                    ))
                  }
                  <span className="py-4 px-3 rounded-lg text-center bg-[#1a1e4b] h-10"/>
                </div>

                <div className="flex flex-col gap-1 md:gap-2 lg:gap-2 sm:-ml-3 ml-1" >
                  <span className="py-4 px-3 rounded-lg text-center bg-[#1a1e4b] h-10"/>
                  {
                    [
                      "TypeScript",
                      "React",
                      "React Native",
                    ].map((item) => (
                      <span key={ item } className="py-2 lg:py-2 lg:px-3 px-3 text-xs lg:text-sm opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E] h-10">
                        { item }
                      </span>
                    ))
                  }
                </div>

              </div>
            )
          }

          {
            id === 6 && (
              <div className="mt-5 relative">
                <div className={ `absolute -bottom-10 right-0 ${copied ? "block" : "block"}` }>
                  <Lottie options={{
                    loop: copied,
                    autoplay: copied,
                    animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidyMid slice"
                    }
                  }}/>

                  <AceUIButton
                    title={ copied ? "Email is Copied!" : "Copy my email address" }
                    icon={ <CgPiano /> }
                    position="left"
                    otherClasses="!bg-[#161a31] lg:relative" 
                    handleClick={ handleCopy }
                  />
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
};
