import Image from "next/image";
import Link from "next/link";

const AboutMe = () => {
  return (
    <div className="text-center px-10 py-5 bg-gradient-to-b from-gray-900 to-gray-700 min-h-screen flex flex-col items-center">
      <div className="border border-gray-300 rounded-2xl px-5 text-left shadow-md bg-gradient-to-t from-gray-900 to-gray-700 hover:shadow-lg hover:cursor-auto hover:shadow-stone-700 shadow-zinc-700">
        <div className="text-4xl opacity-40 font-extrabold font-serif text-center py-3 text-gray-100">About Me</div>
        <div className="text-center py-4 px-2">
          <Image
            src="/team/minam2.jpg"
            alt="Syed Minam Ur Rehman"
            width={150}
            height={150}
            className="w-36 h-36 rounded-full object-cover border-2 hover:animate-pulse border-stone-500"
          />
        </div>
        <h3 className="text-xl font-bold py-2 font-serif text-gray-100">Syed Minam Ur Rehman</h3>
        <p className="text-base font-mono opacity-75 py-1 text-gray-200">Founder & CEO of MGC & Rahman Group, COO of Zarak</p>
        
        <div className="text-justify">
          <h4 className="text-lg font-semibold py-1 text-gray-100">About Me</h4>
          <p className="text-base text-gray-200">
            I am Syed Minam Ur Rehman, a passionate and skilled web developer with a deep interest in creating innovative digital experiences. Proficient in a wide range of programming languages and frameworks, including TypeScript, HTML, JavaScript, CSS, Tailwind CSS, Next.js, C++, and Python, I bring a versatile skill set to every project I undertake.
          </p>
          <p className="text-base py-5 text-gray-200">
            In addition to my technical expertise, I am an entrepreneur at heart, currently leading a fashion startup named Zarak. Zarak combines modern design with timeless elegance, showcasing my ability to bridge creativity and technical acumen. My experience spans both the development and business spheres, enabling me to deliver solutions that are not only functional but also impactful.
          </p>

          <h4 className="text-lg font-semibold py-1 text-gray-100">My Skills</h4>
          <ul className="list-disc px-10 font-bold font-mono text-xs text-gray-300">
            <li>HTML</li>
            <li>TypeScript</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Python</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>C++</li>
            <li>GitHub</li>
            <li>Node.js</li>
          </ul>

          <h4 className="text-lg font-semibold py-1 text-gray-100">My Vision</h4>
          <p className="text-base text-gray-200">
            My vision is to blend technology and creativity to drive innovation in both the tech and fashion industries. I aim to:
          </p>
          <ul className="list-decimal px-10 font-thin font-mono text-xs py-2 text-gray-300">
            <li className="py-1">
              <h6 className="text-sm font-semibold">Empower Businesses Through Technology:</h6> Utilize my web development expertise to create scalable and user-centric digital solutions that address real-world problems.
            </li>
            <li className="py-1">
              <h6 className="text-sm font-semibold">Revolutionize Fashion with Technology:</h6> Grow Zarak into a globally recognized fashion brand by integrating modern technologies to enhance the customer experience.
            </li>
            <li className="py-1">
              <h6 className="text-sm font-semibold">Lifelong Learning and Growth:</h6> Continuously expand my knowledge base and skills to stay at the forefront of technological advancements and entrepreneurial innovation.
            </li>
          </ul>
          <p className="text-base py-5 text-gray-200">
            I am driven by the desire to make a meaningful impact, whether by crafting seamless user interfaces, building efficient backend systems, or redefining fashion for the digital age.
          </p>

          <h1 className="text-xl font-mono font-extrabold flex justify-center text-gray-100">You may reach me through the following links</h1>
          <ul className="flex justify-center gap-5 py-5">
            <li>
              <Link href="https://www.linkedin.com/in/syed-minam-ur-rehman/">
                <Image src="/link.png" alt="linkedin" width={50} height={50} className="w-10 h-10 rounded-full object-fill border-2" />
              </Link>
            </li>
            <li>
              <Link href="https://github.com/minamrahman727">
                <Image src="/git.png" alt="github" width={50} height={50} className="w-10 h-10 rounded-full object-fill border-2" />
              </Link>
            </li>
            <li>
              <Link href="https://instagram.com/syedminamurrehman">
                <Image src="/insta.png" alt="instagram" width={50} height={50} className="w-10 h-10 rounded-full object-fill border-2" />
              </Link>
            </li>
            <li>
              <Link href="https://www.facebook.com/profile.php?id=100078720140776">
                <Image src="/face.png" alt="facebook" width={50} height={50} className="w-10 h-10 rounded-full object-fill border-2" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AboutMe;
