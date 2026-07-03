import Image from "next/image";
import Clock from "@/components/clock";
import ThemeToggle from "@/components/theme-toggle";
import { site } from "@/content/site";

export default function Header() {
  return (
    <header className="rounded-b-[28px] border-x border-b border-border-secondary bg-bg-primary max-md:sticky max-md:top-0 max-md:z-40">
      <div className="mx-auto flex w-full max-w-[1376px] items-center justify-between gap-4 px-4 py-3 sm:px-8">
        {/* Greeting lives in the header on desktop; on mobile it renders below
            the sticky clock bar (see page.tsx). */}
        <div className="hidden min-w-0 items-center gap-3 md:flex">
          <Image
            src={site.logo}
            alt=""
            width={32}
            height={32}
            className="rounded-full"
          />
          <p className="truncate font-semibold tracking-tight">
            {site.greeting}
          </p>
        </div>
        <div className="flex w-full items-center justify-between gap-3 md:w-auto md:justify-end">
          <Clock />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
