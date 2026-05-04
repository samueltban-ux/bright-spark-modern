import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import VipProgramSection from "@/components/VipProgramSection";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

const VipProgram = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--navy-dark))]">
      <TopBar />
      <Navbar />
      <Breadcrumb items={[{ label: "VIP Program" }]} />
      <VipProgramSection />
      <Footer />
    </div>
  );
};

export default VipProgram;
