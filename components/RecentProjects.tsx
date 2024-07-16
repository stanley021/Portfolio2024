"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";


const RecentProjects = () => {
  return (
    <div className="py-4">
      <h1 className="heading p-9">
        Recent <span className="text-purple">Projects</span>
      </h1>
    
      <div className="grid md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-1 py-20 ">
        {projects.map((project) => (
          <div key={project.id} className="flex items-center justify-center ">
            <div className="py-8 ">
            <CardContainer className="max-w-md ">
              <CardBody className="bg-gray-50 sm:min-h-[36rem] sm:min-w-[30rem] relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  dark:bg-black dark:border-white/[0.2] border-black/[0.1] sm:w-full h-full rounded-xl p-6 border w-72">
                <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white ">
                  {project.title}
                </CardItem>
                <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 ">
                  {project.des}
                </CardItem>

                <CardItem translateZ="100" className="w-full mt-4 ">
                  <Image
                    src={project.img}
                    alt={project.title}
                    height={1000}
                    width={1000}
                    className="h-50 lg:h-96 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-5 ">
                  <div className="flex items-center ">
                    {project.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center "
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon" className="p-2" />
                      </div>
                    ))}
                  </div>
                  {/* <CardItem translateZ={20} as="button" className="px-4 py-2 rounded-xl bg-purple dark:text-black text-white text-xs font-bold">
                    Check Live Site
                  </CardItem> */}
                </div>
              </CardBody>
            </CardContainer>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default RecentProjects;
