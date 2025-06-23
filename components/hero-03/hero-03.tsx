import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { FaArrowAltCircleDown, FaWhatsapp, FaFacebook } from "react-icons/fa";
import Image from 'next/image'
import React from "react";
import { Button } from "../ui/button";

const Hero03 = () => {
  return (
    <div className="text-center min-h-3/4 w-full flex flex-col gap-10 items-center justify-center px-6 py-16 bg-primary">
      <div className="text-center max-w-3xl">
        <Badge className="bg-gradient-to-br via-70% from-primary via-muted/30 to-primary rounded-full py-1 border-none">
          Just released v1.0.0
        </Badge>
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
      <div className="flex"><div className="min-w-1/4" />
      <Image src="/truck2.png" width={800} height={800} alt="" /></div>
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
