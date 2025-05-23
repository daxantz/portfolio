import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeaderText from "@/components/HeaderText";
import LargerHeader from "@/components/LargerHeader";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <div className="md:hidden flex flex-col items-center">
        <Header />
        <HeaderText />
      </div>
      <LargerHeader />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}
