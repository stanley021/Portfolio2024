"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/components/ui/use-outside-click";

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <section className="w-full py-0 p-20">
        <h1 className="heading p-12 pb-20">
          Experience /<span className="text-purple">  Projects</span>
        </h1>
        <AnimatePresence>
          {active && typeof active === "object" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 h-full w-full z-10"
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {active && typeof active === "object" ? (
            <div className="fixed inset-0 grid place-items-center z-[100]">
              <motion.button
                key={`button-${active.title}-${id}`}
                layout
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.05,
                  },
                }}
                className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                onClick={() => setActive(null)}
              >
                <CloseIcon />
              </motion.button>
              <motion.div
                layoutId={`card-${active.title}-${id}`}
                ref={ref}
                className="w-full max-w-[500px] md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
              >
                <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                    priority
                    src={active.src}
                    alt={active.title}
                    layout="responsive"
                    width={500} // Standard width (adjust as needed)
                    height={300} // Adjusted height for better aspect ratio
                    className="object-contain w-full h-full" // Maintain aspect ratio and prevent blurriness
                  />
                </motion.div>

                <div>
                  <div className="flex justify-between items-start p-4">
                    <div className="">
                      <motion.h3
                        layoutId={`title-${active.title}-${id}`}
                        className="font-bold text-neutral-700 dark:text-neutral-200"
                      >
                        {active.title}
                      </motion.h3>
                      <motion.p
                        layoutId={`description-${active.description}-${id}`}
                        className="text-neutral-600 dark:text-neutral-400"
                      >
                        {active.description}
                      </motion.p>
                    </div>
                  </div>
                  <div className="pt-4 relative px-4">
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:none] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                    >
                      {typeof active.content === "function"
                        ? active.content()
                        : active.content}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>
        <ul className="max-w-5xl mx-auto w-full gap-4">
          {cards.map((card, index) => (
            <motion.div
              layoutId={`card-${card.title}-${id}`}
              key={`card-${card.title}-${id}`}
              onClick={() => setActive(card)}
              className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
            >
              <div className="flex gap-4 flex-col md:flex-row ">
                <motion.div layoutId={`image-${card.title}-${id}`}>
                  <Image
                    width={100}
                    height={100}
                    src={card.src}
                    alt={card.title}
                    className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                  />
                </motion.div>
                <div className="">
                  <motion.h3
                    layoutId={`title-${card.title}-${id}`}
                    className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${card.description}-${id}`}
                    className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                  >
                    {card.description}
                  </motion.p>
                </div>
              </div>
              <motion.button
                layoutId={`button-${card.title}-${id}`}
                className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-white-500 hover:text-white text-black mt-4 md:mt-0"
              >
                {card.ctaText}
              </motion.button>
            </motion.div>
          ))}
        </ul>
      </section>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "May 2022 - Aug 2023",
    title: "Bell Canada",
    src: "/bell.png",
    ctaText: "View",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <div>
          <p>
            - Built a Ruby on Rails app for AES encryption decryption, increasing efficiency by 25% and enhancing security.
          </p>
          <p>
            - Automated IP route maintenance with a Bash script, reducing time by 5%.
          </p>
          <p>
            - Improved system uptime by directing live traffic with F5.
          </p>

          <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '20px' }}>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', flex: '1' }}>
              <li>Ruby on Rails</li>
              <li>HTML</li>
              <li>JavaScript</li>
              <li>CSS</li>
            </ul>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', flex: '1' }}>
              <li>Bash</li>
              <li>Docker</li>
              <li>F5</li>
              <li>Putty</li>
              <li>Unix</li>
            </ul>
          </div>
        </div>
      );
    },
  },
  {
    description: "May 2021 - Sep 2021",
    title: "MGCS",
    src: "/ontario.png",
    ctaText: "View",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <div>
          <p>
            - Built an API management platform with IBM API Connect, boosting efficiency by 30%.
          </p>
          <p>
            - Created a unified API catalog, enhancing visibility by 20%.
          </p>
          <p>
            - Streamlined documentation process, cutting time spent by 50%.
          </p>

          <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '20px' }}>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', flex: '1' }}>
              <li>IBM API Connect</li>
              <li>GCP</li>
              <li>OpenAPI</li>
              <li>Postman</li>
            </ul>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', flex: '1' }}>
              <li>Markdown</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
        </div>
      );
    },
  },
  {
    description: "Jan 2021 - May 2021",
    title: "Skyquark",
    src: "/skyquark.png",
    ctaText: "View",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <div>
          <p>
            - Developed a CAPTCHA solver using TensorFlow and SSD Inceptionv2.
          </p>
          <p>
            - Created a web app using the MERN stack, enhancing user experience.
          </p>

          <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '20px' }}>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', flex: '1' }}>
              <li>TensorFlow</li>
              <li>Node.js</li>
              <li>React</li>
              <li>Express.js</li>
            </ul>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', flex: '1' }}>
              <li>MongoDB</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
        </div>
      );
    },
  },
];