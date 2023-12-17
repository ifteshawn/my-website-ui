import IntroPrac from "@/components/IntroPrac";
import AboutPrac from "@/components/aboutPrac";
import Contact from "@/components/contact";
import NavPrac from "@/components/navPrac";
import Projects from "@/components/projects";
import ProjectsPrac from "@/components/projectsPrac";
import Test from "@/components/test";
import Test1 from "@/components/test1";

export default function Home() {
  return (
    <main className="flex flex-col bg-white items-center justify-center h-full px-4 gap-y-[8rem]">
      <NavPrac />
      <IntroPrac />
      <AboutPrac />
      {/* <ProjectsPrac /> */}
      {/* <Projects /> */}
      <Test1 />
      <Contact />
    </main>
  )
}
