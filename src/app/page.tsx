import Image from "next/image";
import CodeCard from "@/components/bento/code-card";
import StickersCard from "@/components/bento/stickers-card";
import TabsCard from "@/components/bento/tabs-card";
import MapCard from "@/components/bento/map-card";
import PortfolioCard from "@/components/bento/portfolio-card";
import FilesCard from "@/components/bento/files-card";
import GlassCard from "@/components/bento/glass-card";
import { site } from "@/content/site";

export default function HomePage() {
  return (
    <>
      {/* Mobile greeting — on desktop it lives in the header. */}
      <div className="mx-auto flex w-full max-w-[1440px] items-center gap-3 px-6 pt-6 md:hidden">
        <Image
          src={site.logo}
          alt=""
          width={32}
          height={32}
          className="rounded-full"
        />
        <p className="font-semibold tracking-tight">{site.greeting}</p>
      </div>
      {/* flex-1 + content-center vertically centers the bento between the
          header and footer cards (owner preference). */}
      <main className="mx-auto grid w-full max-w-[1440px] flex-1 grid-cols-1 content-center gap-4 p-4 md:grid-cols-2 md:gap-8 md:p-8 xl:grid-cols-3">
        <CodeCard />
        <StickersCard />
        <TabsCard />
        <MapCard />
        <PortfolioCard />
        <FilesCard />
        <GlassCard />
      </main>
    </>
  );
}
