import { Separator } from "@/components/ui/separator";
import { FaFacebook, FaInstagram, FaWhatsapp} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Footer05Page = () => {
  return (
    <div className="min-h-1/2 flex flex-col">
      <footer>
        <div className="max-w-screen-xl mx-auto">
          <div className="py-12 flex flex-col justify-start items-center">
            <Image src="/pmLogo.png" alt="" width={300} height={300} />
          </div>
          <Separator />
          <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
            {/* Copyright */}
            <span className="text-muted-foreground">
              &copy; {new Date().getFullYear()}{" "}
              <Link href="/" target="_blank">
                Promptly Move Limited
              </Link>
              . All rights reserved. Powered by Aegipan Technology Limited.
            </span>

            <div className="flex items-center gap-5 text-primary">
              <Link href="https://www.facebook.com/promptlymovemove/" target="_blank">
                <FaFacebook className="h-8 w-8" />
              </Link>
              <Link href="https://www.instagram.com/PROMPTLYMOVE/" target="_blank">
                <FaInstagram className="h-8 w-8" />
              </Link>
              <Link href="http://wa.me/85254635464" target="_blank">
                <FaWhatsapp className="h-8 w-8" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer05Page;
