import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { FaArrowAltCircleDown, FaWhatsapp, FaFacebook } from "react-icons/fa";
import Image from 'next/image'
import React from "react";
import { Button } from "@/components/ui/button";

const Hero03 = () => {
  return (
    <div className="text-center min-h-3/4 w-full flex flex-col gap-10 items-center justify-center px-6 py-16 bg-primary">
      <div className="text-center max-w-3xl">
        <h1 className="mt-6 text-3xl sm:text-4xl md:text-6xl font-bold !leading-[1.2] tracking-tight">
          請找即到，我地即刻就到！
        </h1>
        <p className="mt-6 text-[17px] md:text-lg text-white">
          歡迎查詢🔍免費報價！
        </p>
      </div>
       <div className="mt-6 flex items-center justify-center gap-4">
           <Button
            variant="outline"
            size="lg"
            className="rounded-full text-base shadow-none"
          >
            <FaWhatsapp className="!h-5 !w-5 text-green-500" /> 免費報價
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full text-base shadow-none"
          >
            <FaFacebook className="!h-5 !w-5 text-blue-700" /> 了解更多
          </Button>
        </div>
      <div className="flex">
      <Image src="/banner.jpeg" width={800} height={800} alt="" /></div>
        <div className="w-1/2">即到提供一站式搬屋服務，包括女團 Pack 箱、裝修存倉、傢俬存倉、棄置傢俬等，無論村屋、公屋、居屋、住宅、辦公室、商舖，港九新界都幫到你。
            即到上門儲存盒服務，專人免費上門派盒收盒，無需簽約，無需預繳，無需按金，支援多種電子付款方式。
            想搵一個方便快捷、無隱藏收費、更幫你上門收送的專業存倉搬屋公司? 即到搬屋公司就是你的不二之選！</div>
      <Link href="#section2Features">
              <FaArrowAltCircleDown
                className="animate-bounce w-12 h-12 text-white"
                href="#section2Features"
              />
            </Link>        
    </div>
  );
};

export default Hero03;
