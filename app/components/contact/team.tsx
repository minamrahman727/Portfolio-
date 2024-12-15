import Image from "next/image";
import Link from "next/link";
import MapEmbed from "../map";
import { InstagramIcon, MapIcon } from "lucide-react";

const TeamSection = () => {
  return (
    <main className=" bg-gradient-to-b from-gray-900 to-gray-700 py-4">
      <div className="flex  justify-between items-center bg-gradient-to-t from-gray-900 to-gray-700 max-w-7xl h-screen mx-auto rounded-3xl text-white ">
        <div className="text-center px-20 flex-1">
        
          <MapEmbed />
        </div>
        <div className="text-justify px-20 flex-1">
          <h3 className="text-3xl font-mono font-bold py-5">Contact Me</h3>
          <p className="text-xl">Phone No</p>
          <p className="text-base py-2">
            <Link href="tel:+923369289269">+92-336-9289269</Link>
          </p>
          <p className="text-xl">Email Me</p>
          <p className="text-base py-2">
            <Link
              href="mailto:minamrahman727@gmail.com?subject=Inquiry&body=Hello, I want to contact you for hiring you"
            >
              minamrahman727@gmail.com
            </Link>
          </p>
          <div className="flex justify-start gap-2 mt-4">
            <Link
              href="https://instagram.com/syedminam"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/insta.png"
                width={35}
                height={35}
                alt="Instagram"
                className="rounded-full border-2"
              />
            </Link>
            <Link
              href="https://linkedin.com/syedminamurrehman"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/link.png"
                alt="LinkedIn"
                width={35}
                height={35}
                className="rounded-full border-2"
              />
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/face.png"
                alt="Facebook"
                width={35}
                height={35}
                className="rounded-full border-2"
              />
            </Link>
            <Link
              href="https://github.com/minamrahman727"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/git.png"
                alt="GitHub"
                width={35}
                height={35}
                className="rounded-full border-2"
              />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TeamSection;
