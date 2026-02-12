import { ProjectCard, type Project } from "@/Components/UI/ProjectCard";

const Projects = () => {
  const projects: Project[] = [
    {
      title: "NeuroNST",
      description:
        "NeuroNest is your intelligent memory vault — capture thoughts, save media, jot notes, set reminders",
      image: "/neuro.png",
      alt: "Preview of NeuroNest Website",
      tags: ["React", "Express", "MongoDB"],
      demoUrl: "https://neuro-nest-d2fn.vercel.app/",
      githubUrl: "https://github.com/rounitkumar568/NeuroNest",
    },
    {
      title: "Medium Clone",
      description:
        "A Medium clone is a blogging platform. Users can sign up and log in, create and publish articles",
      image: "/medium.png",
      alt: "Preview of Medium Website",
      tags: ["React", "NodeJS", "PostgreSQL", "Prisma"],
      demoUrl: "https://medium-ten-iota.vercel.app/signin",
      githubUrl: "https://github.com/rounitkumar568/Medium",
    },
    {
      title: "Resource Hub",
      description:
        "A place to upload and share all of your resources related to any domain.",
      image: "/hub.png",
      alt: "Preview of ResourceHub Website",
      tags: ["React", "Express", "PostgreSQL", "Prisma"],
      githubUrl: "https://github.com/rounitkumar568/Resource-Hub",
    },
  ];

  return (
    <section
      id="projects"
      className="relative mt-15 text-white px-4 flex flex-col items-center md:mt-25 sm:px-6 md:px-10 md:py-10"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl mb-10 animate-bounce saira-font text-white">
        My Projects
      </h1>

      <div className="grid w-full max-w-7xl gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
