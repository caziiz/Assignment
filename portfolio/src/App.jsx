import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  const data = {
  name: "Abdiasis",
  role: "Full-Stack Developer & Designer",
  email: "casiisc608@email.com",
  projects: [
    {
      title: "E-commerce Website",
      desc: "Full-stack online store with React and Node.js",
      live: "https://casiis-commercial-company.vercel.app/",
      github: "https://github.com/caziiz/React-project-defense.git"
    },
    {
      title: "consultation company",
      desc: "A consultation company website built with html and  CSS",
      live: "https://caziiz-consultation-company.vercel.app/",
      github: "https://github.com/caziiz/Caziiz_Consultation_company.git"
    },
    {
      title: "Mosque event website",
      desc: "A mosque event website built with html CSS and JavaScript",
      live: "https://javascript-project-ten-liard.vercel.app/",
      github: "https://github.com/caziiz/javascriptProject.git"
    }
  ],
  skills: ["JavaScript", "React", "Python", "Photoshop", "HTML", "CSS"]
};

  return (
    <>
      <Navbar name={data.name} />
      <Hero name={data.name} role={data.role} />
      <About />
      <Projects projects={data.projects} />
      <Skills skills={data.skills} />
      <Contact email={data.email} />
      <Footer name={data.name} />
    </>
  );
}