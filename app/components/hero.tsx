import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card";
  
  export default function HeroSection() {
    return (
      <div className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-gray-900 to-gray-700">
        <HoverCard>
          <HoverCardTrigger>
            <h1 className="text-6xl font-bold text-gray-100 hover:text-indigo-400 transition-colors duration-300">
              Syed Minam Ur Rehman
            </h1>
          </HoverCardTrigger>
          <HoverCardContent className="bg-gray-800 text-white rounded-lg p-6 shadow-lg">
            <h2 className="text-sm font-mono">
              Passionate Frontend Developer
            </h2>
          </HoverCardContent>
        </HoverCard>
  
        <h6 className="text-sm font-bold text-gray-300 mt-6">
          CEO Zarak
        </h6>
      </div>
    );
  }
  