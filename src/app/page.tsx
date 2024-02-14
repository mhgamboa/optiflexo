import Header from "@/components/Header";
import Contact from "@/components/index/Contact";
import Features from "@/components/index/Features";
import Hero from "@/components/index/Hero";
import Table from "@/components/index/Table";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Table />
        <Contact />
      </main>
    </>
  );
}
