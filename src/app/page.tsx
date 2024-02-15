import Header from "@/components/Header";
import Contact from "@/components/index/Contact";
import Features from "@/components/index/Features";
import Hero from "@/components/index/Hero";
import Table1 from "@/components/index/Table1";
import Table2 from "@/components/index/Table2";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <div className="flex flex-wrap justify-center">
          <Table1 />
          <Table2 />
        </div>
        <Contact />
      </main>
    </>
  );
}
