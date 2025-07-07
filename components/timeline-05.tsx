import { steps } from "@/constants";
import Image from "next/image";

export default function Timeline() {
  return (
    <>
    <div id="section3Timeline" className="w-full pt-10 sm:pt-20 md:pt-25">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-center">
          搬屋都可以舒舒服服坐係度吾駛郁
        </h2>
      </div>
    <div className="min-h-1/2 flex flex-col items-center justify-center min-w-screen-full mx-auto py-12 md:py-20 px-6">
      <div className="flex flex-col ml-6">
        {/* Timeline line */}
        <div className="flex left-0 inset-y-0" />

        {steps.map(({ title, imagepath }, index) => (
          <div key={index} className="relative pl-10 pb-10 last:pb-0">
            {/* Timeline Icon */}
            <div className="absolute left-px -translate-x-1/2 h-9 w-9 border-2 border-primary flex items-center justify-center rounded-full bg-accent ring-8 ring-background">
              <span className="font-semibold text-lg">{index + 1}</span>
            </div>

            {/* Content */}
            <div className="pt-1 space-y-2">
              <h3 className="text-xl font-semibold">{title}</h3>
              <Image src={imagepath} alt="" width={300} height={300} />
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
