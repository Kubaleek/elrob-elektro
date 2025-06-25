"use client"

import About from "@/components/home/about";
import Hero from "@/components/home/hero";
import Permission from "@/components/home/permission";
import Services from "@/components/home/services";
import Gallery from "@/components/home/gallery";
import Contact from "@/components/home/contact";


export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Permission />
      <Services />
      <Gallery />
      <Contact />
    </>
  );
}
