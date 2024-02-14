import Header from "@/components/Header";
import Contact from "@/components/index/Contact";
import Features from "@/components/index/Features";
import Features2 from "@/components/index/Features2";
import Hero from "@/components/index/Hero";
import Table from "@/components/index/Table";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        {/* <Features2 /> */}
        <Table />
        <Contact />
      </main>
    </>
  );
}
