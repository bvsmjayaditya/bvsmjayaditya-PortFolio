import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { AboutMe } from "../components/AboutMe";
import { Skill } from "../components/Skills";
import { Profiles } from "../components/Profiles";
import { ContactMe } from "../components/ContactSection";

export const Home=()=>{
  return (
  <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    
    {/* theme */}
    <ThemeToggle/>
    {/* bg effects */}
    <StarBackground />
    {/* navbar */}
    <Navbar />
    {/* main context */}

    <main>
      <Hero />
      <AboutMe />
      <Skill />
{/*       <Profiles/> */}
      <ContactMe />
    </main>
    {/* footer */}
  </div>
    );
}
