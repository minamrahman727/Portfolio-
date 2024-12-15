import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "MGC (official Page)",
      description: "The official website of MGC Karachi, showcasing services, achievements, and updates about the organization.",
      image: "/projects/mgc.jpg",
      link: "https://mgckarachi.vercel.app/",
    },
    {
      title: "ZEX Expense Tracker",
      description: "A user-friendly tool to track and manage your daily expenses efficiently.",
      image: "/projects/zexc.jpg",
      link: "https://zexpencia.vercel.app/",
    },
    {
      title: "ZEX Pressure Converter",
      description: "Quickly convert pressure units with accuracy and ease",
      image: "/projects/pc.jpg",
      link: "https://zexpc.vercel.app/",
    },
    {
      title: "ZEX Currency Converter",
      description: "Simplify global transactions by converting currencies effortlessly",
      image: "/projects/cc.jpg",
      link: "https://zexcc.vercel.app/",
    },
    {
      title: "ZEX Time Converter",
      description: "Convert time across multiple formats.",
      image: "/projects/tc.jpg",
      link: "https://zextc.vercel.app/",
    },
    {
      title: "ZEX Power Converter",
      description: "Convert power measurements with ease.",
      image: "/projects/ppc.jpg",
      link: "https://zexpower.vercel.app/",
    },
    {
      title: "ZEX Angle Converter",
      description: "Easily convert angles to different units.",
      image: "/projects/ac.jpg",
      link: "https://angleconverter.vercel.app/",
    },
    {
      title: "ZEX Document Library",
      description: "library of various Programming languages.",
      image: "/projects/doc.jpg",
      link: "https://zex-docs.vercel.app/",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-700 text-white py-10 px-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">My Projects</h1>
        <p className="text-gray-400 text-sm">A showcase of my work</p>
      </div>
      <div className="container mx-auto">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((project, index) => (
            <Link key={index} href={project.link} target="_blank" rel="noopener noreferrer">
              <div className="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition transform duration-300 shadow-lg hover:shadow-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold">{project.title}</h2>
                  <p className="text-gray-400 text-sm mt-2">{project.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
