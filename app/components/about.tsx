import Image from 'next/image';
import Link from 'next/link';

const ProfileCard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-t from-gray-900 to-gray-700 p-10">
      <div className="w-full max-w-5xl bg-gradient-to-b from-gray-900 to-gray-700 shadow-lg rounded-2xl overflow-hidden transform transition hover:scale-105 p-6">
        {/* Top Section: Profile Picture and Details */}
        <div className="flex flex-col items-center text-center border-b-2 border-gray-300 pb-6">
          <Image
            src="/1.jpg"
            width={128}
            height={128}
            className="rounded-full mb-4 hover:border-4 border-blue-300 shadow-md"
            alt="Profile picture"
          />
          <h1 className="text-3xl font-extrabold  font-serif text-blue-100">سید منعام الرحمٰن</h1>
          <h2 className="text-base font-medium font-mono text-blue-200">Front-End Developer</h2>
          <p className="text-sm font-light text-blue-500">(Next.js Enthusiast)</p>

        </div>

        {/* Bottom Section: About and Additional Info */}
        <div className="mt-6">
          {/* About Me Section */}
          <h2 className="text-base font-bold text-gray-100 text-center mb-4">About Me</h2>
          <p className="text-gray-200 leading-relaxed text-center text-base">
            I am Syed Minam, a passionate front-end developer from Karachi, Pakistan. I specialize in crafting engaging user interfaces and developing seamless web experiences using modern tools like TypeScript, Tailwind CSS, and Next.js.
          </p>
          <p className="mt-4 text-gray-200 leading-relaxed text-center text-base">
            Beyond development, I am the founder of <span className="font-semibold text-green-300">Zarak</span>, a fashion brand that merges creativity and technology to cater to Pakistan and the Middle East. I also explore innovative tech projects like CLI-based systems using Node.js.
          </p>

          {/* Skills Section */}
          <div className="mt-6">
            <h3 className="text-base font-bold text-gray-100 mb-2 text-center">Skills</h3>
            <ul className="flex flex-wrap justify-center gap-2 text-sm text-white">
              {[ 
                'HTML', 
                'CSS', 
                'JavaScript', 
                'TypeScript', 
                'Next.js', 
                'Python', 
                'Tailwind CSS', 
                'Node.js', 
                'C++', 
                'GitHub' 
              ].map((skill) => (
                <li
                  key={skill}
                  className="bg-blue-500 px-3 py-1 rounded-full shadow-sm hover:bg-blue-600 transition"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="mt-8">
            <h3 className="text-base font-bold text-gray-100 mb-4 text-center">Connect With Me</h3>
            <ul className="flex justify-center gap-6">
              {[ 
                { name: 'LinkedIn', link: 'https://www.linkedin.com/in/syed-minam-ur-rehman/', icon: '/link.png' }, 
                { name: 'GitHub', link: 'https://github.com/minamrahman727', icon: '/git.png' }, 
                { name: 'Instagram', link: 'https://instagram.com/syedminamurrehman', icon: '/insta.png' }, 
                { name: 'Facebook', link: 'https://www.facebook.com/profile.php?id=100078720140776', icon: '/face.png' } 
              ].map(({ name, link, icon }) => (
                <li key={name}>
                  <Link href={link} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={icon}
                      alt={name}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full shadow-md hover:shadow-lg shadow-white hover:shadow-gray-100  transition"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
