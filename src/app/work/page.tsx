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

interface Project {
  num: string;
  title: string;
  description: string;
  thumbnail: string;
  technologies: { name: string }[];
  liveDemo: string;
  github: string;
}

const projects: Project[] = [
  {
    num: "01",
    title: "Full-Stack Marketplace E-Commerce Platform",
    description:
      "A comprehensive e-commerce platform with product listing, product details, add-to-cart functionality, and a search bar to filter products. Developed using Next.js, Sanity, and Tailwind CSS, it offers a seamless shopping experience.",
    thumbnail: "/image/project1.png",
    technologies: [
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Sanity" },
    ],
    liveDemo: "https://next-js-figma-hackathon.vercel.app/",
    github: "https://github.com/Alishba-Moin/NEXT-JS_Figma-Hackathon",
  },
  {
    num: "02",
    title: "Dynamic Blog Platform",
    description:
      "A blog platform that dynamically displays blog posts. Built with Next.js, it focuses on performance and dynamic content rendering.",
    thumbnail: "/image/project2.png",
    technologies: [{ name: "Next.js" }, 
      { name: "Tailwind CSS" }],
    liveDemo: "https://next-js-milestones3.vercel.app/",
    github: "https://github.com/Alishba-Moin/NEXT-JS-Milestones3/tree/master/assignmet-blogs_website",
  },
  {
    num: "03",
    title: "Complete E-Commerce Website",
    description:
      "A fully-featured e-commerce website with Next.js and Tailwind CSS and fetch product data from custom API. The platform supports features like product search, category filtering, product details, and a responsive design.",
    thumbnail: "/image/project3.png",
    technologies: [
      { name: "Next.js" },
      { name: "Tailwind CSS" },
    ],
    liveDemo: "https://next-js-milestone3-project.vercel.app/",
    github: "https://github.com/Alishba-Moin/NEXT-JS_Milestone3-Project",
  },
  {
    num: "04",
    title: "E-Commerce Travel Website",
    description:
      "A visually appealing travel website created using both HTML, CSS, and JavaScript as well as Next.js and Tailwind CSS, showcasing versatility in development techniques and design.",
    thumbnail: "/image/project4.png",
    technologies: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
    ],
    liveDemo: "https://next-js-milestones2.vercel.app/",
    github: "https://github.com/Alishba-Moin/NEXT-JS-Milestones2/tree/master/project-css",
  },
  {
    num: "05",
    title: "Dynamic Resume Builder",
    description:
      "A resume builder application where users can dynamically input details, edit, and generate shareable or downloadable resumes. Built with React.js and Next.js.",
    thumbnail: "/image/project5.png",
    technologies: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
    ],
    liveDemo: "https://hackathon-milestones-resume-builder-qjqm.vercel.app/",
    github: "https://github.com/Alishba-Moin/HACKATHON_milestones_Resume-Builder/tree/master/Milestone5",
  },
  {
    num: "06",
    title: "GitHub Profile Viewer",
    description:
      "An application that fetches and displays GitHub user profiles and repositories. Built using React.js, Next.js, Tailwind CSS, and the GitHub API for seamless integration.",
    thumbnail: "/image/project6.png",
    technologies: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "GitHub API" },
    ],
    liveDemo: "https://19-github-profile-viewer-mabs73nh0-alishba-moins-projects.vercel.app/",
    github: "https://github.com/Alishba-Moin/30-Days_Of_30-Projects/tree/master/19_github-profile-viewer",
  },
  {
    num: "07",
    title: "Interactive Blog Platform",
    description:
      "A dynamic blog platform where users can create, edit, and delete posts. Built using Next.js, React.js, and a custom RESTful API, it also features GitHub authentication for a seamless user experience.",
    thumbnail: "/image/project7.png",
    technologies: [
      { name: "Next.js" },
      { name: "React.js" },
      { name: "Node.js" },
      { name: "RESTful API" },
      { name: "GitHub Authentication" },
    ],
    liveDemo: "https://next-js-milestone-4.vercel.app/",
    github: "https://github.com/Alishba-Moin/Next.JS_Milestone-4",
  },
  {
    num: "08",
    title: "HTML Preview App",
    description:
      "A simple application that allows users to write HTML code and see a live preview of the output. Built with Next.js, Tailwind CSS, and JavaScript.",
    thumbnail: "/image/project8.png",
    technologies: [
      { name: "Next.js" },
      { name: "HTML" },
      { name: "JavaScript" },
    ],
    liveDemo: "https://30-days-of-30-projects-5g88.vercel.app/",
    github: "https://github.com/Alishba-Moin/30-Days_Of_30-Projects/tree/master/html-preview-app",
  },
  {
    num: "09",
    title: "Movie Search App",
    description:
      "A web application that allows users to search for movies using the OMDB API. Features include search functionality, adding movies to favorites, viewing movie details, and responsive design.",
    thumbnail: "/image/project9.png",
    technologies: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "RESTful API" },
    ],
    liveDemo: "https://30-days-of-30-projects-8qex.vercel.app/",
    github: "https://github.com/Alishba-Moin/30-Days_Of_30-Projects/tree/master/16_movie-search-app",
  },
  {
    num: "10",
    title: "Portfolio Website for Panacloud",
    description:
      "A professional portfolio website developed for Panacloud Company using HTML, CSS, and JavaScript. It highlights the company's services and includes a modern design with responsive features.",
    thumbnail: "/image/project10.png",
    technologies: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
    ],
    liveDemo: "https://assignment12-two.vercel.app/",
    github: "https://github.com/Alishba-Moin/HTML-CSS-Assignment/tree/master/Assignment12",
  },
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

