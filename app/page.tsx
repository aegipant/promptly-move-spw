import Navbar04Page from "@/components/navbar-04/navbar-04";
import Hero03 from "@/components/hero-03";
import Footer05Page from "@/components/footer-05";
import Features02Page from "@/components/features-02";
import Timeline from "@/components/timeline-05";
import SocialSection from "@/components/social";
import Features07Page from "@/components/features-07";
import Head from "next/head";

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

      <Head>
        <title>即到搬屋 | 即到有限公司 | 搬屋,搬office,裝修存倉,儲存盒,棄置傢俬,村屋,居屋,公屋,住宅  | Promptly Move</title>
        <meta name="description" content="即到提供一站式搬屋服務，包括女團 Pack 箱、裝修存倉、傢俬存倉、棄置傢俬等，無論村屋、公屋、居屋、住宅、辦公室、商舖，港九新界都幫到你。" />
        <meta name="keywords" content="搬屋, 搬office, 裝修存倉, 儲存盒, 棄置傢俬, 村屋, 居屋, 公屋, 住宅" />
        {/* Add any additional meta tags here */}
      </Head>
      <div className="grid grid-rows-[20px_1fr_10px] items-center justify-items-center min-h-screen px-8 gap-8 font-[family-name:var(--font-geist-sans)]">
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
