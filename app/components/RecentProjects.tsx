import React from 'react';

import { projects } from '@/data';
import { PinContainer } from './ui/3d-pin';
import { FaLocationArrow } from 'react-icons/fa';

const RecentProjects = () => {
  return (
    <div className="pt-20 pb-2 sm:pb-8" id="projects">
      <h1 className="heading px-10 -mt-12 sm:-mt-0 md:-mt-2 mb-6 sm:mb-3 md:mb-6">
        A small selection of {" "}
        <span className="text-purple">recent projects</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center gap-x-24 -mt-5 sm:-mt-1">
        {
          projects.map(({
            id,
            title,
            des,
            img,
            iconLists,
            link,
          }) => {
            return (
              <div
                key={ id }
                className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw] -mb-6 sm:-mb-12 lg:-mb-6 xl:-mb-0"
              >
                <PinContainer
                  title={ link }
                  href={ link }
                >
                  <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                    <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                      <img
                        src="/bg.png"
                        alt="bg-img"
                      />
                    </div>

                    {
                      id === 3
                      ? <img
                          src={ img }
                          alt={ title }
                          className={ `${ id === 3 ? "z-10 absolute bottom-0 top-[22%] h-[50%] w-[50%]" : "z-10 absolute bottom-0 h-full w-full " }` }
                        />
                      : <img
                          src={ img }
                          alt={ title }
                          className={ `${ id === 4 ? "z-10 absolute bottom-0 top-[24%] left-[36%] h-[50%] w-[50%]" : "z-10 absolute bottom-0 h-full w-full " }` }
                        />
                    }


                  </div>

                  <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-purple">
                    { title }
                  </h1>

                  <p className="lg:text-base lg:font-normal font-light text-sm line-clamp-2">
                    { des }
                  </p>

                  <div className="flex items-center justify-between mt-7 mb-3">
                    <div className="flex items-center">
                      {
                        iconLists.map((icon, index) => {
                          return (
                            <div
                              key={ icon }
                              className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                              style={{
                                transform: `translateX(.-${5 * index * 2}px)`
                              }}
                            >
                              <img
                                src={ icon }
                                alt={ icon }
                                className="p-2"
                              />
                            </div>
                          )
                        })
                      }
                    </div>

                    <div className="flex justify-center items-center">
                      {/* <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                        Check Live Site
                      </p>
                      <FaLocationArrow className="ms-3" color="#CBACF9" /> */}
                    </div>
                  </div>
                </PinContainer>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default RecentProjects