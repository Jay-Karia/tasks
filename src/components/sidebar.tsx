"use client";

import localFont from "next/font/local";
import { ClassNameValue } from "tailwind-merge";
import { cn } from "@/lib/utils";
import SidebarItem from "./sidebar-item";
import { useQuery } from "@tanstack/react-query";
import { getLists } from "@/actions/list";
import { ScrollArea } from "@/components/ui/scroll-area";

const headingFont = localFont({
  src: "./../../public/fonts/font.woff2",
});

type Props = {
  className?: ClassNameValue;
};

export default function Sidebar({ className }: Props) {
  const lists = useQuery({
    queryKey: ["lists"],
    queryFn: async () => await getLists(),
  });

  return (
    <div className={cn("hidden h-full w-56 gap-8 border-r sm:flex sm:flex-col md:w-72", className)}>
      <h4
        className={cn(
          "scroll-m-20 p-4 pb-0 text-xl font-semibold tracking-tight",
          headingFont.className
        )}
      >
        My Lists
      </h4>
      <ScrollArea className="h-[90%]">
        {lists.isError ? (
          <div className="p-4">{lists.error.message}</div>
        ) : lists.isLoading ? (
          <div className="p-4">Loading ...</div>
        ) : (
          <div className="flex flex-col">
            {lists.data?.map(list => {
              return (
                <div key={list.id}>
                  <SidebarItem list={list} />
                </div>
              );
            })}
          </div>
        )}
      </ScrollArea>
    </div>
  );
}
