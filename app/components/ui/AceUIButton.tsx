import React from "react";

interface AceUIButton {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}

const AceUIButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses
}: AceUIButton) => {
  return (
    // * Shimmer Button
    <button
      className={ `${otherClasses} gap-2 md:mt-10 py-9 w-max md:py-5 lg:mt-3 my-3 md:px-10 px-5 inline-flex animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50` }
      onClick={ handleClick }
    >
      { position === "left" && icon }
      { title }
      { position === "right" && icon }
    </button>

    // * Magic Button
    // <button className="md:w-60 md:mt-10 lg:mt-3 w-full relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none">
    //   <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
    //   <span className={ `gap-2 inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl ${ otherClasses }` }>
    //     { position === "left" && icon }
    //     { title }
    //     { position === "right" && icon }
    //   </span>
    // </button>
  )
}

export default AceUIButton
