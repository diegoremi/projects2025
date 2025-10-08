import Image from "next/image";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
import { projects } from "../projects";

export default function ProjectsPage() {
  return (
    <main className="px-40 flex flex-1 justify-center py-20">
      <div className="layout-content-container flex flex-col w-full max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-white text-6xl font-bold tracking-tighter" style={{ fontFamily: "'Syne', sans-serif" }}>
            My Projects
          </h1>
          <p className="text-gray-400 text-xl font-normal leading-relaxed mt-6 max-w-3xl mx-auto">
            A curated collection of my work, from web applications to machine learning models. Explore my projects to see my skills in action.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div key={project.title} className="flex flex-col gap-6 bg-[#1A1A1A] p-6 rounded-xl border border-[#262626] hover:border-[#4F46E5] transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-full bg-center bg-no-repeat aspect-[16/10] bg-cover rounded-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-white text-2xl font-semibold leading-snug" style={{ fontFamily: "'Syne', sans-serif" }}>
                  {project.title}
                </h3>
                <p className="text-gray-400 text-base font-normal leading-relaxed mt-3 mb-5">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-sm font-medium bg-[#262626] text-[#A7A2F6] px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex space-x-4">
                <Link href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-[#4F46E5] hover:underline">
                  <SiGithub />
                  <span>View Code</span>
                </Link>
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-[#4F46E5] hover:underline">
                  <FiExternalLink />
                  <span>Live Demo</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}