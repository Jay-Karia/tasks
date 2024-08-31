"use client";

import SidebarItemContent from "./sidebar-item-content";
import { cn } from "@/lib/utils";
import { ClassNameValue } from "tailwind-merge";
import { FcMenu } from "react-icons/fc";

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

type Props = {
  className?: ClassNameValue;
};

export default function Sidebar({ className }: Props) {
  return (
    <>
      <div className="hidden sm:block">
        <div className={cn("flex h-full w-max min-w-12 flex-col gap-8 border-r", className)}>
          <Collapsible defaultOpen={true} className="mt-4 w-max min-w-12">
            <CollapsibleTrigger className="ml-[13px]">
              <FcMenu size={22} />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarItemContent />
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
      <div className="block sm:hidden">{/* Drawer */}</div>
    </>
  );
}
