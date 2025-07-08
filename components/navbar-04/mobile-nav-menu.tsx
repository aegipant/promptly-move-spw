"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeSheet = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          className="rounded-full bg-white cursor-pointer border-2 border-primary"
          onClick={() => setIsOpen(true)}
        >
          <Menu className="text-primary" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <Image src="/pmLogo.png" alt="" width={150} height={150} />
        <Separator className="border-2 border-primary " />
        <div className="flex flex-col space-y-4 p-4">
          <Link href="#section2Features" onClick={closeSheet}>
            <div className="hover:bg-gray-100 px-4 py-2 text-xl">
              我們的服務
            </div>
          </Link>
          <Link href="#section3Timeline" onClick={closeSheet}>
            <div className="hover:bg-gray-100 px-4 py-2 text-xl">搬屋流程</div>
          </Link>
          <Link href="#section4Features" onClick={closeSheet}>
            <div className="hover:bg-gray-100 px-4 py-2 text-xl">存倉優點</div>
          </Link>
          <Link href="#section5Social" onClick={closeSheet}>
            <div className="hover:bg-gray-100 px-4 py-2 text-xl">聯絡我們</div>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
