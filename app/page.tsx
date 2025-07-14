import Navbar04Page from "@/components/navbar-04/navbar-04";
import Hero03 from "@/components/hero-03/hero-03";
import Footer05Page from "@/components/footer-05/footer-05";
import Features02Page from "@/components/features-02/features-02";
import Timeline from "@/components/timeline-05/timeline-05";

export default function Home() {
  return (
      <>
          <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-5GXEEZ6Q0P"
          ></script>
          <script
              dangerouslySetInnerHTML={{
                  __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-5GXEEZ6Q0P');
            `,
              }}
          ></script>
          <div className="grid grid-rows-[20px_1fr_10px] items-center justify-items-center min-h-screen px-8 gap-8 font-[family-name:var(--font-geist-sans)]">
              <Navbar04Page />
              <Hero03 />
          </div>
          <Features02Page />
          <Timeline />
          <Footer05Page />
      </>
  );
}
