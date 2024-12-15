import TeamSection from "../components/contact/team"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
export const metadata = {
    title: "Syed Minam Ur Rehman",
    description: "",
    icons: {
      icon: "/favicon.ico",
    },
  }
  export default function Home() {
    return(
        <main>
            <Navbar/>
            <TeamSection/>
            <Footer/>
        </main>
    )
}