import { FaHome } from "react-icons/fa";
import Image from "next/image";

import { FloatingNav } from "./components/ui/FloatingNav";
import { navItems } from "@/data";
import MainTitle from "./components/MainTitle";
import Grid from "./components/Grid";
import RecentProjects from "./components/RecentProjects";
import Books from "./components/Books";
import Experience from "./components/Experience";
import Strategy from "./components/Strategy";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={ navItems } />
        <MainTitle />
        <Grid />
        <RecentProjects />
        <Books />
        <Experience />
        <Strategy />
        <Footer />
      </div>
    </main>
  )
}
