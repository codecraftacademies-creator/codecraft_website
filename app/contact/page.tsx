import Navbar from "@/app/components/Navbar";
import ContactForm from "@/app/components/ContactForm";
import Footer from "@/app/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}
