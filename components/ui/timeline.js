"use client"; // Mark this as a Client Component
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null); // Ref for the timeline container
  const containerRef = useRef(null); // Ref for the scroll container
  const [height, setHeight] = useState(0); // State to track the height of the timeline

  // Calculate the height of the timeline
  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  // Use Framer Motion's useScroll to track scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"], // Adjust scroll offsets
  });

  // Transform scroll progress into height and opacity values
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-gradient-to-r from-[#b8b8b8] to-[#e3e4e5] dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl -mb-28 pt-48 px-4 md:px-8 lg:px-10">
        <h2 className="text-3xl ml-72 md:text-5xl mb-4 text-[#361a63] dark:text-white max-w-4xl">
          What We Offer
        </h2>
        <p className="text-[#4a2487] text-3xl ml-72 md:text-2xl mb-4 dark:text-white max-w-3xl">
          Discover how our platform revolutionizes hiring and empowers candidates.
        </p>
      </div>


      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500">
                {item.emoji} {/* Display the emoji */}
              </h3>
            </div>
            

{/* image start */}
{/* <div className="sticky top-40 self-start w-full md:w-1/3 pr-4 flex items-center">
              <div className="h-16 w-16 rounded-full bg-white dark:bg-black flex items-center justify-center overflow-hidden">
                <Image
                  src={item.image} // Use the image URL from the data
                  alt={item.title} // Use the title as alt text
                  width={64} // Set the width of the image
                  height={64} // Set the height of the image
                  className="object-cover" // Ensure the image covers the container
                />
              </div>
            </div> */}
{/* image end */}



            <div className="relative pl-20 pr-4 md:pl-0 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.emoji} {item.title} {/* Display the emoji and title */}
              </h3>
              <h3 className="hidden md:block text-2xl mb-4 text-left font-bold text-[#7a7a7a] dark:text-neutral-500">
                {item.title} {/* Display the title for larger screens */}
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-lg whitespace-pre-line">
                {item.description}
                {/* Display the description */}
              </p>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[#4a2d7a] via-[#a119a3] to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};