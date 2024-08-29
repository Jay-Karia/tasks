import Image from "next/image";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

const primaryFont = localFont({
  src: "../../public/fonts/font.woff2",
});

export default function Logo() {
  return (
    <div className="flex gap-1 hover:cursor-pointer hover:opacity-80">
      <Image src="/logo.png" height={30} width={30} alt="Logo" />
      <h4
        className={cn(
          "flex scroll-m-20 items-center text-xl font-semibold tracking-tight",
          primaryFont.className
        )}
      >
        Tasks
      </h4>
    </div>
  );
}
