import Navbar from "./components/navbar";
import HeroSection from "./components/hero";
import ProfileCard from "./components/about";
import SnC from "./components/skills";
import Footer from "./components/footer";

export const metadata = {
  title: "Syed Minam Ur Rehman",
  description: "",
  icons: {
    icon: "/next.svg",
  },
}
export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ProfileCard />
      <SnC />
      <Footer />
    </main>

  );
}
