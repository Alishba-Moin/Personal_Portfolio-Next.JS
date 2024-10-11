"use client"; // Indicate that this component is a client component in Next.js

import React, { useState } from "react"; // Import React and useState for state management
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper and SwiperSlide for carousel functionality
import "swiper/css"; // Import Swiper CSS for styling the carousel
import { BsArrowUpRight, BsGithub } from "react-icons/bs"; // Import icons from react-icons
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"; // Import Tooltip components for providing hover effects
import Link from "next/link"; // Import Link for navigation between pages
import Image from "next/image"; // Import Image for optimized image loading
import WorkSliderBtns from "@/components/ui/workSliderBtn"; // Import custom slider buttons

// Define an array of projects with relevant details
const projects = [
  {
    num: "01",
    title: "Full-Stack E-Commerce Platform",
    description:
      "A comprehensive e-commerce platform with product management and payment integration using React.js, Next.js, Node.js, and MongoDB.",
    thumbnail: "/image/e-shop.png", // Path to project thumbnail image
    technologies: [
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "React.js" },
      { name: "Node.js" },
    ],
    liveDemo: "https://next-js-milestone-3.vercel.app/", // Link to live demo
    github: "https://github.com/Alishba-Moin/Next-JS_Milestone-3", // Link to GitHub repository
  },
  // Additional project entries follow the same structure...
];

// Define the Projects component
export default function Projects() {
  const [project, setProject] = useState(projects[0]); // Set the initial project to the first in the array

  // Function to handle slide change in the Swiper component
  const handleSlideChange = (swiper: any) => {
    const currentIndex = swiper.activeIndex; // Get the index of the currently active slide
    setProject(projects[currentIndex]); // Update the project state based on the active slide
  };

  return (
    <div className="container mx-auto px-4 py-8"> {/* Main container for the component */}
      <div className="flex flex-col xl:flex-row gap-8"> {/* Flex container for project details and slider */}
        {/* Project Details Section */}
        <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
          <div className="flex flex-col gap-[30px] h-[100%]">
            <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              {project.num} {/* Display the project number */}
            </div>
            <h2 className="text-3xl text-white font-bold">{project.title}</h2> {/* Display project title */}
            <p className="text-white/70">{project.description}</p> {/* Display project description */}
            <ul className="flex gap-2 flex-wrap"> {/* List of technologies used */}
              {project.technologies.map((item, index) => (
                <li key={index} className="text-xl text-accent"> {/* Individual technology */}
                  {item.name}
                  {index !== project.technologies.length - 1 && ","} {/* Comma separator for technologies */}
                </li>
              ))}
            </ul>
            <div className="border-b border-white/60"></div> {/* Divider line */}
            <div className="flex items-center gap-4"> {/* Container for links */}
              {/* Live Demo Link */}
              <Link href={project.liveDemo} target="_blank" rel="noopener noreferrer"> {/* Link to live demo */}
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="flex justify-center items-center w-12 h-12 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition-all">
                      <BsArrowUpRight className="text-white text-2xl" /> {/* Live demo icon */}
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live Project</p> {/* Tooltip content for live demo */}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
              {/* GitHub Link */}
              <Link href={project.github} target="_blank" rel="noopener noreferrer"> {/* Link to GitHub repository */}
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="flex justify-center items-center w-12 h-12 rounded-full bg-white bg-opacity-10 hover:bg-opacity-10 transition-all">
                      <BsGithub className="text-white text-2xl" /> {/* GitHub icon */}
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>GitHub Repository</p> {/* Tooltip content for GitHub link */}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>
          </div>
        </div>
        {/* Project Image Slider Section */}
        <div className="w-full xl:w-[50%]">
          <Swiper
            spaceBetween={30} // Space between slides
            slidesPerView={1} // Number of slides visible at once
            onSlideChange={handleSlideChange} // Callback for slide change
            className="xl:h-[520px] mb-12" // Styling for the swiper component
          >
            {projects.map((project, index) => ( // Map through projects to create slides
              <SwiperSlide key={index} className="w-full">
                <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20"> {/* Slide container */}
                  <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div> {/* Overlay for effect */}
                  <div className="w-full h-full relative">
                    <Image
                      src={project.thumbnail} // Project thumbnail
                      alt="project-images" // Alt text for accessibility
                      fill // Allows the image to fill its container
                      className="object-cover" // Ensures the image covers the container while maintaining aspect ratio
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <WorkSliderBtns /> {/* Custom buttons for slider navigation */}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
