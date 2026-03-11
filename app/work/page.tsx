import Navigation from "@/components/Navigation";
import Image from "next/image";

export default function Work() {
  const projects = [
    {
      id: 1,
      image: "/images/case-studies/project-1.png",
      client: "CLIENT NAME",
      title: "PROJECT NAME",
    },
    {
      id: 2,
      image: "/images/case-studies/project-2.png",
      client: "CLIENT NAME",
      title: "PROJECT NAME",
    },
    {
      id: 3,
      image: "/images/case-studies/project-3.png",
      client: "CLIENT NAME",
      title: "PROJECT NAME",
    },
    {
      id: 4,
      image: "/images/case-studies/project-4.jpg",
      client: "CLIENT NAME",
      title: "PROJECT NAME",
    },
    {
      id: 5,
      image: "/images/hero/hero-main.jpg",
      client: "CLIENT NAME",
      title: "PROJECT NAME",
    },
    {
      id: 6,
      image: "/images/services/creative-production.jpg",
      client: "CLIENT NAME",
      title: "PROJECT NAME",
    },
    {
      id: 7,
      image: "/images/services/branding.jpg",
      client: "CLIENT NAME",
      title: "PROJECT NAME",
    },
    {
      id: 8,
      image: "/images/services/social-media.jpg",
      client: "CLIENT NAME",
      title: "PROJECT NAME",
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <div className="flex flex-col items-center px-4 md:px-20 gap-2.5 relative mx-auto">
        <Navigation />

        <main className="w-full max-w-[1536px] py-12 md:py-20">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-12 md:mb-16 px-4">
            Work Page
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 px-4">
            {projects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="relative w-full aspect-[4/3] overflow-hidden mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-sm tracking-wider text-white/40 mb-1">
                  {project.client}
                </h3>
                <p className="text-lg font-medium">{project.title}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
