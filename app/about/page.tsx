import Navbar from "@/app/components/Navbar";
import About from "@/app/components/About";
import Footer from "@/app/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <About />
      </div>
      <Footer />
    </>
  );
}
