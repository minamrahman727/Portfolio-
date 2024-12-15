export const metadata = {
    title: "Projects | MINAM",
    description: "blah blah blah!",
    'icons': {
      'icon': '/1.jpg',
    },
  }
  import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Projects from "../components/projects/proj"

  export default function Project(){
    return(
        <main>
<Navbar/>
<Projects/>


<Footer/>
        </main>
    )
  }