"use client";

import { List } from "@/types/list";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { truncate } from "@/lib/truncate";
import { PiListBullets } from "react-icons/pi";

type Props = {
  list: List;
};

export default function SidebarItem({ list }: Props) {
  const pathname = usePathname();

  function getCurrentList() {
    if (pathname.startsWith("/list/")) return pathname.substring(6);

    return "";
  }

  function isCurrentList() {
    if (getCurrentList() === list.id) return true;

    return false;
  }

  return (
    <Link href={`/list/${list.id}`}>
      <div
        className={cn(
          "flex min-w-56 items-center py-4 pr-2 hover:cursor-pointer md:w-64 lg:w-[270px]",
          isCurrentList() ? "border-l-2 border-blue-600 bg-blue-50" : "hover:bg-slate-50"
        )}
      >
        <PiListBullets className="min-w-12" size={20} />
        <small className="text-sm font-normal leading-none">{truncate(list.title, 20)}</small>
      </div>
    </Link>
  );
}
