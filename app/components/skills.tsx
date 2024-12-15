"use client";
import Link from "next/link";

export default function SnC() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-700 p-6">
      <div className="w-full max-w-5xl bg-gradient-to-t from-gray-900 to-gray-700 rounded-2xl shadow-lg  hover:shadow-2xl   border border-gray-900 overflow-hidden transform transition hover:scale-105">
        
        {/* Skills Section */}
        <div className="flex flex-col items-center p-6 border-b border-gray-300">
          <h3 className="text-xl font-bold text-gray-100 mb-4">My Skills</h3>
          <ul className="grid grid-cols-3 gap-3 font-mono text-gray-300 text-sm text-center ">
            {[
              "TypeScript",
              "Node.js",
              "JavaScript",
              "HTML",
              "CSS",
              "Tailwind CSS",
              "Next.js",
              "C++",
              "Python",
            ].map((skill) => (
              <li
                key={skill}
                className="bg-blue-500 text-white px-3 py-1 rounded-lg shadow-sm hover:bg-blue-600 transition"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col items-center p-6 text-base">
          <h2 className="text-2xl font-bold text-gray-100 mb-6">Contact Me</h2>
          <h1 className="font-mono text-gray-200 text-center leading-7">
            <Link
              href="mailto:minamrahman727@gmail.com"
              className="text-blue-300 hover:underline text-base"
            >
              Email: minamrahman727@gmail.com
            </Link>
            <br />
            <Link
              href="tel:+923369289269"
              className="text-blue-300 hover:underline text-base"
            >
              Phone: +923369289269
            </Link>
            <br />
            <p className="text-base"><span className="font-semibold text-base">Address:</span> L-352 Sector 4, North Karachi, Karachi City, Pakistan</p> 
            <br />
            <Link
              href="https://www.linkedin.com/in/syedminamurrehman"
              className="text-white  text-base"
            >
              LinkedIn:<span className="hover:text-blue-400">@syedminamurrehman</span> 
          </Link>
            <br />
            <Link
              href="https://www.github.com/minamrahman727"
              className="text-white  text-base"
            >
              GitHub:<span className="hover:text-blue-400 ">minamrahman727</span> 
            </Link>
            <br />
            <Link
              href="https://www.instagram.com/syedminamurrehman"
              className="text-white  text-base"
            >
              Instagram:<span className="hover:text-blue-400 ">@syedminamurrehman</span> 
            </Link>
            <br />
            <Link
              href="https://www.facebook.com/profile.php?id=100078720140776"
              className="text-white  text-base"
            >
              Facebook:<span className="hover:text-blue-400 ">S.Minam</span> 
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
}
