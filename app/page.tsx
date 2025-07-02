import Navbar04Page from "@/components/navbar-04/navbar-04";
import Hero03 from "@/components/hero-03";
import Footer05Page from "@/components/footer-05";
import Features02Page from "@/components/features-02";
import Timeline from "@/components/timeline-05";
import SocialSection from "@/components/social";
import Features07Page from "@/components/features-07";

export default function Home() {
  return (
      <><div className="grid grid-rows-[20px_1fr_10px] items-center justify-items-center min-h-screen px-8 gap-8 font-[family-name:var(--font-geist-sans)]">
      <Navbar04Page />
      <Hero03 />
      
    </div>
    <Features02Page />
    <Timeline />
    <Features07Page />
    <SocialSection />
    <Footer05Page />
    </>
  );
}
