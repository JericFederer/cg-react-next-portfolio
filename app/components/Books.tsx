import React from 'react'

import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { books } from '@/data'

const Books = () => {
  return (
    <div>
      <div className="pt-12 sm:pb-12" id="books">
        <h1 className="heading px-10 mb-8 sm:mb-10">
          Some of the books I read that gave me a boost in {" "}
          <span className="text-purple">work and life</span>
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="mb-52 sm:h-[100vh] rounded-md flex flex-col antialiased items-center relative overflow-hidden">
          <InfiniteMovingCards
            items={ books }
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  )
}

export default Books
