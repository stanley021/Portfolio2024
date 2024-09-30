"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { ProjectExpand } from "@/components/RecentProjectv2";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Skills from "@/components/Skills";
import {ExpandableCardDemo} from "@/components/Expand"
import {IconCloudDemo} from "@/components/ui/skillgloberelative"

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center overflow-clip flex-col mx-auto sm:px-10 px-5">
      <div className="max-w-6xl w-full">
        
        <FloatingNav navItems={navItems} />
        <Hero />
        <TracingBeam className="">
        <Grid />
        {/* <Approach /> */}
        
        <ExpandableCardDemo />
        {/* <Clients /> */}
        {/* <Experience /> */}
        {/* <ThreeDCardDemo /> */}
        
        {/* <RecentProjects /> */}
        <ProjectExpand/>
        
        {/* <Skills /> */}
        <IconCloudDemo/>
        <Footer />
        </TracingBeam>
      </div>
    </main>
  );
};

export default Home;
