import Link from "next/link";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import Photo from "../components/photo";
import DownloadCV from "@/components/downloadCV";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row justify-between items-center xl:pt-4 xl:pb-15">
          
          {/* Left content: Job title, Heading, and Description */}
          <div className="text-center xl:text-left">
            <span className="text-xl font-extrabold text-white/80">Web Developer</span>
            <h1 className="mb-2">
              Hello I'm <br />
              <span className="text-accent">Alishba Moin</span>
            </h1>
            <p className="max-w-[500px] mb-4 text-white/80">
              AI Enthusiast and Web Developer with experience in building responsive websites using HTML, CSS, JavaScript, TypeScript, React.js, and Next.js.
            </p>

            {/* Buttons and Social Links */}
            <div className="flex flex-col xl:flex-row items-center gap-6">
              <DownloadCV />
              <div className="mb-8 xl:mb-0 flex gap-6">
                <Link href="https://github.com/Alishba-Moin" aria-label="GitHub Profile">
                  <FiGithub className="w-8 h-8 border border-accent rounded-lg text-accent hover:bg-accent hover:text-primary transition-all duration-500" />
                </Link>
                <Link href="https://www.linkedin.com/in/alishba-moin" aria-label="LinkedIn Profile">
                  <FiLinkedin className="w-8 h-8 border border-accent rounded-lg text-accent hover:bg-accent hover:text-primary transition-all duration-500" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right content: Photo */}
          <div className="order-1 xl:order-none mb-4 xl:mb-4 xl:mr-8 overflow-hidden">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}
