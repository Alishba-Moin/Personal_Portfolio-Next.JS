"use client"; // Ensures the component is rendered on the client side

// Importing necessary components and icons
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbApi } from "react-icons/tb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

// Data for the About section
const about = {
  title: "About me",
  description:
    "Passionate and dedicated IT student specializing in Artificial Intelligence, Web 3.0, and Metaverse technologies. Eager to apply academic knowledge and technical skills to innovative projects in the tech industry. Seeking opportunities to learn, grow, and contribute to cutting-edge technology solutions.",
  info: [
    { fieldName: "Name", fieldValue: "Alishba Moin" },
    { fieldName: "Phone-no", fieldValue: "+92 317 245 567" },
    { fieldName: "Location", fieldValue: "Hyderabad, Sindh" },
    { fieldName: "Nationality", fieldValue: "Pakistan" },
    { fieldName: "Email", fieldValue: "alishbamoin797@gmail.com" },
    { fieldName: "Language", fieldValue: ["English", "Urdu"] },
  ],
};

// Data for the Experience section
const experience = {
  icon: "/image/badge.svg",
  title: "My Experience",
  items: [
    {
      position: "Web Developer",
      company: "Personal Projects",
      duration: "2024 - Present",
      description:
        "Developed and maintained responsive websites using HTML, CSS, JavaScript, TypeScript, and Next.js, focusing on user-friendly interfaces.",
    },
    {
      position: "Intern",
      company: "CodeSoft",
      duration: "2023",
      description:
        "Gained hands-on experience in web development by assisting in the creation of user-friendly web applications.",
    },
    {
      position: "Student Developer",
      company: "Academic Projects",
      duration: "2023 - 2024",
      description:
        "Completed several academic projects that focused on creating efficient and responsive web applications.",
    },
  ],
};

// Data for the Education section
const education = {
  icon: "/image/cap.svg",
  title: "My Education",
  items: [
    {
      institution: "Governor Sindh Initiative For IT",
      degree: "Governor Sindh Initiative for Artificial Intelligence, Web 3.0 & Metaverse",
      duration: "2023 - 2024 (Expected)",
    },
    {
      institution: "University Of Sindh, Jamshoro, Pakistan",
      degree: "Bachelor’s In Biotechnology (Undergraduate)",
      duration: "2023 – 2027",
    },
    {
      institution: "Board Of Intermediate Education, Hyderabad Sindh",
      degree: "Intermediate",
      duration: "2020 – 2022",
    },
    {
      institution: "Board Of Secondary Education, Hyderabad Sindh",
      degree: "Matriculation",
      duration: "2018 – 2020",
    },
  ],
};

// Data for the Skills section
const skills = {
  title: "My Skills",
  skillList: [
    {
      category: "Programming Languages",
      items: [
        { icon: <FaHtml5 />, name: "HTML5" },
        { icon: <FaCss3 />, name: "CSS3" },
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <SiTypescript />, name: "TypeScript" },
      ],
    },
    {
      category: "Frameworks & Libraries",
      items: [
        { icon: <FaReact />, name: "React.js" },
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      ],
    },
    {
      category: "Tools & Technologies",
      items: [
        { icon: <FaGithub />, name: "GitHub" },
        { icon: <VscVscode />, name: "Visual Studio Code" },
        { icon: <TbApi />, name: "RESTful API" },
      ],
    },
  ],
};

// Resume Component
export default function Resume() {
  return (
    <div className="container mx-auto">
      {/* Tabs for navigating different resume sections */}
      <Tabs defaultValue="skills" className="flex flex-col xl:flex-row gap-[60px]">
        {/* Tabs List */}
        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="about">About Me</TabsTrigger>
        </TabsList>

        {/* Container for Tabs Content */}
        <div className="min-h-[70vh] w-full">
          {/* Experience Tab Content */}
          <TabsContent value="experience" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold flex items-center justify-center xl:justify-start">
                <img src={experience.icon} alt="Experience Icon" className="mr-2 w-8 h-8" />
                {experience.title}
              </h3>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {experience.items.map((item, index) => (
                    <li
                      key={index}
                      className="bg-[#232329] h-auto py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                    >
                      <span className="text-accent">{item.duration}</span>
                      <h3 className="text-xl max-w-[260px] min-h-[20px] text-center lg:text-left">
                        {item.position}
                      </h3>
                      <div className="flex items-center gap-3">
                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                        <p className="text-white/70">{item.company}</p>
                      </div>
                      <p className="text-white/60 text-md font-semibold mt-3 lg:text-left text-center">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>

          {/* Skills Tab Content */}
          <TabsContent value="skills" className="w-full">
            <div className="flex flex-col gap-[30px]">
              <h3 className="text-4xl font-bold">{skills.title}</h3>
              {skills.skillList.map((category, index) => (
                <div key={index}>
                  <h4 className="font-bold text-xl text-accent">{category.category}</h4>
                  {/* Skill Items */}
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 lg:gap-4 xl:gap-[20px]">
                    {category.items.map((skill, skillIndex) => (
                      <li key={skillIndex}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[90px] bg-[#232329] rounded-xl flex justify-center items-center group p-2">
                              {/* Skill Icon */}
                              <div className="text-4xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            {/* Skill Name Tooltip */}
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Education Tab Content */}
          <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold flex items-center justify-center xl:justify-start">
                <img src={education.icon} alt="Education Icon" className="mr-2 w-8 h-8" />
                {education.title}
              </h3>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {education.items.map((item, index) => (
                    <li
                      key={index}
                      className="bg-[#232329] h-auto py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                    >
                      <span className="text-accent">{item.duration}</span>
                      <h3 className="text-xl max-w-[260px] min-h-[20px] text-center lg:text-left">
                        {item.degree}
                      </h3>
                      <div className="flex items-center gap-3">
                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                        <p className="text-white/70">{item.institution}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>

          {/* About Tab Content */}
          <TabsContent value="about" className="w-full text-center xl:text-left">
            <div className="flex flex-col gap-y-6 max-w-[620px] mx-auto xl:mx-8">
              <h3 className="text-4xl font-bold flex items-center justify-center xl:justify-start">
                {about.title}
              </h3>
              <p className="max-w-[600px] text-white/70 mx-auto xl:mx-0 font-semibold">
                {about.description}
              </p>
              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                {about.info.map((item, index) => (
                  <li key={index} className="flex justify-center items-center lg:justify-start gap-2">
                    <span className="text-white/60 font-primary">{item.fieldName}:</span>
                    {/* Handle array values for Language */}
                    <span className="text-xl font-sans text-white">
                      {Array.isArray(item.fieldValue)
                        ? item.fieldValue.join(", ")
                        : item.fieldValue}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
