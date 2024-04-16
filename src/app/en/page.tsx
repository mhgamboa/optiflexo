import Footer from "@/components/Footer";
// import Header from "@/components/Header";
import Contact from "@/components/index/Contact";
import Features from "@/components/index/Features";
import Hero from "@/components/index/Hero";
import Paragraph from "@/components/index/Paragraph";
import Table1 from "@/components/index/Table1";
import Table2 from "@/components/index/Table2";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <main>
        <Hero lang="en" />
        <Features lang="en" />
        <div className="flex flex-wrap justify-center">
          <Table1 lang="en" />
          <Table2 lang="en" />
        </div>
        <Paragraph lang="en" />
        <Contact lang="en" />
      </main>
      <Footer lang="en" />
    </>
  );
}
