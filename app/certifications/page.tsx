import Navbar from "@/app/components/Navbar";
import CertificationsGrid from "@/app/components/CertificationsGrid";
import Footer from "@/app/components/Footer";

export default function CertificationsPage() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <CertificationsGrid />
      </div>
      <Footer />
    </>
  );
}
