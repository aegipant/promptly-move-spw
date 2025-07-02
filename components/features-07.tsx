import {
  Users,
  Zap,
  HandCoins,
  AirVent,
  CalendarClock,
  BadgeDollarSign,
  Scaling,
  Package,
  Ruler,
  Cctv,
  ShieldCheck,
  Armchair,
} from "lucide-react";

const features = [
  {
    icon: AirVent,
    title: "冷氣倉庫, 24小時冷氣🥶",
  },
  {
    icon: HandCoins,
    title: "租期彈性（可月計或日計）",
  },
  {
    icon: CalendarClock,
    title: "租金每月付款",
  },
  {
    icon: Zap,
    title: "不用按金, 不用預繳",
  },
  {
    icon: BadgeDollarSign,
    title: "有七種電子支付方案",
  },
  {
    icon: Scaling,
    title: "中央倉存, 沒有體積&大小&空間限制",
  },
  {
    icon: Package,
    title: "免費提供紙箱/膠盒(仲免費送上門)",
  },
  {
    icon: Ruler,
    title: "自設過萬尺倉庫",
  },
  {
    icon: Cctv,
    title: "消防&抽濕系統, 閉路電視",
  },
  {
    icon: ShieldCheck,
    title: "二十四小時保安",
  },
  {
    icon: Armchair,
    title: "傢俬裝拆",
  },
  {
    icon: Users,
    title: "自家搬屋團隊, 搬運",
  },
];

const Features07Page = () => {
  return (
    <div id="section4Features" className="min-h-screen flex items-center justify-center">
      <div className="max-w-screen-xl w-full py-10 px-6">
        <h2 className="text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight max-w-xl md:text-center md:mx-auto">
          存倉優點
        </h2>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const IconComponent = feature.icon; // Get the icon component
            return (
              <div 
                key={feature.title} 
                className="flex items-center gap-6 hover:ring rounded-lg p-2 -mx-2 sm:mx-0 max-w-lg transition duration-300"
              >
                <div className="h-24 aspect-square shrink-0 rounded-lg bg-muted flex items-center justify-center">
                  <IconComponent className="text-primary w-12 h-12" /> {/* Render the icon with color */}
                </div>
                <div className="flex items-center"> {/* Added flex to center text vertically */}
                  <span className="font-semibold tracking-tight text-lg">
                    {feature.title}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features07Page;